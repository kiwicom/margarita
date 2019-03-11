/* eslint-disable no-console */
// @flow strict

const fs = require('fs');
const path = require('path');

console.log('Cleaning universal-components/package.json after release...');
if (fs.existsSync(path.join(__dirname, '../package.json'))) {
  const packageJson = JSON.parse(
    fs.readFileSync(path.join(__dirname, '..', 'package.json'), 'utf-8'),
  );

  packageJson.main = 'src/index.js';
  delete packageJson['react-native'];

  fs.writeFileSync(
    path.join(__dirname, '..', 'package.json'),
    JSON.stringify(packageJson, null, 2),
  );

  console.log('Successfully cleaned universal-components/package.json');
}
