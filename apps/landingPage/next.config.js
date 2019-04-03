// @flow

const withTM = require('next-transpile-modules');

module.exports = withTM({
  transpileModules: ['@kiwicom/margarita-config'],
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.js$/,
      use: [
        {
          ...options.defaultLoaders.babel,
          options: {
            ...options.defaultLoaders.babel.options,
            rootMode: 'upward',
          },
        },
      ],
    });

    return config;
  },
});
