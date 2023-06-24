/**
 * @type {import('next').NextConfig}
 */const withTranslateRoutes = require('next-translate-routes/plugin')


const { i18n } = require("./next-i18next.config");
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
});

module.exports = withPWA(withTranslateRoutes({
  reactStrictMode: false,
  i18n,
  env: {
    API_URL: "http://localhost:3000/api",
  },
  async rewrites() {
    return [
      {source: '/locales/:path*',
      destination: '/_next/static/locales/:path*',},
      {
        source: "/api/:path*",
        destination: `${process.env.NEXT_PUBLIC_API_SERVER}/api/:path*`,
      },
      {
        source: "/admin/api/:path*",
        destination: `${process.env.NEXT_PUBLIC_API_SERVER}/api/:path*`,
      },
      {
        source: "/admin/izmijeni-nekretninu/api/:path*",
        destination: `${process.env.NEXT_PUBLIC_API_SERVER}/api/:path*`,
      },
      {
        source: "/slike/:path*",
        destination: `${process.env.NEXT_PUBLIC_API_SERVER}/:path*`,
      },
      {
        source: "/slike/:path*",
        destination: `${process.env.NEXT_PUBLIC_API_SERVER}/:path*`,
      },
      {
        source: "/apartment-rental",
        destination: "/en/apartment-rental",
      },
    ];
  },
}));