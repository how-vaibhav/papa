import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Random from "./Hell.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Random />
  </React.StrictMode>
);
