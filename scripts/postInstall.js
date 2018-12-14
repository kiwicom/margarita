// @flow strict

const fs = require('fs');
const path = require('path');

const log = message => console.log(`➤ ${message}`); // eslint-disable-line no-console

// Patching Intl package is needed to work proprely with react-native >= 0.57
log('Patching intl package');
const intlPackageJson = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, '..', 'node_modules', 'intl', 'package.json'),
    'utf-8'
  )
);
delete intlPackageJson.browser;

fs.writeFileSync(
  path.join(__dirname, '..', 'node_modules', 'intl', 'package.json'),
  JSON.stringify(intlPackageJson, null, 2)
);

try {
  fs.unlinkSync(path.join(__dirname, '..', 'node_modules', 'intl', '.babelrc'));
} catch (e) {
  // Ignore error - file doesn't exist
}
