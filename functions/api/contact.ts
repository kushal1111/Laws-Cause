import { contactRequestSchema } from "../../src/lib/contactSchema.ts";

type Env = {
  RESEND_API_KEY?: string;
  CONTACT_TO?: string;
  CONTACT_FROM?: string;
  TURNSTILE_SECRET_KEY?: string;
};

type FunctionContext = {
  request: Request;
  env: Env;
};

const maxBody = 20_000;

function json(body: unknown, status: number): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json; charset=utf-8" },
  });
}

function html(title: string, message: string, status: number): Response {
  const safe = (value: string) =>
    value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
  const document = `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>${safe(title)}</title></head><body><main><h1>${safe(title)}</h1><p>${safe(message)}</p><p><a href="/contact">Return to the contact page</a></p></main></body></html>`;
  return new Response(document, {
    status,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

function respond(
  wantsHtml: boolean,
  title: string,
  message: string,
  status: number,
  code: string,
): Response {
  if (wantsHtml) return html(title, message, status);
  return json({ ok: status < 300, code, message }, status);
}

async function verifyTurnstile(secret: string, token: string, remoteIp: string): Promise<boolean> {
  const body = new FormData();
  body.set("secret", secret);
  body.set("response", token);
  if (remoteIp) body.set("remoteip", remoteIp);
  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body,
  });
  if (!response.ok) return false;
  const result = (await response.json()) as { success?: boolean };
  return result.success === true;
}

export async function onRequest(context: FunctionContext): Promise<Response> {
  const { request, env } = context;
  if (request.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  const contentType = request.headers.get("content-type") ?? "";
  const wantsHtml = !contentType.includes("application/json");
  const origin = request.headers.get("origin");
  const host = request.headers.get("host");
  if (origin && host) {
    try {
      if (new URL(origin).host !== host) {
        return respond(
          wantsHtml,
          "Message not sent",
          "The form could not be accepted from that address.",
          403,
          "rejected",
        );
      }
    } catch {
      return respond(
        wantsHtml,
        "Message not sent",
        "The form could not be accepted.",
        400,
        "invalid",
      );
    }
  }

  const raw = await request.text();
  if (raw.length > maxBody) {
    return respond(wantsHtml, "Message not sent", "The message is too long.", 400, "invalid");
  }

  let payload: unknown;
  if (contentType.includes("application/json")) {
    try {
      payload = JSON.parse(raw) as unknown;
    } catch {
      return respond(wantsHtml, "Message not sent", "The form could not be read.", 400, "invalid");
    }
  } else {
    const params = new URLSearchParams(raw);
    payload = {
      fullName: params.get("fullName") ?? "",
      email: params.get("email") ?? "",
      phone: params.get("phone") ?? "",
      practiceArea: params.get("practiceArea") ?? "",
      subject: params.get("subject") ?? "",
      message: params.get("message") ?? "",
      consent: params.get("consent") === "on" || params.get("consent") === "true",
      faxNumber: params.get("faxNumber") ?? "",
      turnstileToken: params.get("cf-turnstile-response") ?? undefined,
    };
  }

  const parsed = contactRequestSchema.safeParse(payload);
  if (!parsed.success) {
    return respond(
      wantsHtml,
      "Message not sent",
      "Some fields need attention. Nothing was delivered.",
      400,
      "invalid",
    );
  }

  if (!env.RESEND_API_KEY || !env.CONTACT_TO || !env.CONTACT_FROM) {
    return respond(
      wantsHtml,
      "Message not sent",
      "Form delivery is not configured yet. Your message was not sent.",
      503,
      "not_configured",
    );
  }

  if (env.TURNSTILE_SECRET_KEY) {
    const token = parsed.data.turnstileToken ?? "";
    const remoteIp = request.headers.get("CF-Connecting-IP") ?? "";
    const passed = token ? await verifyTurnstile(env.TURNSTILE_SECRET_KEY, token, remoteIp) : false;
    if (!passed) {
      return respond(
        wantsHtml,
        "Message not sent",
        "The bot check did not succeed. Your message was not sent.",
        403,
        "rejected",
      );
    }
  } else {
    console.warn("TURNSTILE_SECRET_KEY is not set. Delivery is running without bot verification.");
  }

  const data = parsed.data;
  const subject = data.subject.replaceAll(/[\r\n]+/g, " ").slice(0, 160);
  const text = [
    `Name: ${data.fullName}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone || "Not provided"}`,
    `Practice area: ${data.practiceArea}`,
    `Subject: ${subject}`,
    "",
    data.message,
  ].join("\n");

  const email = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: env.CONTACT_FROM,
      to: [env.CONTACT_TO],
      reply_to: data.email,
      subject: `[Laws & Cause] ${subject}`,
      text,
    }),
  });

  if (!email.ok) {
    return respond(
      wantsHtml,
      "Message not sent",
      "The message could not be delivered. Nothing has been confirmed as sent.",
      502,
      "network",
    );
  }

  return respond(
    wantsHtml,
    "Message sent",
    "Thank you. The firm has received your enquiry. This does not yet create a lawyer-client relationship.",
    200,
    "sent",
  );
}
