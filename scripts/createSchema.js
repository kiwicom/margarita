// @flow

import { schema } from '@kiwicom/margarita-graphql';
import { printSchema } from 'graphql';
import fs from 'fs';
import path from 'path';

fs.writeFileSync(
  path.join(__dirname, '..', 'schema.graphql'),
  printSchema(schema),
);
