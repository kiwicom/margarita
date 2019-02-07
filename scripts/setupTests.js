// @flow

import fetch from 'jest-fetch-mock';

global.fetch = fetch;

jest.mock('../packages/relay/src/Environment.js');
