/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  images: {
    remotePatterns: [],
    formats: ["image/avif", "image/webp"],
    domains: ["img.daisyui.com"],
  },
};

export default nextConfig;
