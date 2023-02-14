/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  // image hosted in https://freeimage.host/ website without log in and in free tire
  // both link are related to freeimage host website
  images: {
    domains: ["freeimage.host", "iili.io"],
  },
};

module.exports = nextConfig;
