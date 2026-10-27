import { Container } from "@/components/ui/Container";

export function IntroStatement() {
  return (
    <section aria-labelledby="intro-heading" className="border-b border-line">
      <Container className="grid gap-10 py-20 md:py-28 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="text-xs tracking-[0.22em] text-gold-deep uppercase">01 — Introduction</p>
          <h2 id="intro-heading" className="mt-6 font-serif text-headline text-balance">
            Legal matters demand more than answers. They demand perspective, precision, and a clear
            path forward.
          </h2>
        </div>
        <div className="lg:col-span-4 lg:col-start-9 lg:pt-16">
          <p className="text-pretty">
            Laws & Cause is an independent law firm in Kathmandu. We advise people and organisations
            who need Nepalese law explained carefully, and representation carried out with
            discretion.
          </p>
          <p className="mt-5 text-pretty text-muted">
            We would rather narrow a question than enlarge it. The work is to identify what the law
            requires, what remains a choice, and what a sensible next step looks like.
          </p>
        </div>
      </Container>
    </section>
  );
}
