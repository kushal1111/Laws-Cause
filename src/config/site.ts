export type SiteConfig = {
  name: string;
  tagline: string;
  description: string;
  url: string;
  locale: "en";
  city: string;
  country: string;
  countryCode: string;
  /** Street address. Leave null until a verified office address is available. */
  streetAddress: string | null;
  /** Public email. Leave null until confirmed. */
  email: string | null;
  /** Public telephone, including country code. Leave null until confirmed. */
  phone: string | null;
  /** WhatsApp number in international format. Leave null until confirmed. */
  whatsapp: string | null;
  /** Published business hours. Leave null until confirmed. */
  hours: string | null;
  /** Verified social profile URLs only. */
  social: { label: string; href: string }[];
  ogImagePath: string;
};

const configuredUrl = import.meta.env.VITE_SITE_URL?.trim();

export const site: SiteConfig = {
  name: "Laws & Cause",
  tagline: "Principled Counsel. Purposeful Action.",
  description:
    "Laws & Cause is an independent law firm in Kathmandu. We advise individuals, companies, and international clients on matters governed by Nepalese law.",
  url: (configuredUrl && configuredUrl.length > 0 ? configuredUrl : "https://example.com").replace(
    /\/+$/,
    "",
  ),
  locale: "en",
  city: "Kathmandu",
  country: "Nepal",
  countryCode: "NP",
  streetAddress: null,
  email: null,
  phone: null,
  whatsapp: null,
  hours: null,
  social: [],
  ogImagePath: "/og.png",
};

export type FormMode = "demo" | "endpoint" | "function";

export function getFormMode(): FormMode {
  const mode = import.meta.env.VITE_FORM_MODE;
  const endpoint = import.meta.env.VITE_FORM_ENDPOINT?.trim();
  if (mode === "function") return "function";
  if (mode === "endpoint" && endpoint) return "endpoint";
  return "demo";
}

export function getFormEndpoint(): string | null {
  const endpoint = import.meta.env.VITE_FORM_ENDPOINT?.trim();
  return endpoint ? endpoint : null;
}

export function getTurnstileSiteKey(): string | null {
  const key = import.meta.env.VITE_TURNSTILE_SITE_KEY?.trim();
  return key ? key : null;
}

export function absoluteUrl(pathname: string): string {
  if (pathname === "/") return `${site.url}/`;
  return `${site.url}${pathname.startsWith("/") ? pathname : `/${pathname}`}`;
}
