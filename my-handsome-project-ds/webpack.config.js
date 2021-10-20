const {VueLoaderPlugin} = require('vue-loader');
const nodeExternals = require('webpack-node-externals');
const path = require('path');

const paths = {
  libSrc: path.resolve(__dirname, "src"),
  libIndex: [path.resolve(__dirname, "src/index.js")],
  libOutputDir: path.resolve(__dirname, "dist"),
  libModules: path.resolve(__dirname, "../node_modules"),
};

module.exports = {
  entry: paths.libIndex,
  devtool: "source-map",
  output: {
    filename: 'index.js',
    path: paths.libOutputDir,
    library: 'design-system',
    libraryTarget: "umd",
    umdNamedDefine: true,
  },
  resolve: {
    extensions: ['.mjs', '.js', '.jsx', '.vue', '.json', '.wasm']
  },
  module: {
    noParse: /^(vue|vue-router|vuex|vuex-router-sync)$/,
    rules: [
      /* config.module.rule('vue') */
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      /* config.module.rule('images') */
      {
        test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
        use: [
          /* config.module.rule('images').use('url-loader') */
          {
            loader: paths.libModules + '/@vue/cli-service/node_modules/url-loader/dist/cjs.js',
            options: {
              limit: 4096,
              fallback: {
                loader: paths.libModules + '/@vue/cli-service/node_modules/file-loader/dist/cjs.js',
                options: {
                  name: 'img/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'babel-loader'
          },{
            loader: 'vue-svg-loader',
          },
        ],
      },

      /* config.module.rule('media') */
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: [
          /* config.module.rule('media').use('url-loader') */
          {
            loader: paths.libModules + '/@vue/cli-service/node_modules/url-loader/dist/cjs.js',
            options: {
              limit: 4096,
              fallback: {
                loader: paths.libModules + '/@vue/cli-service/node_modules/file-loader/dist/cjs.js',
                options: {
                  name: 'media/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('fonts') */
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        use: [
          /* config.module.rule('fonts').use('url-loader') */
          {
            loader: paths.libModules + '/@vue/cli-service/node_modules/url-loader/dist/cjs.js',
            options: {
              limit: 4096,
              fallback: {
                loader: paths.libModules + '/@vue/cli-service/node_modules/file-loader/dist/cjs.js',
                options: {
                  name: 'fonts/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('scss') */
      {
        test: /\.s(c|a)ss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'resolve-url-loader',
          'sass-loader'
        ],
        include: [
          path.resolve(__dirname, 'src'),
          /node_modules\/@mhp\/tokens/
        ]
      },
      /* config.module.rule('css') */
      {
        test: /.css$/,
        use: [
          'vue-style-loader',
          'css-loader',
        ]
      },
      /* config.module.rule('js') */
      {
        test: /\.m?jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      /* config.module.rule('eslint') */
      {
        enforce: 'pre',
        test: /\.(vue|(j|t)sx?)$/,
        exclude: [
          /node_modules/,
          paths.libModules + '/@vue/cli-service/lib'
        ],
        use: [
          /* config.module.rule('eslint').use('eslint-loader') */
          {
            loader: paths.libModules + '/eslint-loader/index.js',
            options: {
              extensions: [
                '.js',
                '.jsx',
                '.vue'
              ],
              cache: true,
              cacheIdentifier: '39ad34fc',
              emitWarning: false,
              emitError: false,
              eslintPath: paths.libModules + '/eslint',
              formatter: undefined
            }
          }
        ]
      }
    ]
  },
  externals: [
    nodeExternals(),
    nodeExternals({
      modulesDir: path.resolve(__dirname, "../node_modules"),
    }),
  ],
  plugins: [
    // make sure to include the plugin!
    new VueLoaderPlugin()
  ]
}
