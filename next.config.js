// @flow

const withTM = require('next-plugin-transpile-modules');
require('dotenv').config();
const webpack = require('webpack');

const { ANALYZE } = process.env;

module.exports = withTM({
  transpileModules: ['react-native', 'react-native-web', '@kiwicom/*'],
  webpack: (config, { isServer, defaultLoaders }) => {
    // Bundle Analyzer
    if (ANALYZE) {
      // eslint-disable-next-line import/no-extraneous-dependencies
      const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'server',
          analyzerPort: isServer ? 8888 : 8889,
          openAnalyzer: true,
        }),
      );
    }

    // Alias all `react-native` imports to `react-native-web`
    config.resolve.alias = {
      'react-native$': 'react-native-web',
    };
    config.plugins.push(new webpack.EnvironmentPlugin(process.env));

    return config;
  },
});
