import { Link } from "react-router";
import { getFeaturedPracticeAreas, practiceAreas } from "@/content/practiceAreas";
import { PracticeIcon } from "@/components/practice/PracticeIcon";
import { ArrowNudge } from "@/components/ui/ArrowNudge";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function PracticeAreasPreview() {
  const featured = getFeaturedPracticeAreas();
  return (
    <section aria-labelledby="practice-heading" className="bg-stone">
      <Container className="py-20 md:py-28">
        <SectionHeading
          id="practice-heading"
          eyebrow="Practice areas"
          title="Expertise That Makes a Difference."
          intro="Practical legal guidance across the matters that shape businesses, protect rights, and resolve disputes."
        />
        <ul className="mt-14 grid gap-x-16 lg:grid-cols-2">
          {featured.map((area, index) => (
            <li key={area.slug} className="border-t border-line">
              <Link
                to={`/practice-areas/${area.slug}`}
                className="group grid grid-cols-[auto_1fr_auto] items-start gap-5 py-7"
              >
                <span className="pt-1 font-serif text-2xl text-gold-deep">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>
                  <span className="flex items-center gap-3 font-serif text-3xl">
                    <PracticeIcon slug={area.slug} />
                    {area.title}
                  </span>
                  <span className="mt-2 block text-sm text-muted">{area.summary}</span>
                </span>
                <ArrowNudge />
              </Link>
            </li>
          ))}
        </ul>
        <Link
          to="/practice-areas"
          className="mt-10 inline-flex items-center gap-3 border-b border-ink pb-1 text-sm tracking-wide"
        >
          View All Practice Areas
          <span className="text-muted">({practiceAreas.length})</span>
          <ArrowNudge />
        </Link>
      </Container>
    </section>
  );
}
