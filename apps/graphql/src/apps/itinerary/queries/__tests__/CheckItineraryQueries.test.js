// @flow

import { generateTestsFromFixtures } from '@kiwicom/test-utils';

import executeTestQuery from '../../../../services/testingTools/executeTestQuery';
import Itinerary from '../../__datasets__/CheckItineraryReturn.json';

fetch.mockResponses([JSON.stringify(Itinerary)]);

generateTestsFromFixtures(`${__dirname}/__fixtures__/checkItinerary`, input =>
  executeTestQuery(input),
);
