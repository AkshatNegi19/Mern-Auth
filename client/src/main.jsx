import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AppContextProvider } from "./context/AppContext.jsx";
import axios from "axios";

// ⚡ Configure axios globally
axios.defaults.withCredentials = true; // send cookies automatically
axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL; // set base URL

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </BrowserRouter>
  </StrictMode>
);
