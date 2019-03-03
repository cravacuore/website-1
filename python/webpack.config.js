var path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  mode: 'development',
  entry: [
    './assets/js/app.js', './assets/scss/app.scss'
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'file-loader',
        options:{
          name: "../images/[name].[ext]",
        }
      }
    ]
  },
  output: {
    filename: 'js/main.js',
    path: path.resolve(__dirname, 'assets/dist/')
  },
  plugins: [
    new ExtractTextPlugin('css/app.min.css'),
    new VueLoaderPlugin(),
    new CopyWebpackPlugin([
            {from:'assets/images',to:'images'}
        ]),
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  }
}