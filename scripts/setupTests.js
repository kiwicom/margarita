// @flow

import fetch from 'jest-fetch-mock';

global.fetch = fetch;

jest.mock('../packages/relay/src/Environment.js');
jest.mock('../apps/graphql/src/services/fetch/globalFetch.js');

// jest-expo does not render ScrollViews https://github.com/expo/expo/issues/2484
jest.mock('react-native/Libraries/Components/ScrollView/ScrollView', () =>
  jest.requireActual(
    'react-native/Libraries/Components/ScrollView/__mocks__/ScrollViewMock',
  ),
);

beforeAll(() => {
  process.env = Object.assign(process.env, {
    BASE_URL: 'TestBaseUrl',
  });
});
