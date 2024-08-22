/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/E-commerce-web/' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/E-commerce-web' : '',
  images: {
    domains: [process.env.NEXT_PUBLIC_FAKE_STORE_DOMAIN],
    unoptimized: true, // Disable Image Optimization
  },
  reactStrictMode: false
};

export default nextConfig;
