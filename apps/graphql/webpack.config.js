// @flow

const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: 'none',
  target: 'node',
  plugins: [new webpack.IgnorePlugin(/\/iconv-loader$/)],
  optimization: {
    nodeEnv: false,
    namedModules: true,
    namedChunks: true,
    minimizer: [new UglifyJsPlugin()],
  },
  entry: {
    index: './lambda/graphql.js',
  },
  output: {
    path: path.resolve(__dirname, 'lambda', 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        // see: https://github.com/apollographql/react-apollo/issues/1737
        test: /\.mjs$/,
        type: 'javascript/auto',
        use: [],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: true,
          },
        },
      },
    ],
  },
};
