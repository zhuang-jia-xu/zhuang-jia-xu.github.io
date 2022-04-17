/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
  // exportPathMap: () => ({
  //   "/": { page: "/" },
  // }),
  images: {
    domains: ["loremflickr.com"],
  },
};

module.exports = nextConfig;
