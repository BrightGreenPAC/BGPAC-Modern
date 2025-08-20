/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: []
  },
  // Example redirect for /donate later:
  // async redirects() {
  //   return [{ source: '/donate', destination: 'https://processor.example.com/brightgreenpac', permanent: false }];
  // }
};
module.exports = nextConfig;
