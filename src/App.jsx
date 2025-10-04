import Layout from "@/Layouts/MainLayout";
import { Routes, Route, Navigate } from "react-router-dom";
import LandingHome from "@/Pages/Landing";
import Home from "@/Pages/Site/Home";
import { LANDING_ROUTES, SITE_ROUTES, isLandingMode } from "@/utils/constants";
import Features from "@/Pages/Site/Features";
import Pricing from "@/Pages/Site/Pricing";
import UseCases from "@/Pages/Site/UseCases";
import PrivacyPolicy from "@/Pages/Site/PrivacyPolicy";
import TermsAndConditions from "@/Pages/Site/TermsAndConditions";

function App() {
  return (
    <Layout>
      <Routes>
        {/* Landing Mode Routes */}
        {isLandingMode() ? (
          <>
            <Route path={LANDING_ROUTES.HOME} element={<LandingHome />} />
            {/* Redirect all other routes to home in landing mode */}
            <Route
              path="*"
              element={<Navigate to={LANDING_ROUTES.HOME} replace />}
            />
          </>
        ) : (
          /* Site Mode Routes */
          <>
            <Route path={SITE_ROUTES.HOME} element={<Home />} />
            <Route path={SITE_ROUTES.FEATURES} element={<Features />} />
            <Route path={SITE_ROUTES.PRICING} element={<Pricing />} />
            <Route path={SITE_ROUTES.USE_CASES} element={<UseCases />} />

            <Route
              path={SITE_ROUTES.PRIVACY_POLICY}
              element={<PrivacyPolicy />}
            />
            <Route
              path={SITE_ROUTES.TERMS_AND_CONDITIONS}
              element={<TermsAndConditions />}
            />
          </>
        )}
      </Routes>
    </Layout>
  );
}
export default App;
