/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "encrypted-tbn0.gstatic.com",
      "localiq.com",
      "avatars.githubusercontent.com",
      "media-exp1.licdn.com",
      "pbs.twimg.com",
      "randomuser.me",
      "img.dummyapi.io",
    ],
  },
};

module.exports = nextConfig;
