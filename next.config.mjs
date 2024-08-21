/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [process.env.NEXT_PUBLIC_FAKE_STORE_DOMAIN]
  }
};

export default nextConfig;
