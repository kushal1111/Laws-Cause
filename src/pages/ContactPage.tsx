import { site } from "@/config/site";
import { ContactForm } from "@/components/forms/ContactForm";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/ui/JsonLd";
import { PageHero } from "@/components/ui/PageHero";
import { breadcrumbJsonLd } from "@/lib/jsonld";

const crumbs = [{ label: "Home", href: "/" }, { label: "Contact" }];

export function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <PageHero
        eyebrow="Consultation"
        title="Contact the firm"
        lede="Tell us, in outline, what the matter is. A lawyer will respond if the firm can assist. Sending this form does not make you a client."
      >
        <Breadcrumbs items={crumbs} />
        <div className="mb-8" />
      </PageHero>
      <Container className="grid gap-14 py-16 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-4">
          <h2 className="font-serif text-3xl">Kathmandu</h2>
          <p className="mt-4">
            {site.city}, {site.country}
          </p>
          <p className="mt-6 text-sm">
            <span className="text-muted">Phone: </span>
            {site.phone ?? "To be provided"}
          </p>
          <p className="mt-2 text-sm">
            <span className="text-muted">Email: </span>
            {site.email ?? "To be provided"}
          </p>
          {site.whatsapp ? (
            <p className="mt-2 text-sm">
              <span className="text-muted">WhatsApp: </span>
              {site.whatsapp}
            </p>
          ) : null}
          {site.hours ? <p className="mt-4 text-sm text-muted">{site.hours}</p> : null}
          <p className="mt-8 text-sm leading-6 text-muted">
            Do not include documents or facts you would share only after a lawyer has agreed to act.
            If a deadline is close, say so in the first sentence.
          </p>
        </div>
        <div className="lg:col-span-7 lg:col-start-6">
          <ContactForm />
        </div>
      </Container>
    </>
  );
}
