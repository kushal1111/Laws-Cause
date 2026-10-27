import { Link } from "react-router";
import { formatArticleDate, readingMinutes } from "@/content/articles";
import type { Article } from "@/types/content";
import { ArrowNudge } from "@/components/ui/ArrowNudge";

export function ArticleCard({
  article,
  featured = false,
}: {
  article: Article;
  featured?: boolean;
}) {
  return (
    <article className={featured ? "border-t border-ink pt-8" : "border-t border-line pt-6"}>
      <p className="text-xs tracking-[0.18em] text-gold-deep uppercase">{article.category}</p>
      <h2 className={`mt-4 font-serif ${featured ? "text-headline" : "text-3xl"}`}>
        <Link to={`/insights/${article.slug}`} className="hover:underline">
          {article.title}
        </Link>
      </h2>
      <p className="mt-4 max-w-2xl text-pretty text-muted">{article.excerpt}</p>
      <p className="mt-4 text-xs tracking-wide text-muted">
        {article.publishedAt ? <span>{formatArticleDate(article.publishedAt)}</span> : null}
        {article.publishedAt ? <span aria-hidden="true"> · </span> : null}
        <span>{readingMinutes(article)} min read</span>
        {article.author ? <span> · {article.author}</span> : null}
      </p>
      <Link
        to={`/insights/${article.slug}`}
        className="mt-5 inline-flex items-center gap-2 text-sm tracking-wide"
      >
        Read article
        <ArrowNudge />
      </Link>
    </article>
  );
}
