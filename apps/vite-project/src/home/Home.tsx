import React, { useEffect } from "react";
import { Trans } from "@lingui/macro";
import withTranslations from "../withTranslation";

const Home = () => {
  
  useEffect(() => {
    console.log("home_____________________");
  }, []);

  return (
    <div className="p-4 mb-4">
      <header className="fixed flex justify-around top-0 left-0 w-full  z-10">
        <div className="flex items-center gap-6 justify-center">
          <a className="hover:text-primary" href="/">
            <Trans> Home</Trans>
          </a>
          <a className="hover:text-primary" href="/">
            <Trans> Courses</Trans>
          </a>
          <a className="hover:text-primary" href="/">
            <Trans> About</Trans>
          </a>
          <a className="hover:text-primary" href="/">
            <Trans>Blog</Trans>
          </a>
          <a className="hover:text-primary" href="/onboarding">
            <Trans>Onboarding</Trans>
          </a>
        </div>

        <div className="flex items-center gap-8 justify-center">
          <button className="py-2 px-6 bg-primary rounded-lg text-white font-bold">
            {" "}
            <Trans> Log in</Trans>
          </button>
          <button className="py-2 px-6 bg-primary rounded-lg text-white font-bold">
            <Trans> Sign Up</Trans>
          </button>
        </div>
      </header>
      <div className="relative top-24 text-center">
        <h1 className="text-2xl font-bold pb-4 ">
          <Trans id='innovate'>Learning with Open Innovation MOOCs</Trans>
        </h1>
        <div className="text-xl leading-8">
          <Trans>
            Localisation follows after Internationalization it focuses on the
            details of the translation process. It involves ensuring that the
            translated language reflects the culture of the user in terms of
            content, page displayed, text direction without losing its
            original meaning.
          </Trans>
        </div>
      </div>
    </div>
  );
};

export default withTranslations(Home,'common');
