const path = require('path')

module.exports = {
  stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-links'],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    console.log("test")

    console.log(path.resolve(__dirname, '../../src'))
    // Make whatever fine-grained changes you need
    const rule = config.module.rules.find(rule => {
      return String(rule.test) === String(/\.scss$/)
    })

    // Clean sass loader to use resolve-url-loader
    // https://github.com/webpack-contrib/sass-loader#problems-with-url
    delete rule.oneOf
    rule.use = [
        'vue-style-loader',
        'css-loader',
        'resolve-url-loader',
        'sass-loader'
      ]
    rule.include = [
      path.resolve(__dirname, '../../src'),
      /node_modules\/tokens/
    ]

    // Return the altered config
    return config;
  },
}
