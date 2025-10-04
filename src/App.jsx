import Layout from "@/Layouts/MainLayout";
import { Routes, Route, Navigate } from "react-router-dom";
import LandingHome from "@/Pages/Landing";
import SiteHome from "@/Pages/Site/Home";
import {
  LANDING_ROUTES,
  SITE_ROUTES,
  isLandingMode,
  APP_MODE,
} from "@/utils/constants";
import Features from "@/Pages/Site/Features";

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
            <Route path={SITE_ROUTES.HOME} element={<SiteHome />} />
            <Route path={SITE_ROUTES.FEATURES} element={<Features />} />
            {/* Add more site routes here */}
            {/* <Route path={SITE_ROUTES.DASHBOARD} element={<Dashboard />} /> */}
            {/* <Route path={SITE_ROUTES.ABOUT} element={<About />} /> */}
          </>
        )}
      </Routes>
    </Layout>
  );
}
export default App;
