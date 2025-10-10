export const SITE_ROUTES = {
  HOME: "/",
  FEATURES: "/features",
  PRICING: "/pricing",

  PRIVACY_POLICY: "/privacy-policy",
  TERMS_AND_CONDITIONS: "/terms-and-conditions",

  LANDING: "/online-calls-timer-and-AI-reminders",
};

export const CHROME_REDIRECT_URL =
  "https://chromewebstore.google.com/detail/minute-minder-meeting-tim/lkabejfjiohmfkpjngnomccnfapdcoic";

export const isLandingMode = window.location.pathname === SITE_ROUTES.LANDING;
