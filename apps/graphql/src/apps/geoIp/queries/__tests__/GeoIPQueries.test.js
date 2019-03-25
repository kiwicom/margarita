// @flow

import { generateTestsFromFixtures } from '@kiwicom/test-utils';

import executeTestQuery from '../../../../services/testingTools/executeTestQuery';

const geoIPData = {
  isoCountryCode: 'CZ',
  latitude: '50.0848',
  longitude: '14.411200000000001',
};

generateTestsFromFixtures(`${__dirname}/__fixtures__/`, input => {
  fetch.mockResponses([JSON.stringify(geoIPData)]);
  return executeTestQuery(input);
});
