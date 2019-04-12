// @flow

import { generateTestsFromFixtures } from '@kiwicom/test-utils';

import executeTestQuery from '../../../../services/testingTools/executeTestQuery';
import ConfirmPayment from './__datasets__/confirmPayment.json';

fetch.mockResponses([JSON.stringify(ConfirmPayment)]);

generateTestsFromFixtures(`${__dirname}/__fixtures__`, input => {
  return executeTestQuery(input);
});
