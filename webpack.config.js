'use strict';

const HTMLPlugin = require('html-webpack-plugin');
const ExtractPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-source-map', //source map for better error line numbers
  entry: `${__dirname}/src/main.js`,
  output: {
    filename: 'bundle-[hash].js',
    path: `${__dirname}/build`,
    publicPath: '/',
  },
  plugins: [
    new HTMLPlugin({template: `${__dirname}/src/index.html`}),
    new ExtractPlugin('bundle-[hash].css'),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        loader: ExtractPlugin.extract(['css-loader', 'sass-loader']),
      },
    ],
  },
};
