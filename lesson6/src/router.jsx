import Layout from "./featured/layout";
import AboutPage from "./pages/about";
import BlogPage from "./pages/blog";
import ContactPage from "./pages/contact";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import { createBrowserRouter, createRoutesFromElements } from "react-router-dom"

// export const routers = [
//     {
//         id: 1,
//         element: <HomePage />,
//         name: 'Home',
//         path: '/',
//     },
//     {
//         id: 2,
//         element: < AboutPage />,
//         name: 'About',
//         path: '/about',
//     },
//     {
//         id: 3,
//         element: <BlogPage />,
//         name: 'Blog',
//         path: '/blog',
//     },
//     {
//         id: 4,
//         element: <ContactPage />,
//         name: 'Contact',
//         path: '/contact',
//     },
//     {
//         id: 5,
//         element: <LoginPage />,
//         name: 'Login',
//         path: '/login',
//     }
// ]

export const routers = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                id: 1,
                path: '/',
                element: <HomePage />

            },
            {
                id: 2,
                path: '/about',
                element: <AboutPage />

            },
            {
                id: 3,
                path: '/blog',
                element: <BlogPage />

            },
            {
                id: 4,
                path: '/contact',
                element: <ContactPage />
            },
            {
                id: 5,
                path: '/login',
                element: <LoginPage />
            }
        ]
    }
])