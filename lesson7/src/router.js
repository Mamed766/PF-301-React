import { createBrowserRouter } from "react-router-dom";
import Layout from "./features/layout";
import Home from "./pages/home";
import About from "./pages/about";
import Blog from "./pages/blog";
import CreateBlog from "./pages/blog/create-blog";
import EditBlog from "./pages/blog/edit-blog";
import BlogDetail from "./pages/blog/blog-detail";
import ErrorPage from "./pages/error";
import AdminDashboard from "./pages/admin";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        id: 1,
        path: "/",
        element: <Home />,
      },
      {
        id: 2,
        path: "/about",
        element: <About />,
      },
      {
        id: 3,
        path: "/blog",
        element: <Blog />,
      },
      {
        id: 4,
        path: "/blog/create",
        element: <CreateBlog />,
      },
      {
        id: 5,
        path: "/blog/edit/:id",
        element: <EditBlog />,
      },
      {
        id: 6,
        path: "/blog/:id",
        element: <BlogDetail />,
      },
      {
        id: 7,
        path: "/admin",
        element: <AdminDashboard />,
      },
    ],
  },

  {
    id: 7,
    path: "*",
    element: <ErrorPage />,
  },
]);
