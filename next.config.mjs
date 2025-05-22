/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [new URL("https://images.contentstack.io/**")],
  },
};

export default nextConfig;
