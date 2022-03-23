/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "encrypted-tbn0.gstatic.com",
      "localiq.com",
      "avatars.githubusercontent.com",
    ],
  },
};

module.exports = nextConfig;
