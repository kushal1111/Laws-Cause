import { lawyers } from "@/content/team";
import { LawyerProfile } from "@/components/team/LawyerProfile";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/ui/JsonLd";
import { PageHero } from "@/components/ui/PageHero";
import { breadcrumbJsonLd } from "@/lib/jsonld";

const crumbs = [{ label: "Home", href: "/" }, { label: "Our Team" }];

export function TeamPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <PageHero
        eyebrow="People"
        title="Our Team"
        lede="Laws & Cause is instructed through named lawyers. Profiles are published only when the biography, education, and qualifications have been confirmed."
      >
        <Breadcrumbs items={crumbs} />
        <div className="mb-8" />
      </PageHero>
      <Container className="py-16 lg:py-24">
        <div className="max-w-3xl space-y-5">
          <p>
            A client should know who is responsible for the matter. Until those details are ready
            for publication, this page describes the standard we will hold the profiles to, rather
            than inventing people to fill a grid.
          </p>
          <p className="text-muted">
            When a profile appears, it will show the lawyer’s role, a short biography, education,
            practice focus, professional qualifications, and a LinkedIn link only where that link
            has been verified.
          </p>
        </div>
        {lawyers.length === 0 ? (
          <div className="mt-14 border border-line bg-stone px-6 py-10 md:px-10">
            <p className="text-xs tracking-[0.18em] text-gold-deep uppercase">
              Profiles coming soon
            </p>
            <h2 className="mt-4 font-serif text-title">The roster is being confirmed.</h2>
            <p className="mt-4 max-w-2xl text-muted">
              Individual lawyer profiles will be added here after the firm has approved them. In the
              meantime, enquiries are welcome and will be directed to the appropriate lawyer once
              the firm can respond.
            </p>
            <Button href="/contact" className="mt-8">
              Request a Consultation
            </Button>
          </div>
        ) : (
          <div className="mt-14 space-y-12">
            {lawyers.map((lawyer) => (
              <LawyerProfile key={lawyer.slug} lawyer={lawyer} />
            ))}
          </div>
        )}
      </Container>
    </>
  );
}
