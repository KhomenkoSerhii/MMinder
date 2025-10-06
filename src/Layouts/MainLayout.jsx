import Navigation from "@/Components/Layout/Navigation";
import SiteNavigation from "@/Components/Layout/SiteNavigation";
import SiteFooter from "@/Components/Layout/SiteFooter";
import Footer from "@/Components/Layout/Footer";
import CTACard from "@/Components/Feature/CTACard";
import { isLandingMode } from "@/utils/constants";
import { useCTAConfig } from "./PageLayout";

export default function Layout({ children }) {
  const { showCTA, title: ctaTitle } = useCTAConfig();

  return (
    <div className="min-h-screen flex flex-col">
      {isLandingMode() ? <Navigation /> : <SiteNavigation />}

      <main className="flex-1 max-w-8xl mx-auto px-5 l pt-16 pb-8 w-full">
        {children}
      </main>

      {/* CTA Section */}
      {showCTA && ctaTitle && (
        <div className="max-w-8xl mx-auto px-5 pb-8 w-full">
          <CTACard title={ctaTitle} />
        </div>
      )}

      {isLandingMode() ? <Footer /> : <SiteFooter />}
    </div>
  );
}
