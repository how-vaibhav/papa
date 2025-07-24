import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

const amm = React.createElement(
  "a",
  { href: "http://insecam.org" },
  "click here"
);

createRoot(document.getElementById("root")).render(
  <>
    {amm}
    <App />
  </>
);
