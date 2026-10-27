import { ArrowNudge } from "@/components/ui/ArrowNudge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function ContactCTA() {
  return (
    <section aria-labelledby="cta-heading" data-tone="dark" className="bg-forest text-ivory">
      <Container className="grid gap-10 py-20 md:py-28 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-8">
          <p className="text-xs tracking-[0.22em] text-mist uppercase">Consultation</p>
          <h2 id="cta-heading" className="mt-5 font-serif text-headline text-balance">
            Your Next Step Starts with a Conversation.
          </h2>
          <p className="mt-6 max-w-xl text-pretty text-mist">
            Share your legal concern with our team and take the first step toward informed legal
            guidance.
          </p>
        </div>
        <div className="lg:col-span-4 lg:justify-self-end">
          <Button href="/contact" variant="light">
            Get in Touch
            <ArrowNudge />
          </Button>
        </div>
      </Container>
    </section>
  );
}
