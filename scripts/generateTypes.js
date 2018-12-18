/* eslint-disable no-console */
// @flow strict

const fs = require('fs');
const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const rimraf = require('rimraf');

const icons = require('../src/Icon/icons.json');

rimraf.sync(path.join(__dirname, '../src/types/_generated-types'));
fs.mkdirSync(path.join(__dirname, '../src/types/_generated-types'));

fs.writeFileSync(
  path.join(__dirname, '..', 'src/types/_generated-types', 'index.js'),
  `// @flow strict

export type IconNameType =
  | ${Object.keys(icons)
    .map(n => `'${n}'`)
    .join('\n  | ')};
`
);

console.log('Successfully generated _generated-types/index.js');
