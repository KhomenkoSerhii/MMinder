// Environment-based configuration
export const APP_MODE = import.meta.env.VITE_APP_MODE || "site";

export const LANDING_ROUTES = {
  HOME: "/",
};

export const SITE_ROUTES = {
  HOME: "/",
  FEATURES: "/features",
  PRICING: "/pricing",
  USE_CASES: "/use-cases",

  PRIVACY_POLICY: "/privacy-policy",
  TERMS_AND_CONDITIONS: "/terms-and-conditions",
};

// Define which routes are available for each deployment
export const DEPLOYMENT_ROUTES = {
  landing: [LANDING_ROUTES.HOME], // Only landing page
  site: Object.values(SITE_ROUTES), // All routes
};

// Get available routes based on current environment
export const getAvailableRoutes = () => {
  return DEPLOYMENT_ROUTES[APP_MODE] || DEPLOYMENT_ROUTES.site;
};

// Check if current mode is landing only
export const isLandingMode = () => APP_MODE === "landing";
