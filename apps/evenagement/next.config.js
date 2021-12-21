const modules = [
  'firebase-helpers',
  'ui',
  'use-binding',
  'use-doc-form',
  'user',
]

const withTM = require('next-transpile-modules')(modules)

module.exports = withTM({
  reactStrictMode: true,
  images: {
    domains: ['firebasestorage.googleapis.com'],
  },
})
