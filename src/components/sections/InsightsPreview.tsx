import { Link } from "react-router";
import { publishedArticles, readingMinutes } from "@/content/articles";
import { ArrowNudge } from "@/components/ui/ArrowNudge";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function InsightsPreview() {
  const articles = publishedArticles.slice(0, 3);
  return (
    <section aria-labelledby="insights-heading" className="border-b border-line">
      <Container className="py-20 md:py-28">
        <SectionHeading
          id="insights-heading"
          eyebrow="Insights"
          title="Notes on the law, written to be read."
          intro="Essays are published only after they have been reviewed and given a real author and date."
        />
        {articles.length === 0 ? (
          <div className="mt-14 grid gap-8 border-t border-line pt-10 lg:grid-cols-12">
            <p className="font-serif text-title text-balance lg:col-span-7">
              Articles on company registration, foreign investment, and property disputes are in
              preparation.
            </p>
            <div className="lg:col-span-4 lg:col-start-9">
              <p className="text-muted">
                They are held as drafts until attribution is confirmed. Nothing unpublished is
                presented here as a finished note.
              </p>
              <Link
                to="/insights"
                className="mt-6 inline-flex items-center gap-2 text-sm tracking-wide"
              >
                Visit Legal Insights
                <ArrowNudge />
              </Link>
            </div>
          </div>
        ) : (
          <ul className="mt-14 grid gap-10 md:grid-cols-3">
            {articles.map((article) => (
              <li key={article.slug} className="border-t border-line pt-6">
                <p className="text-xs tracking-[0.18em] text-gold-deep uppercase">
                  {article.category}
                </p>
                <h3 className="mt-4 font-serif text-3xl">
                  <Link to={`/insights/${article.slug}`} className="hover:underline">
                    {article.title}
                  </Link>
                </h3>
                <p className="mt-3 text-sm text-muted">{article.excerpt}</p>
                <p className="mt-4 text-xs tracking-wide text-muted">
                  {readingMinutes(article)} min read
                </p>
              </li>
            ))}
          </ul>
        )}
      </Container>
    </section>
  );
}
