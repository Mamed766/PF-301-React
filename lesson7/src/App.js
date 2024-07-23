import React from "react";
import Toaster from "./toast/Toaster";
import { RouterProvider } from "react-router-dom";
import { routers } from "./router";
const App = () => {
  return (
    <div className="container">
      <Toaster />
      <RouterProvider router={routers} />
    </div>
  );
};

export default App;
