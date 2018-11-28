// @flow
const withTM = require('next-plugin-transpile-modules');

const {ANALYZE} = process.env;

// Update these to match your package scope name.
const internalNodeModulesRegExp = /@kiwicom\/margarita(?!.*node_modules)/;

module.exports = withTM({
  transpileModules: ['react-native', 'react-native-web'],
  webpack: (config, {isServer, defaultLoaders}) => {

    config.externals = config.externals.map(external => {
      if (typeof external !== 'function') {
        return external;
      }

      return (ctx, req, cb) =>
        (internalNodeModulesRegExp.test(req) ? cb() : external(ctx, req, cb));
    });

    config.module.rules.push({
      test: /\.+(js)$/,
      loader: defaultLoaders.babel,
      include: [internalNodeModulesRegExp],
    });

    // Bundle Analyzer
    if (ANALYZE) {
      const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');
      config.plugins.push(new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        analyzerPort: isServer ? 8888 : 8889,
        openAnalyzer: true,
      }));

    }

    // Alias all `react-native` imports to `react-native-web`
    config.resolve.alias = {
      'react-native$': 'react-native-web',
    };

    return config;
  },
});
