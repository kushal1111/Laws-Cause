import { aboutContent, firmFacts } from "@/content/about";
import { principles, qualities } from "@/content/approach";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/ui/JsonLd";
import { PageHero } from "@/components/ui/PageHero";
import { CourtyardPanel } from "@/components/visuals/CourtyardPanel";
import { breadcrumbJsonLd } from "@/lib/jsonld";

const crumbs = [{ label: "Home", href: "/" }, { label: "About" }];

export function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <PageHero eyebrow={aboutContent.eyebrow} title={aboutContent.title} lede={aboutContent.lede}>
        <Breadcrumbs items={crumbs} />
        <div className="mb-8" />
      </PageHero>
      <Container className="grid gap-12 py-16 lg:grid-cols-12 lg:py-24">
        <div className="space-y-5 lg:col-span-7">
          {aboutContent.introduction.map((paragraph) => (
            <p key={paragraph} className="text-pretty">
              {paragraph}
            </p>
          ))}
        </div>
        <dl className="h-fit border-t border-line lg:col-span-4 lg:col-start-9">
          {firmFacts.map((fact) => (
            <div key={fact.label} className="border-b border-line py-4">
              <dt className="text-xs tracking-[0.16em] text-muted uppercase">{fact.label}</dt>
              <dd className="mt-1">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
      <section className="bg-stone" aria-labelledby="philosophy-heading">
        <Container className="grid items-center gap-10 py-16 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-5">
            <CourtyardPanel />
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="text-xs tracking-[0.22em] text-gold-deep uppercase">
              {aboutContent.philosophy.eyebrow}
            </p>
            <h2 id="philosophy-heading" className="mt-4 font-serif text-title text-balance">
              {aboutContent.philosophy.title}
            </h2>
            <p className="mt-5 text-pretty">{aboutContent.philosophy.body}</p>
          </div>
        </Container>
      </section>
      <section aria-labelledby="mission-heading">
        <Container className="py-16 lg:py-24">
          <h2 id="mission-heading" className="font-serif text-title">
            Mission and values
          </h2>
          <p className="mt-5 max-w-3xl text-pretty">{aboutContent.mission}</p>
          <ul className="mt-12 grid gap-8 sm:grid-cols-2">
            {aboutContent.values.map((value) => (
              <li key={value.title} className="border-t border-line pt-5">
                <h3 className="font-serif text-3xl">{value.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{value.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <section aria-labelledby="client-approach" className="border-t border-line">
        <Container className="py-16 lg:py-24">
          <h2 id="client-approach" className="font-serif text-title">
            How a matter proceeds
          </h2>
          <ol className="mt-10 grid gap-8 lg:grid-cols-4">
            {principles.map((principle) => (
              <li key={principle.number}>
                <p className="font-serif text-4xl text-gold-deep">{principle.number}</p>
                <h3 className="mt-3 font-serif text-2xl">{principle.title}</h3>
                <p className="mt-2 text-sm text-muted">{principle.text}</p>
              </li>
            ))}
          </ol>
          <h2 className="mt-16 font-serif text-title">Why clients instruct the firm</h2>
          <p className="mt-5 max-w-3xl">{aboutContent.why}</p>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2">
            {qualities.map((quality) => (
              <li key={quality.title}>
                <h3 className="font-serif text-2xl">{quality.title}</h3>
                <p className="mt-2 text-sm text-muted">{quality.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <ContactCTA />
    </>
  );
}
