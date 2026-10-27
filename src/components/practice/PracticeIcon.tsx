import {
  Briefcase,
  Building2,
  Feather,
  GitMerge,
  Globe2,
  Landmark,
  LandPlot,
  Monitor,
  Scale,
  Shield,
  Users,
  Waypoints,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const icons: Record<string, LucideIcon> = {
  "corporate-commercial-law": Building2,
  "civil-litigation": Scale,
  "criminal-defense": Shield,
  "banking-finance": Landmark,
  "mergers-acquisitions": GitMerge,
  "property-real-estate-law": LandPlot,
  "family-law": Users,
  "intellectual-property-law": Feather,
  "cyber-technology-law": Monitor,
  "employment-labour-law": Briefcase,
  "foreign-investment-advisory": Globe2,
  "arbitration-dispute-resolution": Waypoints,
};

export function PracticeIcon({ slug }: { slug: string }) {
  const Icon = icons[slug] ?? Scale;
  return <Icon aria-hidden="true" className="h-5 w-5 shrink-0" strokeWidth={1.25} />;
}
