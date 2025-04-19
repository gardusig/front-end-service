import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.css";
import { PersonaProvider } from "./hooks/persona/PersonaProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PersonaProvider>
      <App />
    </PersonaProvider>
  </React.StrictMode>
);
