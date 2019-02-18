// @flow

/* ::
 type Config = {|
  +actions: {|
    +setBabelPreset: Object => void
    |},
|};
*/

function onCreateBabelConfig({ actions } /* :Config */) {
  actions.setBabelPreset({
    name: `@babel/preset-flow`,
  });
}

exports.onCreateBabelConfig = onCreateBabelConfig;
