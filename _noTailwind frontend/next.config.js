const path = require('path')
const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
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
  env: {
    IG_AT: 'IGQVJWc1hpdmowOUpkdUJJSnFkbXFXTTk2cHhZASXdiVTNFcFZA5V1FDZAEQ4c3h0SkpPNjlBUGNjWmdGTTRDTnNLUkJzR3RmWUZAjQWhPZAWkyUnpsSFF5VjU3ZA0Y5UHVVWXZA6MXBSMkc4TnN5NURmUEUwcwZDZD',
    IG_USERID: '54042234678',
    IG_USERNAME: 'sdinstatest',
    IG_PASSWORD: 'sdinstatest2022',
  },
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