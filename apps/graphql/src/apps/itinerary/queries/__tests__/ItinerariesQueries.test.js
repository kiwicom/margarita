// @flow

import { generateTestsFromFixtures } from '@kiwicom/test-utils';

import executeTestQuery from '../../../../services/testingTools/executeTestQuery';
import Itineraries from '../../__datasets__/Itineraries.json';

generateTestsFromFixtures(`${__dirname}/__fixtures__/itineraries`, input => {
  fetch.mockResponses([JSON.stringify(Itineraries)]);
  return executeTestQuery(input);
});
