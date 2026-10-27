import { ContactCTA } from "@/components/sections/ContactCTA";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { Hero } from "@/components/sections/Hero";
import { InsightsPreview } from "@/components/sections/InsightsPreview";
import { IntroStatement } from "@/components/sections/IntroStatement";
import { OurApproach } from "@/components/sections/OurApproach";
import { PracticeAreasPreview } from "@/components/sections/PracticeAreasPreview";
import { WhyFirm } from "@/components/sections/WhyFirm";
import { JsonLd } from "@/components/ui/JsonLd";
import { legalServiceJsonLd } from "@/lib/jsonld";

export function HomePage() {
  return (
    <>
      <JsonLd data={legalServiceJsonLd()} />
      <Hero />
      <IntroStatement />
      <PracticeAreasPreview />
      <AboutPreview />
      <OurApproach />
      <WhyFirm />
      <InsightsPreview />
      <ContactCTA />
    </>
  );
}
