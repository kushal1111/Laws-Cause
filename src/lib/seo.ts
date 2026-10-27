import { getPublishedArticle } from "@/content/articles";
import { getPracticeBySlug } from "@/content/practiceAreas";
import { absoluteUrl, site } from "@/config/site";
import { normalizePath } from "@/lib/paths";

export type PageMeta = {
  title: string;
  description: string;
  canonical: string;
  image: string;
  imageAlt: string;
  noindex: boolean;
  ogType: "website" | "article";
};

const imageAlt = "Laws & Cause, a law firm in Kathmandu, Nepal.";

function page(
  pathname: string,
  title: string,
  description: string,
  options?: { noindex?: boolean; ogType?: "website" | "article" },
): PageMeta {
  return {
    title,
    description,
    canonical: absoluteUrl(pathname),
    image: `${site.url}${site.ogImagePath}`,
    imageAlt,
    noindex: options?.noindex ?? false,
    ogType: options?.ogType ?? "website",
  };
}

const staticMeta: Record<string, { title: string; description: string }> = {
  "/": {
    title: "Laws & Cause | Law Firm in Kathmandu, Nepal",
    description:
      "Laws & Cause is a law firm in Kathmandu advising individuals, companies, and foreign investors on Nepalese law, disputes, and commercial matters.",
  },
  "/about": {
    title: "About Laws & Cause | Law Firm in Kathmandu",
    description:
      "Learn how Laws & Cause approaches legal counsel in Kathmandu: clear advice, client relationships, and work grounded in Nepalese procedure.",
  },
  "/practice-areas": {
    title: "Practice Areas | Law Firm in Kathmandu",
    description:
      "Practice areas at Laws & Cause, including corporate law, litigation, property, family law, and foreign investment advice in Nepal.",
  },
  "/our-team": {
    title: "Our Team | Laws & Cause",
    description:
      "The lawyers at Laws & Cause in Kathmandu. Individual profiles are published only when the details have been confirmed.",
  },
  "/insights": {
    title: "Legal Insights | Laws & Cause",
    description:
      "Notes on Nepalese law from Laws & Cause in Kathmandu, published when an article has been reviewed and attributed.",
  },
  "/contact": {
    title: "Contact Laws & Cause | Kathmandu Law Firm",
    description:
      "Request a legal consultation with Laws & Cause in Kathmandu. An enquiry does not by itself create a lawyer-client relationship.",
  },
  "/privacy-policy": {
    title: "Privacy Policy | Laws & Cause",
    description:
      "How Laws & Cause handles personal information submitted through this website, including the contact form and hosting logs.",
  },
  "/legal-disclaimer": {
    title: "Legal Disclaimer | Laws & Cause",
    description:
      "The information on the Laws & Cause website is general. It is not legal advice and does not create a lawyer-client relationship.",
  },
};

export function resolveMeta(pathname: string): PageMeta {
  const path = normalizePath(pathname);
  const known = staticMeta[path];
  if (known) return page(path, known.title, known.description);

  if (path.startsWith("/practice-areas/")) {
    const area = getPracticeBySlug(path.slice("/practice-areas/".length));
    if (area) return page(path, area.seo.title, area.seo.description);
  }

  if (path.startsWith("/insights/")) {
    const article = getPublishedArticle(path.slice("/insights/".length));
    if (article) {
      return page(path, article.seo.title, article.seo.description, { ogType: "article" });
    }
  }

  return page(
    path === "/404" ? "/404" : path,
    "Page not found | Laws & Cause",
    "The page you requested is not available on the Laws & Cause website.",
    {
      noindex: true,
    },
  );
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export function renderHead(meta: PageMeta): string {
  const robots = meta.noindex ? "noindex, follow" : "index, follow";
  const tags = [
    `<title>${escapeHtml(meta.title)}</title>`,
    `<meta data-seo="name:description" name="description" content="${escapeHtml(meta.description)}" />`,
    `<meta data-seo="name:robots" name="robots" content="${robots}" />`,
    `<link data-seo="canonical" rel="canonical" href="${escapeHtml(meta.canonical)}" />`,
    `<meta data-seo="property:og:type" property="og:type" content="${meta.ogType}" />`,
    `<meta data-seo="property:og:site_name" property="og:site_name" content="${escapeHtml(site.name)}" />`,
    `<meta data-seo="property:og:locale" property="og:locale" content="en_US" />`,
    `<meta data-seo="property:og:title" property="og:title" content="${escapeHtml(meta.title)}" />`,
    `<meta data-seo="property:og:description" property="og:description" content="${escapeHtml(meta.description)}" />`,
    `<meta data-seo="property:og:url" property="og:url" content="${escapeHtml(meta.canonical)}" />`,
    `<meta data-seo="property:og:image" property="og:image" content="${escapeHtml(meta.image)}" />`,
    `<meta data-seo="property:og:image:alt" property="og:image:alt" content="${escapeHtml(meta.imageAlt)}" />`,
    `<meta data-seo="name:twitter:card" name="twitter:card" content="summary_large_image" />`,
    `<meta data-seo="name:twitter:title" name="twitter:title" content="${escapeHtml(meta.title)}" />`,
    `<meta data-seo="name:twitter:description" name="twitter:description" content="${escapeHtml(meta.description)}" />`,
    `<meta data-seo="name:twitter:image" name="twitter:image" content="${escapeHtml(meta.image)}" />`,
  ];
  return tags.join("\n    ");
}

function upsertMeta(kind: "name" | "property", key: string, content: string): void {
  const selector = `meta[data-seo="${kind}:${key}"]`;
  let element = document.head.querySelector(selector);
  if (!(element instanceof HTMLMetaElement)) {
    element = document.createElement("meta");
    element.setAttribute(kind, key);
    element.setAttribute("data-seo", `${kind}:${key}`);
    document.head.append(element);
  }
  element.setAttribute("content", content);
}

export function applyMeta(meta: PageMeta): void {
  document.title = meta.title;
  upsertMeta("name", "description", meta.description);
  upsertMeta("name", "robots", meta.noindex ? "noindex, follow" : "index, follow");
  upsertMeta("property", "og:type", meta.ogType);
  upsertMeta("property", "og:site_name", site.name);
  upsertMeta("property", "og:locale", "en_US");
  upsertMeta("property", "og:title", meta.title);
  upsertMeta("property", "og:description", meta.description);
  upsertMeta("property", "og:url", meta.canonical);
  upsertMeta("property", "og:image", meta.image);
  upsertMeta("property", "og:image:alt", meta.imageAlt);
  upsertMeta("name", "twitter:card", "summary_large_image");
  upsertMeta("name", "twitter:title", meta.title);
  upsertMeta("name", "twitter:description", meta.description);
  upsertMeta("name", "twitter:image", meta.image);

  const existingCanonical = document.head.querySelector('link[data-seo="canonical"]');
  let canonical: HTMLLinkElement;
  if (existingCanonical instanceof HTMLLinkElement) {
    canonical = existingCanonical;
  } else {
    canonical = document.createElement("link");
    canonical.rel = "canonical";
    canonical.setAttribute("data-seo", "canonical");
    document.head.append(canonical);
  }
  canonical.href = meta.canonical;
}
