import { createBrowserRouter } from "react-router-dom";
import Layout from "./featured/layout";
import HomePage from "./pages/home";
import BlogPage from "./pages/blog";
import BlogDetailPage from "./pages/blogdetail";
import ErrorBoundry from "./featured/ErrorBoundry";
import DashboardPage from "./pages/dashboard";
import Sidebar from "./featured/Sidebar";
import CreateBlogPage from "./pages/dasboard/createBlog";

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
        path: "blog/:id",
        element: <BlogDetailPage />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <Sidebar>
        <DashboardPage />
      </Sidebar>
    ),
  },
  {
    path: "/create-blog",
    element: (
      <Sidebar>
        <CreateBlogPage />
      </Sidebar>
    ),
  },
  {
    path: "*",
    element: <ErrorBoundry />,
  },
]);
