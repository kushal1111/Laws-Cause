import { Link } from "react-router";
import { practiceAreas } from "@/content/practiceAreas";
import { PracticeIcon } from "@/components/practice/PracticeIcon";
import { ArrowNudge } from "@/components/ui/ArrowNudge";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/ui/JsonLd";
import { PageHero } from "@/components/ui/PageHero";
import { breadcrumbJsonLd } from "@/lib/jsonld";

const crumbs = [{ label: "Home", href: "/" }, { label: "Practice Areas" }];

export function PracticeAreasPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <PageHero
        eyebrow="Expertise"
        title="Practice Areas"
        lede="Twelve areas of work the firm is prepared to discuss. Confirm the scope of any instruction before it begins. These categories describe the practice, not a promise that every matter is taken."
      >
        <Breadcrumbs items={crumbs} />
        <div className="mb-8" />
      </PageHero>
      <Container className="py-8 pb-20">
        <ul>
          {practiceAreas.map((area, index) => (
            <li key={area.slug} className="border-b border-line">
              <Link
                to={`/practice-areas/${area.slug}`}
                className="grid items-start gap-4 py-8 sm:grid-cols-[4rem_1fr_auto]"
              >
                <span className="font-serif text-2xl text-gold-deep">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>
                  <span className="flex items-center gap-3 font-serif text-3xl md:text-4xl">
                    <PracticeIcon slug={area.slug} />
                    {area.title}
                  </span>
                  <span className="mt-2 block max-w-2xl text-sm text-muted">{area.summary}</span>
                </span>
                <ArrowNudge />
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
}
