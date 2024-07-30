import { createBrowserRouter } from "react-router-dom";
import Layout from "./features/layout";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import ErrorPage from "./common/Error";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/",
        element: <div>App</div>,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
