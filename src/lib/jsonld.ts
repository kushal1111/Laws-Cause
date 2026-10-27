import { site } from "@/config/site";
import type { Article, BreadcrumbItem, PracticeArea } from "@/types/content";

export function legalServiceJsonLd(): Record<string, unknown> {
  const address: Record<string, unknown> = {
    "@type": "PostalAddress",
    addressLocality: site.city,
    addressCountry: site.countryCode,
  };
  if (site.streetAddress) address.streetAddress = site.streetAddress;

  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: site.name,
    description: site.description,
    url: site.url,
    image: `${site.url}${site.ogImagePath}`,
    areaServed: { "@type": "Country", name: site.country },
    address,
  };

  if (site.email) data.email = site.email;
  if (site.phone) data.telephone = site.phone;
  if (site.social.length > 0) data.sameAs = site.social.map((item) => item.href);
  return data;
}

export function breadcrumbJsonLd(items: BreadcrumbItem[]): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: `${site.url}${item.href}` } : {}),
    })),
  };
}

export function practiceServiceJsonLd(area: PracticeArea): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: area.title,
    description: area.summary,
    url: `${site.url}/practice-areas/${area.slug}`,
    areaServed: site.country,
    provider: {
      "@type": "LegalService",
      name: site.name,
      url: site.url,
    },
  };
}

export function faqJsonLd(faqs: { question: string; answer: string }[]): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function articleJsonLd(article: Article): Record<string, unknown> | null {
  if (!article.author || !article.publishedAt) return null;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.publishedAt,
    author:
      article.author === site.name
        ? { "@type": "Organization", name: site.name, url: site.url }
        : { "@type": "Person", name: article.author },
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
    mainEntityOfPage: `${site.url}/insights/${article.slug}`,
  };
}
