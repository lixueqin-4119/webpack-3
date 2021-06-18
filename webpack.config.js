const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  entry: './src/index.js',
  output: {
    filename: 'index.[contenthash].js'
  },
  plugins: [
    new HtmlWebpackPlugin(
      {
        title: 'XDML-写代码啦',
        template: 'src/assets/test.html'
      }
  )],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  }
};

