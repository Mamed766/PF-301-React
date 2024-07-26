import { createBrowserRouter } from "react-router-dom";
import Layout from "./featured/layout";
import HomePage from "./pages/home";
import BlogPage from "./pages/blog";
import BlogDetailPage from "./pages/blogDetail";
import ErrorBoundry from "./featured/error/ErrorBoundry";

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
        path: "/blog",
        element: <BlogPage />,
      },
      {
        path: "/blog/:id",
        element: <BlogDetailPage />,
      },
      {
        path: "/",
        element: <div>App</div>,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorBoundry />,
  },
]);
