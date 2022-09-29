/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BASE_URL: "http://localhost:3000",
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

module.exports = nextConfig;
