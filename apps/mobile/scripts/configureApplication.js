// @flow strict

const fs = require('fs');
const path = require('path');
const rimraf = require('rimraf');

const log = message => console.log(`➤ ${message}`); // eslint-disable-line no-console

log('Patching get-yarn-workspaces');
/**
 *
 * It is necessary to patch this library as the index.js file from the currently published npm version (as of 11/12/2018) does not match the one on their GitHub repository.
 * cf. https://github.com/viewstools/yarn-workspaces-cra-crna/issues/28
 *
 * Basically, what the following does is removing all unnecessary folders cloned from the repo and move the files from `get-yarn-workspaces` one directory up so that they
 * are available for us to use.
 *
 */

try {
  rimraf.sync(
    path.join(
      __dirname,
      '..',
      '..',
      '..',
      'node_modules',
      'get-yarn-workspaces',
      'crna-make-symlinks-for-yarn-workspaces',
    ),
  );
  rimraf.sync(
    path.join(
      __dirname,
      '..',
      '..',
      '..',
      'node_modules',
      'get-yarn-workspaces',
      'metro-bundler-config-yarn-workspaces',
    ),
  );
  rimraf.sync(
    path.join(
      __dirname,
      '..',
      '..',
      '..',
      'node_modules',
      'get-yarn-workspaces',
      'react-app-rewire-yarn-workspaces',
    ),
  );
  rimraf.sync(
    path.join(
      __dirname,
      '..',
      '..',
      '..',
      'node_modules',
      'get-yarn-workspaces',
      'workspaces-example',
    ),
  );
  rimraf.sync(
    path.join(
      __dirname,
      '..',
      '..',
      '..',
      'node_modules',
      'get-yarn-workspaces',
      '.gitignore',
    ),
  );
  rimraf.sync(
    path.join(
      __dirname,
      '..',
      '..',
      '..',
      'node_modules',
      'get-yarn-workspaces',
      '.prettierrc',
    ),
  );
  rimraf.sync(
    path.join(
      __dirname,
      '..',
      '..',
      '..',
      'node_modules',
      'get-yarn-workspaces',
      'README.md',
    ),
  );
  rimraf.sync(
    path.join(
      __dirname,
      '..',
      '..',
      '..',
      'node_modules',
      'get-yarn-workspaces',
      'views.css',
    ),
  );

  const files = fs.readdirSync(
    path.join(
      __dirname,
      '..',
      '..',
      '..',
      'node_modules',
      'get-yarn-workspaces',
      'get-yarn-workspaces',
    ),
  );
  files.forEach(file => {
    log(file);
    fs.renameSync(
      path.join(
        __dirname,
        '..',
        '..',
        '..',
        'node_modules',
        'get-yarn-workspaces',
        'get-yarn-workspaces',
        file,
      ),
      path.join(
        __dirname,
        '..',
        '..',
        '..',
        'node_modules',
        'get-yarn-workspaces',
        file,
      ),
    );
  });

  /**
   * @TODO remove empty folder node_modules/get-yarn-workspaces/get-yarn-workspaces
   */
} catch (e) {
  console.warn('Something went wrong when patching get-yarn-workspaces'); // eslint-disable-line no-console
}

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
