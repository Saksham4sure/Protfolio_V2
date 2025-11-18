import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import LenisProvider from "./components/LenisProvider.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LenisProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </LenisProvider>
  </StrictMode>
);
