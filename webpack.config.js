"use strict"

const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname);
const APP_DIR = path.resolve(__dirname);

const config = {
  entry: APP_DIR + '/pick.js',
  output: {
    path: BUILD_DIR,
    filename: 'dist.js'
  },
  plugins: [
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  })
],
  module: {
    loaders: [
      {
        test : /\.js/,
        exclude: /node_modules/,
        include: __dirname,
        loader : 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};

module.exports = config;
