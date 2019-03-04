/**
 * We want to type the Icon component, specifically  the "name" prop
 * Flow does not infer types from JSON file and that is why we have this script
 */

/* eslint-disable no-console */
// @flow strict

const fs = require('fs');
const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const rimraf = require('rimraf');

if (fs.existsSync(path.join(__dirname, '../src/Icon/icons.json'))) {
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
`,
  );

  console.log('Successfully generated _generated-types/index.js');
}
