const withTranslateRoutes = require('next-translate-routes/plugin');
const { i18n } = require("./next-i18next.config");
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  mode: "production"
});

module.exports = withPWA(withTranslateRoutes({
  reactStrictMode: false,
  i18n,
  env: {
    NEXT_PUBLIC_API_SERVER: "https://white-homes.me", // Lokalni server URL
  },
  async rewrites() {
    return [
      { 
        source: '/locales/:path*',
        destination: '/_next/static/locales/:path*',
      },
      {
        source: "/api/:path*",
        destination: `https://white-homes.me/api/:path*`, // Lokalni API URL
      },
      {
        source: "/admin/api/:path*",
        destination: `https://white-homes.me/api/:path*`, // Lokalni API URL
      },
      {
        source: "/admin/izmijeni-nekretninu/api/:path*",
        destination: `https://white-homes.me/api/:path*`, // Lokalni API URL
      },
      {
        source: "/slike/:path*",
        destination: `https://white-homes.me/:path*`, // Lokalni server za slike
      },
      {
        source: "/apartment-rental",
        destination: "/en/apartment-rental",
      },
    ];
  },
}));
