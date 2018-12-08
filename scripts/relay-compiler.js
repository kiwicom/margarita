// @flow

/* eslint-disable no-console */

const fs = require('fs');
const path = require('path');
const { printSchema } = require('graphql/utilities');
const { spawnSync } = require('child_process');

const schema = require('../packages/graphql/src/Schema');

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
  '--src=./app',
  '--schema=./schema.graphql',
  '--verbose',
  // ...process.argv.slice(2),
]);
