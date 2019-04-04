// @flow

import { generateTestsFromFixtures } from '@kiwicom/test-utils';

import executeTestQuery from '../../../../services/testingTools/executeTestQuery';
import Itineraries from '../../__datasets__/Itineraries.json';
import ItineraryReturn from '../../__datasets__/ItineraryReturn.json';

generateTestsFromFixtures(`${__dirname}/__fixtures__/itineraries`, input => {
  fetch.mockResponses(
    [JSON.stringify(Itineraries)],
    [JSON.stringify(ItineraryReturn)],
  );
  return executeTestQuery(input);
});
