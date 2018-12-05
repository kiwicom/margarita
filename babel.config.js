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

  // if environment is web, add the "next/babel" config
  if (process.env.BABEL_ENV === 'web') {
    presets.push('next/babel');
  }

  return {
    presets,
    plugins,
  };
};
