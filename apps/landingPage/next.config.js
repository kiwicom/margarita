// @flow

const withTM = require('next-transpile-modules');

module.exports = withTM({
  transpileModules: ['@kiwicom/margarita-config'],
});
