import { setupI18n } from "@lingui/core";

// import {messages as enCommon} from './locales/en/common.js'
// import {messages as enlanguage} from './locales/en/language.js'
// import {messages as enOnboarding} from './locales/en/onboarding.js'

// import {messages as frCommon} from './locales/fr/common.js'
// import {messages as frlanguage} from './locales/fr/language.js'
// import {messages as frOnboarding} from './locales/fr/onboarding.js'


export let defaultLocale = "en";

export const i18n = setupI18n();

// i18n.load('en',{
//   enCommon,
//   enlanguage,
//   enOnboarding
// });

// i18n.load('fr',{
//   frCommon,
//   frlanguage,
//   frOnboarding
// })

export async function dynamicActivate(locale:string, component:string) {
  try {
    const { messages } = await import(`./locales/${locale}/${component}.po`);
    i18n.load(locale, messages);
    i18n.activate(locale);
    // defaultLocale=locale;

  } catch (error) {
    console.log("Dynamic Activate errorr____",error)
  }
}
