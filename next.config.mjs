/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
    ],
  },
  eslint: {
    dirs: ['app', 'components', 'context', 'helpers', 'hooks', 'lib', 'types', 'utils'],
  },
}

export default nextConfig
