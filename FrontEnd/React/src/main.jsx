import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { LoginCache } from "./context/LoginCache.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <LoginCache>
    <App />
  </LoginCache>,
  // {/* </StrictMode>, */}
);
