/** @type {import('next').NextConfig} **/
import { withContentlayer } from 'next-contentlayer'
import withPlaiceholder from '@plaiceholder/next'

const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    })

    return config
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
    ],
  },
}

export default withPlaiceholder(withContentlayer(nextConfig))
