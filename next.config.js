/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'admin.buldov.com',
        port: '',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
  env: {
    WP_API: process.env.WP_API,
    LOCAL_API: process.env.LOCAL_API,
    WC_CONSUMER_KEY: process.env.WC_CONSUMER_KEY,
    WC_CONSUMER_SECRET: process.env.WC_CONSUMER_SECRET
  }
}

module.exports = nextConfig
