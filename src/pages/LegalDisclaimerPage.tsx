import { formatArticleDate } from "@/content/articles";
import { disclaimerSections, legalUpdated } from "@/content/legal";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/ui/JsonLd";
import { PageHero } from "@/components/ui/PageHero";
import { breadcrumbJsonLd } from "@/lib/jsonld";

const crumbs = [{ label: "Home", href: "/" }, { label: "Legal Disclaimer" }];

export function LegalDisclaimerPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <PageHero
        eyebrow="Notice"
        title="Legal disclaimer"
        lede={`This version was published on ${formatArticleDate(legalUpdated)}.`}
      >
        <Breadcrumbs items={crumbs} />
        <div className="mb-8" />
      </PageHero>
      <Container className="max-w-3xl space-y-10 py-16">
        {disclaimerSections.map((section) => (
          <section key={section.heading}>
            <h2 className="font-serif text-3xl">{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-4 text-pretty">
                {paragraph}
              </p>
            ))}
          </section>
        ))}
      </Container>
    </>
  );
}
