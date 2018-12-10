// @flow

/* ::
 type API = {|
  +cache: boolean => void,
|};
*/

module.exports = function(api /* :API */) {
  api.cache(true);
  const presets = ['babel-preset-expo', 'module:react-native-dotenv'];
  const plugins = ['babel-plugin-relay', '@babel/plugin-transform-runtime'];
  return {
    presets,
    plugins,
    babelrcRoots: ['.', './apps/*', './packages/*'],
  };
};
