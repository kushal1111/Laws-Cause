import { useState } from "react";
import { filterArticles, getCategories, publishedArticles } from "@/content/articles";
import { ArticleCard } from "@/components/insights/ArticleCard";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/ui/JsonLd";
import { PageHero } from "@/components/ui/PageHero";
import { breadcrumbJsonLd } from "@/lib/jsonld";

const crumbs = [{ label: "Home", href: "/" }, { label: "Insights" }];

export function InsightsPage() {
  const [category, setCategory] = useState("all");
  const categories = getCategories(publishedArticles);
  const visible = filterArticles(publishedArticles, category);
  const [featured, ...rest] = visible;

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <PageHero
        eyebrow="Journal"
        title="Legal Insights"
        lede="A small editorial series on Nepalese law. Articles are added when they are ready to stand under a real name and a real date."
      >
        <Breadcrumbs items={crumbs} />
        <div className="mb-8" />
      </PageHero>
      <Container className="py-16 lg:py-20">
        {publishedArticles.length === 0 || !featured ? (
          <div className="max-w-3xl border-t border-ink pt-8">
            <h2 className="font-serif text-title text-balance">Essays are being prepared.</h2>
            <p className="mt-5 text-pretty text-muted">
              Draft notes exist in the project for review. They are not listed here, and they are
              not given publication dates, until the firm assigns an author and approves the text.
            </p>
          </div>
        ) : (
          <>
            {categories.length > 1 ? (
              <div
                className="mb-10 flex flex-wrap gap-2"
                role="group"
                aria-label="Filter by category"
              >
                {["all", ...categories].map((item) => (
                  <button
                    key={item}
                    type="button"
                    aria-pressed={category === item}
                    className={`min-h-11 cursor-pointer border px-4 text-sm ${
                      category === item ? "border-ink bg-ink text-ivory" : "border-line"
                    }`}
                    onClick={() => setCategory(item)}
                  >
                    {item === "all" ? "All" : item}
                  </button>
                ))}
              </div>
            ) : null}
            <ArticleCard article={featured} featured />
            {rest.length > 0 ? (
              <div className="mt-12 grid gap-10 md:grid-cols-2">
                {rest.map((article) => (
                  <ArticleCard key={article.slug} article={article} />
                ))}
              </div>
            ) : null}
          </>
        )}
      </Container>
    </>
  );
}
