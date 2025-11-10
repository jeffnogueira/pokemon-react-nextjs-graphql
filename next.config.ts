import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: false,
  images: {
    dangerouslyAllowSVG: true,
    localPatterns: [
      {
        pathname: '/assets/images',
      },
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com'
      },
      {
        protocol: 'https',
        hostname: 'archives.bulbagarden.net'
      },
    ],
  },
  sassOptions: { },
};

export default nextConfig;
