import { ArrowNudge } from "@/components/ui/ArrowNudge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ArchitecturalPanel } from "@/components/visuals/ArchitecturalPanel";

export function Hero() {
  return (
    <section className="border-b border-line">
      <Container className="py-14 lg:py-20">
        <div className="hero-rise">
          <p className="text-xs tracking-[0.22em] text-gold-deep uppercase">
            Independent legal counsel · Kathmandu, Nepal
          </p>
          <h1 className="mt-6 max-w-[11em] font-serif text-display sm:max-w-none">
            <span className="block">Law with Purpose.</span>
            <span className="block">Advocacy with Integrity.</span>
          </h1>
        </div>
        <div className="mt-12 grid items-stretch gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5 lg:py-4">
            <p className="max-w-xl text-lg text-pretty text-muted">
              Laws & Cause provides thoughtful legal guidance, strategic representation, and
              practical solutions for individuals and businesses in Nepal.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/practice-areas">
                Explore Our Expertise
                <ArrowNudge />
              </Button>
              <Button href="/contact" variant="secondary">
                Contact Our Firm
              </Button>
            </div>
          </div>
          <div className="lg:col-span-7">
            <ArchitecturalPanel />
          </div>
        </div>
      </Container>
    </section>
  );
}
