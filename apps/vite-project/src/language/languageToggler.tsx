import React,{ useEffect } from "react";
import { changeLanguage, dynamicActivate, i18n } from "../i18n";
import { Trans } from "@lingui/macro";
import withTranslations from "../withTranslation";
import { I18nProvider } from "@lingui/react";

const LanguageToggler = () => {

  useEffect(() => {
    console.log("toggler_____________________");
  }, []);

  const languageOptions = [
    { value: "en", label: "English" },
    { value: "fr", label: "French" },
  ];

  return (
    <div className="p-4 mb-4">
      <h2>
        <Trans>Lets Change the outlook</Trans>
      </h2>
      <div>
        {languageOptions.map((ob) => (
          <button key={ob.label} onClick={() => {
            dynamicActivate(ob.value,'language');
            dynamicActivate(ob.value,'common');
            dynamicActivate(ob.value,'onboarding');
          }}>{ob.label}</button>
        ))}
      </div>
    </div>
  );
};

export default withTranslations(LanguageToggler,'language');
