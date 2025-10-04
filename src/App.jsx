import Layout from "@/Layouts/MainLayout";
import { Routes, Route } from "react-router-dom";
import Home from "@/Pages/Home";
import { ROUTES } from "@/utils/constants";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        {/* Add more routes as needed */}
        {/* <Route path={ROUTES.DASHBOARD} element={<Dashboard />} /> */}
      </Routes>
    </Layout>
  );
}

export default App;
