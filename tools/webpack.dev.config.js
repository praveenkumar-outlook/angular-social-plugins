const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (...args) => ({
  devServer: {
    contentBase: path.join(__dirname, '../public'),
    open: true,
    port: 3000
  },
  entry: path.join(__dirname, '../dev/app/app.js'),
  output: {
    path: path.join(__dirname, '../public'),
    filename: 'app.bundle.js'
  },
  mode: 'development',
  resolve: {
    extensions: ['.js']
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: path.join(__dirname, '../public/index.html'),
      template: path.join(__dirname, '../dev/index.html')
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false
          }
        }
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  }
});
