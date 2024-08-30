
/** @type {import("next").NextConfig} */

const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://sfl-beta-env.eba-ivwmgdmw.us-east-2.elasticbeanstalk.com:5000/:path*' // Proxy to Backend
      }
    ]
  }
}

export default nextConfig;