const modules = [
  'community',
  'event',
  'firebase-helpers',
  'main',
  'ui',
  'use-binding',
  'use-doc-form',
  'user'
]

const withTM = require('next-transpile-modules')(modules)

module.exports = withTM({
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'firebasestorage.googleapis.com'],
  },
})
