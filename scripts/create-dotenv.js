// @flow

import fs from 'fs';
import os from 'os';
import path from 'path';
import { config } from 'dotenv';

config();

const secrets = Object.keys(process.env).map(key => {
  return `${key}=${process.env[key] ?? ''}`;
});

const ENV_FILE = path.join(__dirname, '..', '.env');
fs.writeFileSync(ENV_FILE, secrets.join(os.EOL));
