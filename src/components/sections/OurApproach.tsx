import { principles } from "@/content/approach";
import { Container } from "@/components/ui/Container";

export function OurApproach() {
  return (
    <section aria-labelledby="approach-heading" className="border-y border-line bg-ivory">
      <Container className="py-20 md:py-28">
        <p className="text-xs tracking-[0.22em] text-gold-deep uppercase">Our approach</p>
        <h2 id="approach-heading" className="mt-4 max-w-3xl font-serif text-headline text-balance">
          A Clearer Approach to Legal Counsel.
        </h2>
        <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((principle) => (
            <li key={principle.number} className="border-t border-ink pt-6">
              <p className="font-serif text-5xl text-gold-deep">{principle.number}</p>
              <h3 className="mt-6 font-serif text-3xl">{principle.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{principle.text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
