import { Link, useParams } from "react-router";
import { getPracticeBySlug, getRelatedPracticeAreas } from "@/content/practiceAreas";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/ui/JsonLd";
import { PageHero } from "@/components/ui/PageHero";
import { breadcrumbJsonLd, faqJsonLd, practiceServiceJsonLd } from "@/lib/jsonld";
import { NotFoundPage } from "@/pages/NotFoundPage";

export function PracticeAreaDetailPage() {
  const { slug } = useParams();
  const area = slug ? getPracticeBySlug(slug) : undefined;
  if (!area) return <NotFoundPage />;

  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Practice Areas", href: "/practice-areas" },
    { label: area.title },
  ];
  const related = getRelatedPracticeAreas(area);

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <JsonLd data={practiceServiceJsonLd(area)} />
      {area.faqs.length > 0 ? <JsonLd data={faqJsonLd(area.faqs)} /> : null}
      <PageHero eyebrow="Practice area" title={area.title} lede={area.summary}>
        <Breadcrumbs items={crumbs} />
        <div className="mb-8" />
      </PageHero>
      <Container className="grid gap-14 py-16 lg:grid-cols-12 lg:py-24">
        <div className="space-y-5 lg:col-span-7">
          {area.introduction.map((paragraph) => (
            <p key={paragraph} className="text-pretty">
              {paragraph}
            </p>
          ))}
          <h2 className="pt-6 font-serif text-title">How we approach it</h2>
          <p className="text-pretty">{area.approach}</p>
        </div>
        <div className="lg:col-span-4 lg:col-start-9">
          <h2 className="font-serif text-3xl">Scope of the work</h2>
          <ul className="mt-4 space-y-3 text-sm leading-6">
            {area.scope.map((item) => (
              <li key={item} className="border-t border-line pt-3">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Container>
      <section className="bg-stone" aria-labelledby="matters-heading">
        <Container className="py-16">
          <h2 id="matters-heading" className="font-serif text-title">
            Matters clients bring
          </h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {area.matters.map((matter) => (
              <li key={matter} className="border-t border-line pt-4">
                {matter}
              </li>
            ))}
          </ul>
        </Container>
      </section>
      {area.faqs.length > 0 ? (
        <section aria-labelledby="faq-heading">
          <Container className="py-16 lg:py-20">
            <h2 id="faq-heading" className="font-serif text-title">
              Questions we are often asked
            </h2>
            <div className="mt-8 max-w-3xl divide-y divide-line border-y border-line">
              {area.faqs.map((faq) => (
                <details key={faq.question} className="group py-4">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-serif text-2xl [&::-webkit-details-marker]:hidden">
                    <span>{faq.question}</span>
                    <span aria-hidden="true" className="text-gold-deep group-open:hidden">
                      +
                    </span>
                    <span aria-hidden="true" className="hidden text-gold-deep group-open:inline">
                      –
                    </span>
                  </summary>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">{faq.answer}</p>
                </details>
              ))}
            </div>
          </Container>
        </section>
      ) : null}
      {related.length > 0 ? (
        <Container className="pb-16">
          <h2 className="font-serif text-3xl">Related areas</h2>
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {related.map((item) => (
              <li key={item.slug}>
                <Link
                  className="underline-offset-4 hover:underline"
                  to={`/practice-areas/${item.slug}`}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-2xl text-sm text-muted">
            This page is general information about how the firm can help. It is not legal advice.
            Read the{" "}
            <Link className="underline" to="/legal-disclaimer">
              legal disclaimer
            </Link>
            .
          </p>
        </Container>
      ) : null}
      <ContactCTA />
    </>
  );
}
