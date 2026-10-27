import { qualities } from "@/content/approach";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhyFirm() {
  return (
    <section aria-labelledby="why-heading" data-tone="dark" className="bg-forest text-ivory">
      <Container className="py-20 md:py-28">
        <SectionHeading
          id="why-heading"
          tone="dark"
          eyebrow="Why Laws & Cause"
          title="Built Around What Matters."
          intro="The qualities we hold the work to. Not rankings, not counts, and not promises about how a case will end."
        />
        <ul className="mt-14 grid gap-px bg-white/15 sm:grid-cols-2">
          {qualities.map((quality) => (
            <li key={quality.title} className="bg-forest p-8 md:p-10">
              <h3 className="font-serif text-3xl">{quality.title}</h3>
              <p className="mt-4 max-w-md text-sm leading-6 text-mist">{quality.text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
