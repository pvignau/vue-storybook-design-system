const path = require('path')

module.exports = {
  stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-links'],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static versi
    // Make whatever fine-grained changes you need
    const scssRule = config.module.rules.find(rule => {
      return String(rule.test) === String(/\.scss$/)
    })

    // Clean sass loader to use resolve-url-loader
    // https://github.com/webpack-contrib/sass-loader#problems-with-url
    delete scssRule.oneOf
    scssRule.use = [
        'vue-style-loader',
        'css-loader',
        'resolve-url-loader',
        'sass-loader'
      ]
    scssRule.include = [
      path.resolve(__dirname, '../../src'),
      /node_modules\/tokens/
    ]

    const svgRule = config.module.rules.find(rule => {
      return String(rule.test) === String(/\.(svg)(\?.*)?$/)
    })

    svgRule.use = [
      {
        loader: 'babel-loader'
      },{
        loader: 'vue-svg-loader',
      },
    ]
    console.log(svgRule);
    // Return the altered config
    return config;
  },
}
