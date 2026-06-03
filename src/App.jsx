import Layout from "@/Layouts/MainLayout";
import { Routes, Route } from "react-router-dom";
import LandingHome from "@/Pages/Landing";
import Home from "@/Pages/Site/Home";
import { SITE_ROUTES } from "@/utils/constants";
import Features from "@/Pages/Site/Features";
import Pricing from "@/Pages/Site/Pricing";
import PrivacyPolicy from "@/Pages/Site/PrivacyPolicy";
import SecurityPrivacy from "@/Pages/Site/SecurityPrivacy";
import TermsAndConditions from "@/Pages/Site/TermsAndConditions";
import SupportRedirect from "@/Pages/Site/SupportRedirect";
import HowToUse from "@/Pages/Site/HowToUse";
import ScrollToTop from "./Components/Feature/ScrollToTop";
import CookieConsent from "./Components/Feature/CookieConsent";

function App() {
  return (
    <Layout>
      <ScrollToTop />
      <CookieConsent />
      <Routes>
        <Route path={SITE_ROUTES.HOME} element={<Home />} />

        <Route path={SITE_ROUTES.LANDING} element={<LandingHome />} />

        <Route path={SITE_ROUTES.FEATURES} element={<Features />} />
        <Route path={SITE_ROUTES.PRICING} element={<Pricing />} />
        <Route path={SITE_ROUTES.SUPPORT} element={<SupportRedirect />} />
        <Route path={SITE_ROUTES.HOW_TO_USE} element={<HowToUse />} />

        <Route path={SITE_ROUTES.PRIVACY_POLICY} element={<PrivacyPolicy />} />
        <Route
          path={SITE_ROUTES.SECURITY_PRIVACY}
          element={<SecurityPrivacy />}
        />
        <Route
          path={SITE_ROUTES.TERMS_AND_CONDITIONS}
          element={<TermsAndConditions />}
        />
      </Routes>
    </Layout>
  );
}
export default App;
