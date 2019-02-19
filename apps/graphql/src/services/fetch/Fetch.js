// @flow

import fetchWithRetries from '@kiwicom/fetch';

import Logger from '../logger/Logger';
import type { HttpMethod } from './httpMethods';

const { API_KEY, NODE_ENV, BASE_URL } = process.env;

export type Options = {|
  +headers?: Object,
  +body?: string, // usually JSON.stringify
  +fetchTimeout?: number,
  +token?: string,
|};

const prepareOptions = (options: Object) => {
  const headers = options.headers ?? {};
  return {
    ...options,
    headers: {
      ...headers,
      'Content-Type': 'application/json',
      apikey: API_KEY,
    },
  };
};
export default async function fetch(
  url: string,
  method: HttpMethod = 'GET',
  options?: Options = ({}: Object),
): Promise<any> {
  if (!BASE_URL) {
    throw new Error('Missing set the BASE_URL environments variable.');
  }

  if (typeof API_KEY !== 'string') {
    throw Error(
      `Expected to have apikey of type string, got ${typeof API_KEY}`,
    );
  }

  if (NODE_ENV !== 'production') {
    Logger.info(`${BASE_URL}${url}`);
  }

  if (NODE_ENV === 'test') {
    throw new Error(
      `fetch should never be called in test environment. Have you forgotten to mock "${url}" with fake data response?`,
    );
  }

  try {
    const response = await fetchWithRetries(`${BASE_URL}${url}`, {
      fetchTimeout: 30000,
      retryDelays: [1000, 3000],
      ...prepareOptions(options),
      method,
    });
    Logger.info(`response status: ${response.status}`);

    if (response.status === 204) {
      // response.json is undefined if there is no body
      return null;
    }

    return response.json();
  } catch (err) {
    Logger.error(`status: ${err.response.status} - ${err.response.statusText}`);

    const response = await err.response.json();
    Logger.error(response.message);
    throw err;
  }
}
