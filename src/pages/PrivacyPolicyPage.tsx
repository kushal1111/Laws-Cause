import { Link } from "react-router";
import { formatArticleDate } from "@/content/articles";
import { legalUpdated, privacySections } from "@/content/legal";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/ui/JsonLd";
import { PageHero } from "@/components/ui/PageHero";
import { breadcrumbJsonLd } from "@/lib/jsonld";

const crumbs = [{ label: "Home", href: "/" }, { label: "Privacy Policy" }];

export function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <PageHero
        eyebrow="Privacy"
        title="Privacy policy"
        lede={`This version was published on ${formatArticleDate(legalUpdated)}. It describes the website as it is built, not services that have not been switched on.`}
      >
        <Breadcrumbs items={crumbs} />
        <div className="mb-8" />
      </PageHero>
      <Container className="max-w-3xl space-y-10 py-16">
        {privacySections.map((section) => (
          <section key={section.heading}>
            <h2 className="font-serif text-3xl">{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-4 text-pretty">
                {paragraph}
              </p>
            ))}
          </section>
        ))}
        <p>
          Questions about this policy can be sent through the{" "}
          <Link className="underline" to="/contact">
            contact form
          </Link>
          .
        </p>
      </Container>
    </>
  );
}
