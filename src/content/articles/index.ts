import type { Article } from "@/types/content";

/**
 * Articles appear on the site only when they are imported here AND marked
 * published, with a real author and a publication date.
 * Draft files in `./drafts` are intentionally not imported.
 */
export const publishedArticles: Article[] = [];

export function getPublishedArticle(slug: string): Article | undefined {
  return publishedArticles.find(
    (article) =>
      article.slug === slug &&
      article.status === "published" &&
      article.author !== null &&
      article.publishedAt !== null,
  );
}

export function getCategories(articles: Article[]): string[] {
  return [...new Set(articles.map((article) => article.category))];
}

export function filterArticles(articles: Article[], category: string): Article[] {
  if (category === "all") return articles;
  return articles.filter((article) => article.category === category);
}

export function readingMinutes(article: Article): number {
  const text = article.blocks
    .map((block) => {
      if (block.type === "list") return block.items.join(" ");
      return block.text;
    })
    .join(" ");
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

export function relatedArticles(article: Article, articles: Article[]): Article[] {
  const sameCategory = articles.filter(
    (item) => item.slug !== article.slug && item.category === article.category,
  );
  if (sameCategory.length >= 2) return sameCategory.slice(0, 2);
  const others = articles.filter(
    (item) => item.slug !== article.slug && item.category !== article.category,
  );
  return [...sameCategory, ...others].slice(0, 2);
}

export function formatArticleDate(isoDate: string): string {
  const date = new Date(`${isoDate}T00:00:00Z`);
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}
