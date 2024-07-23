import React from "react";
import { RouterProvider } from "react-router-dom";
import { routers } from "./router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
      />
      <RouterProvider router={routers} />
    </>
  );
};

export default App;
