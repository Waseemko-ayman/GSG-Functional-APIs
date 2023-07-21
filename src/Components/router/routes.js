import { PATHS } from "./paths";
import { Navigate, Outlet } from "react-router-dom";
import HomePage from "../../Pages/HomePage";
import StoresPage from "../../Pages/StoresPage";
import StorePage from "../../Pages/StorePage";
import EditStorePage from "../../Pages/EditStorePage";
import CreateStorePage from "../../Pages/CreateStorePage";

export const routers = [
  {
    index: true,
    element: <HomePage />,
  },
  {
    path: PATHS.STORES.ROOT,
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <StoresPage />,
      },
      {
        path: PATHS.STORES.VIEW,
        element: <StorePage />,
      },
      {
        path: PATHS.STORES.EDIT,
        element: <EditStorePage />,
      },
      {
        path: PATHS.STORES.CREATE,
        element: <CreateStorePage />,
      },
    ]
  },
  {
    path: PATHS.ERRORS.NOT_FOUND,
    element: <h1>Page Not Found</h1>,
  },
  {
    path: '*',
    element: <Navigate to={PATHS.ERRORS.NOT_FOUND} replace={true} />,
  },
]
