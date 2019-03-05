// @flow

const withTM = require('next-transpile-modules');

const debug = process.env.NODE_ENV !== 'production';

module.exports = withTM({
  transpileModules: ['@kiwicom/margarita-config'],
  assetPrefix: !debug ? '/margarita/' : '',
});
