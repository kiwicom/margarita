// @flow

const withTM = require('next-plugin-transpile-modules');
const withImages = require('next-images');

const { ANALYZE } = process.env;

module.exports = withImages(
  withTM({
    transpileModules: [
      'react-native',
      'react-native-web',
      '@kiwicom/margarita-core',
      '@kiwicom/margarita-relay',
      '@kiwicom/margarita-utils',
      '@kiwicom/margarita-components',
      '@kiwicom/universal-components',
      '@kiwicom/margarita-navigation',
      '@kiwicom/margarita-config',
      '@kiwicom/margarita-map',
      '@kiwicom/margarita-device',
      '@kiwicom/margarita-localization',
    ],
    webpack: (config, { isServer }) => {
      // Bundle Analyzer
      if (ANALYZE) {
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
        ...(config.resolve.alias || {}),
        'react-native$': 'react-native-web',
      };

      config.resolve.extensions = [
        ...config.resolve.extensions,
        '.web.js',
        '.js',
      ];

      config.module.rules.push({
        test: /\.(?:woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: '../static/fonts/',
              name: '[name].[ext]',
            },
          },
        ],
      });

      return config;
    },
  }),
);
