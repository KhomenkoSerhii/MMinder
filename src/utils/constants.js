export const SITE_ROUTES = {
  HOME: "/",
  FEATURES: "/features",
  PRICING: "/pricing",
  SUPPORT: "/support",

  PRIVACY_POLICY: "/privacy",
  SECURITY_PRIVACY: "/security",
  TERMS_AND_CONDITIONS: "/terms",

  LANDING: "/online-calls-timer-and-AI-reminders",
};

export const CHROME_REDIRECT_URL =
  "https://chromewebstore.google.com/detail/minute-minder-meeting-tim/lkabejfjiohmfkpjngnomccnfapdcoic";

export const LOGIN_REDIRECT_URL = CHROME_REDIRECT_URL;

export const SUPPORT_FORM_URL =
  "https://forms.gle/mBeGEeSFeNDJVSAs5";

export const isLandingMode = window.location.pathname === SITE_ROUTES.LANDING;
