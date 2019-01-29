// @flow

import { execSync } from 'child_process';
import path from 'path';

const rootDir = path.join(__dirname, '..');

execSync('yarn web &', {
  cwd: rootDir,
  stdio: 'inherit',
});

execSync('yarn server', { cwd: rootDir, stdio: 'inherit' });
