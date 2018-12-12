// @flow

/* ::
 type API = {|
  +cache: boolean => void,
|};
*/

// A repo should only contain one babel.config.js, and workspaces should use .babelrc, however there is currently a 🐛
// https://github.com/martpie/next-plugin-transpile-modules/issues/1#issuecomment-425651334 so .babelrc is not loaded

module.exports = function(api /* :API */) {
  api.cache(true);
  const presets = ['babel-preset-expo', 'module:react-native-dotenv'];
  const plugins = ['babel-plugin-relay', '@babel/plugin-transform-runtime'];

  return {
    presets,
    plugins,
  };
};
