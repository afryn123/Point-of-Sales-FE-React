import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import DashboardAdmin from "../pages/admin/dashboard";
import {
  ADMIN_DASHBOARD_ROUTE_NAME,
  ADMIN_MENU_ROUTE_NAME,
} from "../constant/routes";
import App from "../App";

const ReactRouterProvider = () => {
  const routes = createRoutesFromElements(
    <>
      <Route index element={<App />} />
      <Route path={ADMIN_DASHBOARD_ROUTE_NAME} element={<DashboardAdmin />} />
      <Route path={ADMIN_MENU_ROUTE_NAME} element={<DashboardAdmin />} />
    </>
  );

  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
};

export default ReactRouterProvider;
