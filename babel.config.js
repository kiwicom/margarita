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
  const presets = [
    '@kiwicom/babel-preset-kiwicom',
    'babel-preset-expo',
    'module:react-native-dotenv',
  ];
  const plugins = ['@babel/plugin-transform-runtime'];

  // if environment is web, add the "next/babel" config
  if (process.env.BABEL_ENV === 'web') {
    presets.push('next/babel');
  }

  return {
    presets,
    plugins,
  };
};
