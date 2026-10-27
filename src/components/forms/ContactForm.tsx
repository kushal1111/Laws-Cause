import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { getFormMode, getTurnstileSiteKey } from "@/config/site";
import { practiceAreas } from "@/content/practiceAreas";
import { contactSchema, type ContactInput } from "@/lib/contactSchema";
import { submitContact, type SubmissionResult } from "@/lib/submission";
import { Button } from "@/components/ui/Button";
import { TurnstileField } from "@/components/forms/TurnstileField";

const enquiryOptions = [
  { value: "general", label: "General enquiry" },
  ...practiceAreas.map((area) => ({ value: area.slug, label: area.title })),
];

const emptyValues: ContactInput = {
  fullName: "",
  email: "",
  phone: "",
  practiceArea: "",
  subject: "",
  message: "",
  consent: false,
  faxNumber: "",
};

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-2 text-sm text-forest">
      {message}
    </p>
  );
}

export function ContactForm() {
  const mode = getFormMode();
  const turnstileSiteKey = mode === "demo" ? null : getTurnstileSiteKey();
  const [turnstileToken, setTurnstileToken] = useState("");
  const [result, setResult] = useState<SubmissionResult | null>(null);
  const statusRef = useRef<HTMLDivElement>(null);
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({ defaultValues: emptyValues });

  useEffect(() => {
    if (result) statusRef.current?.focus();
  }, [result]);

  const onSubmit = handleSubmit(async (values) => {
    setResult(null);
    const parsed = contactSchema.safeParse(values);
    if (!parsed.success) {
      for (const issue of parsed.error.issues) {
        const field = issue.path[0];
        if (typeof field === "string") {
          setError(field as keyof ContactInput, { message: issue.message });
        }
      }
      return;
    }
    if (turnstileSiteKey && !turnstileToken) {
      setResult({
        ok: false,
        code: "rejected",
        message: "Complete the bot check before sending. The message was not delivered.",
      });
      return;
    }
    const submission = await submitContact(parsed.data, turnstileToken);
    setResult(submission);
    if (submission.ok) reset(emptyValues);
  });

  return (
    <form
      className="space-y-6"
      method="post"
      action={mode === "function" ? "/api/contact" : undefined}
      onSubmit={(event) => {
        void onSubmit(event);
      }}
      noValidate={false}
    >
      {mode === "demo" ? (
        <p className="border border-line bg-stone px-4 py-3 text-sm leading-6">
          Online delivery is not active yet. The form checks your message in this browser and will
          tell you, clearly, that it has not been sent.
        </p>
      ) : null}

      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="faxNumber">Fax number</label>
        <input id="faxNumber" tabIndex={-1} autoComplete="off" {...register("faxNumber")} />
      </div>

      {result ? (
        <div
          role="status"
          tabIndex={-1}
          ref={statusRef}
          className={`border px-4 py-3 text-sm leading-6 ${
            result.ok ? "border-forest bg-forest text-ivory" : "border-gold-deep bg-ivory"
          }`}
        >
          <p className="font-semibold">{result.ok ? "Message sent" : "Message not sent"}</p>
          <p className="mt-1">
            {result.ok
              ? "Thank you. The firm has received your enquiry and will respond if it can assist. This does not yet create a lawyer-client relationship."
              : result.message}
          </p>
        </div>
      ) : null}

      <div>
        <label htmlFor="fullName" className="text-sm">
          Full name
        </label>
        <input
          id="fullName"
          className="mt-2 w-full border border-line bg-ivory px-3 py-3"
          autoComplete="name"
          required
          aria-invalid={errors.fullName ? true : undefined}
          aria-describedby={errors.fullName ? "fullName-error" : undefined}
          {...register("fullName")}
        />
        <FieldError id="fullName-error" message={errors.fullName?.message} />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="text-sm">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="mt-2 w-full border border-line bg-ivory px-3 py-3"
            autoComplete="email"
            required
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email")}
          />
          <FieldError id="email-error" message={errors.email?.message} />
        </div>
        <div>
          <label htmlFor="phone" className="text-sm">
            Phone <span className="text-muted">(optional)</span>
          </label>
          <input
            id="phone"
            type="tel"
            className="mt-2 w-full border border-line bg-ivory px-3 py-3"
            autoComplete="tel"
            aria-invalid={errors.phone ? true : undefined}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            {...register("phone")}
          />
          <FieldError id="phone-error" message={errors.phone?.message} />
        </div>
      </div>

      <div>
        <label htmlFor="practiceArea" className="text-sm">
          Practice area
        </label>
        <select
          id="practiceArea"
          className="mt-2 w-full border border-line bg-ivory px-3 py-3"
          required
          aria-invalid={errors.practiceArea ? true : undefined}
          aria-describedby={errors.practiceArea ? "practiceArea-error" : undefined}
          {...register("practiceArea")}
        >
          <option value="">Select a practice area</option>
          {enquiryOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <FieldError id="practiceArea-error" message={errors.practiceArea?.message} />
      </div>

      <div>
        <label htmlFor="subject" className="text-sm">
          Subject
        </label>
        <input
          id="subject"
          className="mt-2 w-full border border-line bg-ivory px-3 py-3"
          required
          minLength={3}
          aria-invalid={errors.subject ? true : undefined}
          aria-describedby={errors.subject ? "subject-error" : undefined}
          {...register("subject")}
        />
        <FieldError id="subject-error" message={errors.subject?.message} />
      </div>

      <div>
        <label htmlFor="message" className="text-sm">
          Message
        </label>
        <textarea
          id="message"
          className="mt-2 min-h-40 w-full border border-line bg-ivory px-3 py-3"
          required
          minLength={20}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? "message-error" : undefined}
          {...register("message")}
        />
        <FieldError id="message-error" message={errors.message?.message} />
      </div>

      <div>
        <label htmlFor="consent" className="flex items-start gap-3 text-sm leading-6">
          <input
            id="consent"
            type="checkbox"
            className="mt-1 h-5 w-5 accent-forest"
            required
            aria-invalid={errors.consent ? true : undefined}
            aria-describedby={errors.consent ? "consent-error" : undefined}
            {...register("consent")}
          />
          <span>
            I understand that this enquiry does not create a lawyer-client relationship, and I have
            read the{" "}
            <Link to="/privacy-policy" className="underline">
              privacy policy
            </Link>
            .
          </span>
        </label>
        <FieldError id="consent-error" message={errors.consent?.message} />
      </div>

      {turnstileSiteKey ? (
        <TurnstileField siteKey={turnstileSiteKey} onToken={setTurnstileToken} />
      ) : null}

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}
