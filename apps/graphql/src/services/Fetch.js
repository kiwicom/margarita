// @flow

import fetchWithRetries from '@mrtnzlml/fetch';

import type { HttpMethod } from './types';

const { NODE_ENV, BASE_URL } = process.env;

export type Options = {|
  +headers?: Object,
  +body?: string, // usually JSON.stringify
  +fetchTimeout?: number,
  +token?: string,
|};

const prepareOptions = (options: Object, apikey) => {
  const headers = options.headers ?? {};
  return {
    ...options,
    headers: {
      ...headers,
      'Content-Type': 'application/json',
      apikey,
    },
  };
};
export default async function fetch(
  url: string,
  apikey: string,
  method: HttpMethod = 'GET',
  options?: Options = ({}: Object),
): Promise<any> {
  if (!BASE_URL) {
    throw new Error('Missing set the BASE_URL environments variable.');
  }

  if (typeof apikey !== 'string') {
    throw Error(`Expected to have apikey of type string, got ${typeof apikey}`);
  }

  if (NODE_ENV === 'development') {
    console.log(url); // eslint-disable-line no-console
  }

  if (NODE_ENV === 'test') {
    throw new Error(
      `fetch should never be called in test environment. Have you forgotten to mock "${url}" with fake data response?`,
    );
  }

  const response = await fetchWithRetries(`${BASE_URL}${url}`, {
    fetchTimeout: 30000,
    retryDelays: [1000, 3000],
    ...prepareOptions(options, apikey),
    method,
  });

  if (response.status === 204) {
    // response.json is undefined if there is no body
    return null;
  }
  return response.json();
}
