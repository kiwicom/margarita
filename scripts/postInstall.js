// @flow strict

const fs = require('fs');
const path = require('path');

const log = message => console.log(`➤ ${message}`); // eslint-disable-line no-console

// Patching Intl package is needed to work proprely with react-native >= 0.57
log('Patching intl package');

// In development, intl is located in ../node_modules
const localPath = path.join(__dirname, '..', 'node_modules', 'intl');

// In packaged version, intl is located in ../../../ (as our package is inside node_modules folder)
const npmPath = path.join(__dirname, '..', '..', '..', 'intl');

let correctPath;

if (fs.existsSync(localPath)) {
  correctPath = localPath;
} else if (fs.existsSync(npmPath)) {
  correctPath = npmPath;
} else {
  throw new Error(
    '@kiwicom/universal-components: impossible to execute postInstall.js\n > path to Intl package not found'
  );
}

const intlPackageJson = JSON.parse(
  fs.readFileSync(path.join(correctPath, 'package.json'), 'utf-8')
);
delete intlPackageJson.browser;

fs.writeFileSync(
  path.join(correctPath, 'package.json'),
  JSON.stringify(intlPackageJson, null, 2)
);

try {
  fs.unlinkSync(path.join(correctPath, '.babelrc'));
} catch (e) {
  // Ignore error - file doesn't exist
}
