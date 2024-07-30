import React from "react";
import { RouterProvider } from "react-router-dom";
import { routers } from "./routers";

const App = () => {
  return (
    <div>
      <RouterProvider router={routers} />
    </div>
  );
};

export default App;
