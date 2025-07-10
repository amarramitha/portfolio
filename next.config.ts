import type { NextConfig } from "next";
import type { Configuration } from "webpack";

const nextConfig: NextConfig = {
  // output: 'export',
  // basePath: '/portfolio',
  // assetPrefix: '/portfolio/',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  webpack(config: Configuration): Configuration {
    config.module?.rules?.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

export default nextConfig;
