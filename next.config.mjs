/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["lucide-react"],
  // trailingSlash: true,
  // reactStrictMode: false,
  async redirects() {
    return [
      {
        source: "/home/",
        destination: "/",
        permanent: true,
      },
    ];
  },
  images: {
    path: "/_next/image",
    remotePatterns: [
      {
        protocol: "http",
        hostname: "**",
        // port: "1337",
        // pathname: "/uploads/**/*",
      },
      {
        protocol: "https",
        hostname: "placehold.com",
      },
    ],
  },
};

export default nextConfig;
