import { Route, Routes } from "react-router";
import { RootLayout } from "@/components/layout/RootLayout";
import { AboutPage } from "@/pages/AboutPage";
import { ContactPage } from "@/pages/ContactPage";
import { HomePage } from "@/pages/HomePage";
import { InsightDetailPage } from "@/pages/InsightDetailPage";
import { InsightsPage } from "@/pages/InsightsPage";
import { LegalDisclaimerPage } from "@/pages/LegalDisclaimerPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { PracticeAreaDetailPage } from "@/pages/PracticeAreaDetailPage";
import { PracticeAreasPage } from "@/pages/PracticeAreasPage";
import { PrivacyPolicyPage } from "@/pages/PrivacyPolicyPage";
import { TeamPage } from "@/pages/TeamPage";

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="practice-areas" element={<PracticeAreasPage />} />
        <Route path="practice-areas/:slug" element={<PracticeAreaDetailPage />} />
        <Route path="our-team" element={<TeamPage />} />
        <Route path="insights" element={<InsightsPage />} />
        <Route path="insights/:slug" element={<InsightDetailPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="legal-disclaimer" element={<LegalDisclaimerPage />} />
        <Route path="404" element={<NotFoundPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
