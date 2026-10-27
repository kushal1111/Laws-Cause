import { publishedArticles } from "@/content/articles";
import { practiceAreas } from "@/content/practiceAreas";

export const staticPaths = [
  "/",
  "/about",
  "/practice-areas",
  "/our-team",
  "/insights",
  "/contact",
  "/privacy-policy",
  "/legal-disclaimer",
] as const;

export function getPrerenderPaths(): string[] {
  return [
    ...staticPaths,
    ...practiceAreas.map((area) => `/practice-areas/${area.slug}`),
    ...publishedArticles.map((article) => `/insights/${article.slug}`),
    "/404",
  ];
}

export function getSitemapPaths(): string[] {
  return getPrerenderPaths().filter((pathname) => pathname !== "/404");
}

export function normalizePath(pathname: string): string {
  const withLeading = pathname.startsWith("/") ? pathname : `/${pathname}`;
  const [pathOnly] = withLeading.split(/[?#]/);
  const path = pathOnly ?? "/";
  if (path.length > 1 && path.endsWith("/")) return path.replace(/\/+$/, "");
  return path || "/";
}
