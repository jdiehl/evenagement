// const { resolve } = require('path')

module.exports = {
  stories: [
    // '../src/**/*.stories.@(js|jsx|ts|tsx)',
    // '../stories/**/*.stories.mdx',
    // '../stories/**/*.stories.@(js|jsx|ts|tsx)'
    '../../../packages/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
        postcssOptions: require('styles/postcss.config')
      },
    },
  ]
}
