import { useLocation } from "react-router-dom";
import { SITE_ROUTES } from "@/utils/constants";

const CTATitles = {
  homeCTA: (
    <>
      <span className="text-[var(--color-primary)]">Cut</span> your meetings{" "}
      <br className="lg:block hidden" />
      <span className="text-[var(--color-primary)]">costs</span> today
    </>
  ),

  savingCTA: (
    <>
      Start
      <span className="text-[var(--color-primary)]">
        {" "}
        saving <br className="lg:block hidden" /> meeting costs{" "}
      </span>
      today
    </>
  ),
};

const CTA_CONFIG = {
  // Landing Mode
  [SITE_ROUTES.LANDING]: {
    showCTA: true,
    title: CTATitles.homeCTA,
  },

  // Site Mode - Main Pages
  [SITE_ROUTES.HOME]: {
    showCTA: true,
    title: CTATitles.homeCTA,
  },
  [SITE_ROUTES.FEATURES]: {
    showCTA: true,
    title: CTATitles.savingCTA,
  },
  [SITE_ROUTES.PRICING]: {
    showCTA: true,
    title: CTATitles.savingCTA,
  },

  // Legal Pages - No CTA
  [SITE_ROUTES.PRIVACY_POLICY]: {
    showCTA: false,
  },
  [SITE_ROUTES.TERMS_AND_CONDITIONS]: {
    showCTA: false,
  },
};

export const useCTAConfig = () => {
  const location = useLocation();
  return CTA_CONFIG[location.pathname] || { showCTA: false };
};
