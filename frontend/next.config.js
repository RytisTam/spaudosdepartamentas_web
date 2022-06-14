const path = require('path')
const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n,
  reactStrictMode: true,
  images: {
    loader: "default",
    domains: ['localhost'],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  trailingSlash: true,
}

// module.exports = {
//   reactStrictMode: true,
//   images: {
//     loader: "default",
//     domains: ['localhost'],
//   },
//   sassOptions: {
//     includePaths: [path.join(__dirname, 'styles')],
//   },
//   trailingSlash: true,
// };

module.exports = nextConfig