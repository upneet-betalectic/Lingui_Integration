module.exports = {
    locales: ["en", "fr"],
    catalogs: [
      {
        path: "src/locales/{locale}/common",
        include: ["src/home/*","src/*"], 
      },
      {
        path: "src/locales/{locale}/language",
        include: ["src/language/*"], 
      },
      {
        path: "src/locales/{locale}/onboarding",
        include: ["src/onboarding/*"], 
      },
    ],
    format: "po",
  };