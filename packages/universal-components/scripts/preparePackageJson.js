/* eslint-disable no-console */
// @flow strict

const fs = require('fs');
const path = require('path');

console.log('Preparing universal-components/package.json for release...');
if (fs.existsSync(path.join(__dirname, '../package.json'))) {
  const packageJson = JSON.parse(
    fs.readFileSync(path.join(__dirname, '..', 'package.json'), 'utf-8'),
  );

  packageJson.main = 'lib/web/index.js';
  packageJson['react-native'] = 'lib/native/index.js';

  fs.writeFileSync(
    path.join(__dirname, '..', 'package.json'),
    JSON.stringify(packageJson, null, 2),
  );

  console.log('Successfully prepared universal-components/package.json');
}
