import { IoHomeOutline } from "react-icons/io5";
import { LuContact } from "react-icons/lu";
import { FaBlogger } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";

export const navbaritem = [
  {
    id: 1,
    name: "Home",
    icon: <IoHomeOutline />,
    path: "/",
  },
  {
    id: 2,
    name: "About",
    icon: <IoHomeOutline />,
    path: "/about",
  },
  {
    id: 3,
    name: "Contact",
    icon: <LuContact />,
    path: "/contact",
  },
  {
    id: 4,
    name: "Blog",
    icon: <FaBlogger />,
    path: "/blog",
  },
  {
    id: 41,
    name: "Admin",
    icon: <FaBlogger />,
    path: "/admin",
  },
  {
    id: 5,
    name: "Login",
    icon: <IoMdLogIn />,
    path: "/login",
  },
];
