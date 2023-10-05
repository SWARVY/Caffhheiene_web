/** @type {import('next').NextConfig} **/
const { withContentlayer } = require('next-contentlayer')

const nextConfig = {
  experimental: {
    appDir: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    })

    return config
  },
}

module.exports = withContentlayer(nextConfig)
