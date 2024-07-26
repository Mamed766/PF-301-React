import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./stlyes/main.scss";
import { LightOrDarkProvider } from "./context/LigthOrDarkMoodContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LightOrDarkProvider>
      <App />
    </LightOrDarkProvider>
  </React.StrictMode>
);
