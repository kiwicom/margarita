// @flow

import { generateTestsFromFixtures } from '@kiwicom/test-utils';

import executeTestQuery from '../../executeTestQuery';
import Itineraries from '../../datasets/Itineraries.json';

fetch.mockResponses([JSON.stringify(Itineraries)]);

generateTestsFromFixtures(`${__dirname}/__fixtures__`, input =>
  executeTestQuery(input),
);
