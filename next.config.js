const withPWA = require("next-pwa")({
  dest: "public",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BASE_URL_DEV: "http://localhost:3000",
    BASE_URL_PROD: "https://portfolio.deri-kurniawan.vercel.app",
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "img.icons8.com",
      "cdn.icon-icons.com",
      "images.unsplash.com",
      "res.cloudinary.com",
    ],
  },
};

module.exports = withPWA({ ...nextConfig });
