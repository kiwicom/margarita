// @flow

/* eslint-disable no-console */
import fs from 'fs';
import path from 'path';
import { printSchema } from 'graphql/utilities';
import { spawnSync } from 'child_process';
import { schema } from '@kiwicom/margarita-graphql';

const _x = (command /*: string */, args /*: string[] */) => {
  const { status } = spawnSync(command, args, { stdio: 'inherit' });
  if (status !== 0) {
    console.error(`Command "${command}" exited with status code: ${status}`);
    console.error(command, args.join(' '));
    process.exit(status);
  }
};

const clientSchema = printSchema(schema);
fs.writeFileSync(path.join(__dirname, '..', 'schema.graphql'), clientSchema);

_x('yarn', [
  'relay-compiler',
  '--src=./apps',
  '--schema=./schema.graphql',
  '--verbose',
  // ...process.argv.slice(2),
]);
