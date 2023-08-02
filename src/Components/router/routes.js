import { PATHS } from "./paths";
import { Navigate, Outlet } from "react-router-dom";
import HomePage from "../../Pages/HomePage";
import StoresPage from "../../Pages/StoresPage";
import StorePage from "../../Pages/StorePage";
import EditStorePage from "../../Pages/EditStorePage";
import CreateStorePage from "../../Pages/CreateStorePage";
import GifsPage from "../../Pages/GifsPage";
import AboutPage from "../../Pages/AboutPage";
import AdminGuard from "../Guards/AdminGuard";
import UserGuard from "../Guards/UserGuard";
import GuestGuards from "../Guards/GuestGuard";

export const adminPages = [
  {
    path: PATHS.ADMIN.ROOT,
    element: <AdminGuard />,
    children: [
      {
        index: true,
        element: <h1>Admin</h1>,
      },
      {
        path: PATHS.ADMIN.USERS,
        element: <h1>Users</h1>,
      },
    ]
  },
  {
    path: PATHS.STORES.ROOT,
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <StoresPage />
      }
    ],
  }
];

export const userPages = [
  {
    path: PATHS.STORES.ROOT,
    element: <UserGuard />,
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
    path: PATHS.ABOUT,
    element: <AboutPage />,
  },
];

export const GuestRoutes = [
  {
    index: true,
    element: (
      <GuestGuards>
        <HomePage />
      </GuestGuards>
    ),
  },
];

export const routers = [
  ...adminPages,
  ...userPages,
  ...GuestRoutes,
  {
    path: PATHS.ERRORS.NOT_FOUND,
    element: <h1>Page Not Found</h1>,
  },
  {
    path: PATHS.GIFS,
    element: <GifsPage />,
  },
  {
    path: '*',
    element: <Navigate to={PATHS.ERRORS.NOT_FOUND} replace={true} />,
  },
]
