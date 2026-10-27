import { Link, useParams } from "react-router";
import {
  formatArticleDate,
  getPublishedArticle,
  publishedArticles,
  readingMinutes,
  relatedArticles,
} from "@/content/articles";
import { getPracticeBySlug } from "@/content/practiceAreas";
import { ArticleCard } from "@/components/insights/ArticleCard";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/ui/JsonLd";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";
import type { ArticleBlock } from "@/types/content";
import { NotFoundPage } from "@/pages/NotFoundPage";

function Block({ block }: { block: ArticleBlock }) {
  if (block.type === "heading") {
    return <h2 className="pt-4 font-serif text-title">{block.text}</h2>;
  }
  if (block.type === "list") {
    return (
      <ul className="list-disc space-y-2 pl-5">
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }
  if (block.type === "note") {
    return (
      <aside className="border-l border-gold-deep pl-5 text-sm leading-6 text-muted">
        {block.text}
      </aside>
    );
  }
  return <p className="text-pretty">{block.text}</p>;
}

export function InsightDetailPage() {
  const { slug } = useParams();
  const article = slug ? getPublishedArticle(slug) : undefined;
  if (!article || !article.author || !article.publishedAt) return <NotFoundPage />;

  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Insights", href: "/insights" },
    { label: article.title },
  ];
  const related = relatedArticles(article, publishedArticles);
  const practices = article.relatedPracticeSlugs
    .map((item) => getPracticeBySlug(item))
    .filter((item) => item !== undefined);

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <JsonLd data={articleJsonLd(article)} />
      <article>
        <header className="border-b border-line">
          <Container className="py-14 md:py-20">
            <Breadcrumbs items={crumbs} />
            <p className="mt-8 text-xs tracking-[0.22em] text-gold-deep uppercase">
              {article.category}
            </p>
            <h1 className="mt-4 max-w-4xl font-serif text-headline text-balance">
              {article.title}
            </h1>
            <p className="mt-6 text-sm text-muted">
              {formatArticleDate(article.publishedAt)} · {readingMinutes(article)} min read ·{" "}
              {article.author}
            </p>
          </Container>
        </header>
        <Container className="grid gap-12 py-14 lg:grid-cols-12">
          <div className="max-w-2xl space-y-6 lg:col-span-8">
            {article.blocks.map((block, index) => (
              <Block key={`${block.type}-${index}`} block={block} />
            ))}
          </div>
          {practices.length > 0 ? (
            <aside className="lg:col-span-3 lg:col-start-10">
              <h2 className="text-xs tracking-[0.18em] text-muted uppercase">Related practice</h2>
              <ul className="mt-4 space-y-3">
                {practices.map((area) => (
                  <li key={area.slug}>
                    <Link
                      className="underline-offset-4 hover:underline"
                      to={`/practice-areas/${area.slug}`}
                    >
                      {area.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
          ) : null}
        </Container>
      </article>
      {related.length > 0 ? (
        <Container className="pb-20">
          <h2 className="font-serif text-3xl">Further reading</h2>
          <div className="mt-8 grid gap-10 md:grid-cols-2">
            {related.map((item) => (
              <ArticleCard key={item.slug} article={item} />
            ))}
          </div>
        </Container>
      ) : null}
    </>
  );
}
