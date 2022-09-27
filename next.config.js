/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = {
  nextConfig,
  generateEtags: false,
  // pageExtensions: ["page.tsx", "page.ts", "page.jsx", "page.js"],
};
