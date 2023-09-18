import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { I18nProvider } from "@lingui/react";
import { defaultLocale, dynamicActivate, i18n } from "./i18n.js";

const I18nApp = () => {

  i18n.activate('en');

  return (
    <React.StrictMode>
      <I18nProvider i18n={i18n}>
        <App />
      </I18nProvider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(<I18nApp />);
