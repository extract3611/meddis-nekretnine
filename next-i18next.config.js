
module.exports = {
  debug: process.env.NODE_ENV === "development",
  i18n: {
    locales: ["sr", "en", "ru"],
    defaultLocale: "sr",
    localeDetection: false


  },
  reloadOnPrerender: process.env.NODE_ENV === "development",
};
