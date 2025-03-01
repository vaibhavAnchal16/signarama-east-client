/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  generateEtags: false, // Moved this into nextConfig
  images: {
    domains: ["res.cloudinary.com", "lh3.googleusercontent.com"],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /ckeditor5-[^/\\]+[/\\]theme[/\\].+\.css$/,
      use: ["style-loader", "css-loader"],
    });
    return config;
  },
};

module.exports = nextConfig;
