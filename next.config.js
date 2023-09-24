/** @type {import('next').NextConfig} */
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const nextConfig = {}

// module.exports = nextConfig
module.exports = {
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'https://localhost:7011/api/:path*'
        }
      ]
    }
  }