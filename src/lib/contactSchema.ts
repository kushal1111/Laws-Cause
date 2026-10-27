import { z } from "zod";

export const contactSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Please enter your full name.")
    .max(120, "Please shorten your name."),
  email: z
    .string()
    .trim()
    .min(1, "Email is required.")
    .email("Enter a valid email address.")
    .max(160, "Please shorten the email address."),
  phone: z
    .string()
    .trim()
    .max(40, "Enter a shorter telephone number.")
    .refine((value) => value === "" || /^[0-9+().\-\s]{6,40}$/.test(value), {
      error: "Enter a telephone number using digits and the usual symbols.",
    }),
  practiceArea: z
    .string()
    .trim()
    .min(1, "Choose a practice area.")
    .max(80, "Choose a practice area from the list."),
  subject: z.string().trim().min(3, "Add a short subject.").max(160, "Please shorten the subject."),
  message: z
    .string()
    .trim()
    .min(20, "Please describe the matter in at least a few sentences.")
    .max(5000, "Please shorten the message."),
  consent: z.boolean().refine((value) => value, {
    error: "Please confirm that you understand the privacy notice.",
  }),
  faxNumber: z.string().max(0, "This message could not be sent."),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const contactRequestSchema = contactSchema.extend({
  turnstileToken: z.string().optional(),
});

export type ContactRequest = z.infer<typeof contactRequestSchema>;
