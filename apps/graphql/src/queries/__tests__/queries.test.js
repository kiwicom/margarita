// @flow

import { generateTestsFromFixtures } from '@kiwicom/test-utils';

import executeTestQuery from '../../executeTestQuery';

generateTestsFromFixtures(`${__dirname}/__fixtures__`, input =>
  executeTestQuery(input),
);
