import { getFormEndpoint, getFormMode } from "@/config/site";
import type { ContactInput } from "@/lib/contactSchema";

export type SubmissionResult =
  | { ok: true }
  | {
      ok: false;
      code: "demo" | "not_configured" | "invalid" | "network" | "rejected";
      message: string;
    };

const notDelivered =
  "Your message was checked, but it was not delivered. Please try again later, or use the telephone or email once they are published.";

async function readFailure(response: Response): Promise<SubmissionResult> {
  let message = notDelivered;
  const contentType = response.headers.get("content-type") ?? "";
  if (contentType.includes("application/json")) {
    try {
      const body = (await response.json()) as { message?: string };
      if (body.message) message = body.message;
    } catch {
      message = notDelivered;
    }
  }
  if (response.status === 503) {
    return { ok: false, code: "not_configured", message };
  }
  if (response.status === 400 || response.status === 403) {
    return { ok: false, code: "rejected", message };
  }
  return { ok: false, code: "network", message };
}

async function postJson(
  url: string,
  payload: ContactInput,
  turnstileToken: string,
): Promise<SubmissionResult> {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ ...payload, turnstileToken }),
    });
    if (!response.ok) return readFailure(response);
    const contentType = response.headers.get("content-type") ?? "";
    if (contentType.includes("application/json")) {
      const body = (await response.json()) as { ok?: boolean; message?: string };
      if (body.ok === false) {
        return {
          ok: false,
          code: "not_configured",
          message: body.message ?? notDelivered,
        };
      }
    }
    return { ok: true };
  } catch {
    return {
      ok: false,
      code: "network",
      message:
        "The message could not be delivered because the connection failed. Nothing has been confirmed as sent.",
    };
  }
}

export async function submitContact(
  payload: ContactInput,
  turnstileToken: string,
): Promise<SubmissionResult> {
  const mode = getFormMode();
  if (mode === "function") {
    return postJson("/api/contact", payload, turnstileToken);
  }
  if (mode === "endpoint") {
    const endpoint = getFormEndpoint();
    if (!endpoint) {
      return {
        ok: false,
        code: "demo",
        message:
          "Form delivery is not configured. Your message was validated in this browser and was not sent.",
      };
    }
    return postJson(endpoint, payload, turnstileToken);
  }
  return {
    ok: false,
    code: "demo",
    message:
      "This form is in demonstration mode. Your details were checked on this page and were not sent to the firm.",
  };
}
