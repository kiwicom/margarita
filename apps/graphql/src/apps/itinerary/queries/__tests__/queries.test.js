// @flow

import { generateTestsFromFixtures } from '@kiwicom/test-utils';

import executeTestQuery from '../../../../services/testingTools/executeTestQuery';
import Itineraries from '../../__datasets__/Itineraries.json';

fetch.mockResponses([JSON.stringify(Itineraries)]);

generateTestsFromFixtures(`${__dirname}/__fixtures__`, input =>
  executeTestQuery(input),
);
