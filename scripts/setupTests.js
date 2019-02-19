// @flow

import fetch from 'jest-fetch-mock';

global.fetch = fetch;

jest.mock('../packages/relay/src/Environment.js');
jest.mock('../apps/graphql/src/services/fetch/Fetch.js');
