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

const exclude =
  "--exclude='**/node_modules/**','**/__mocks__/**','**/__generated__/**'";
_x('yarn', [
  'relay-compiler',
  '--src=./apps/core', // we are currently only using relay fragments in core. We need to change this and run in each workspace separately if we add fragments in more workspaces.
  '--schema=./schema.graphql',
  '--verbose',
  exclude,
  ...process.argv.slice(2),
]);
