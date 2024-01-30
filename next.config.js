/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vtc-be-laptop.onrender.com",
        port: "",
        pathname: "/image/**",
      },
    ],
  },
  // async redirects() {
  //   return [
  //     // Other redirects
  //     {
  //       source: "/login",
  //       destination: "/api/auth/route", // Redirect to NextAuth.js signin endpoint
  //       permanent: true,
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
