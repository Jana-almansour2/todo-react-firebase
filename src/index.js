import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AuthProvider from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";  // ← أضيفي هذا السطر

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider>           {/* ← أضيفي هذا */}
        <App />
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>
);