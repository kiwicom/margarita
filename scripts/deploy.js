/* eslint-disable no-console */
// @flow

import { execSync } from 'child_process';

execSync('rimraf deploy', { stdio: 'inherit' });

const { SITE_ID } = process.env;

/**
 * This script allows to build the right site for Netlify, depending on an environment variable, SITE_ID, set per Netlify website.
 * All built files should go into <ROOT_FOLDER>/deploy (cf. `publish` field in netlify.toml)
 */

switch (SITE_ID) {
  case '@kiwicom/universal-components': {
    execSync('yarn workspace @kiwicom/universal-components storybook:build', {
      stdio: 'inherit',
    });
    break;
  }
  case '@kiwicom/margarita-web': {
    execSync('yarn create-dotenv', { stdio: 'inherit' });
    execSync('yarn workspace @kiwicom/margarita-web deploy', {
      stdio: 'inherit',
    });
    break;
  }
  default: {
    execSync('yarn create-dotenv', { stdio: 'inherit' });
    execSync('yarn workspace @kiwicom/margarita-web deploy', {
      stdio: 'inherit',
    });
    console.log(
      'No SITE_ID environment variable was set; using @kiwicom/margarita-web.',
    );
  }
}
