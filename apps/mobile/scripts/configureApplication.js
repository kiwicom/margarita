// @flow strict

const fs = require('fs');
const path = require('path');

const log = message => console.log(`➤ ${message}`); // eslint-disable-line no-console

log('Patching intl package');

/**
 *
 * It is necessary to patch this library as package.json contains dirty values for RN to work properly.
 * Besides, we need the library because https://stackoverflow.com/questions/41736735/react-native-and-intl-polyfill-required-on-android-device
 *
 */

const intlPackageJson = JSON.parse(
  fs.readFileSync(
    path.join(
      __dirname,
      '..',
      '..',
      '..',
      'node_modules',
      'intl',
      'package.json',
    ),
    'utf-8',
  ),
);
delete intlPackageJson.browser;

fs.writeFileSync(
  path.join(
    __dirname,
    '..',
    '..',
    '..',
    'node_modules',
    'intl',
    'package.json',
  ),
  JSON.stringify(intlPackageJson, null, 2),
);

try {
  fs.unlinkSync(
    path.join(__dirname, '..', '..', '..', 'node_modules', 'intl', '.babelrc'),
  );
} catch (e) {
  // Ignore error - file doesn't exist
}

log('Configuration complete!');
