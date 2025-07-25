// demo/next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    transpilePackages: ["pro-react-toast"],
  },
  sassOptions: {
    includePaths: ["./styles"],
  },
};

module.exports = nextConfig;
