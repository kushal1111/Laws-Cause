import { aboutContent } from "@/content/about";
import { ArrowNudge } from "@/components/ui/ArrowNudge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CourtyardPanel } from "@/components/visuals/CourtyardPanel";

export function AboutPreview() {
  return (
    <section aria-labelledby="about-heading">
      <Container className="grid items-stretch gap-12 py-20 md:py-28 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <CourtyardPanel />
        </div>
        <div className="lg:col-span-6 lg:col-start-7 lg:py-8">
          <p className="text-xs tracking-[0.22em] text-gold-deep uppercase">The firm</p>
          <h2 id="about-heading" className="mt-5 font-serif text-headline text-balance">
            Rooted in Principle.
            <span className="block">Focused on People.</span>
          </h2>
          <div className="mt-6 space-y-4 text-pretty">
            <p>
              Clients come to Laws & Cause for professional legal guidance that stays close to the
              facts. We take instructions seriously, and we treat confidentiality as a condition of
              the work rather than a slogan.
            </p>
            <p>
              Clear communication is part of the service. We explain Nepalese procedure in language
              a client can use, including when the next step belongs with a court, a registry, or
              the client themselves.
            </p>
          </div>
          <p className="mt-6 text-sm text-muted">{aboutContent.mission}</p>
          <Button href="/about" variant="secondary" className="mt-8">
            Discover Our Approach
            <ArrowNudge />
          </Button>
        </div>
      </Container>
    </section>
  );
}
