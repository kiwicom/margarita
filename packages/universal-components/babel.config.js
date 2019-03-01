// @flow

/* ::
 type API = {|
  +cache: boolean => void,
|};
*/

module.exports = (api /* :API */) => {
  api.cache(false);

  const presets = ['module:metro-react-native-babel-preset'];
  const exclude = ['**/*.png', '**/*.gif', '**/*.jpg'];

  return {
    presets,
    exclude,
  };
};
