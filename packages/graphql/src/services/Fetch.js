// @flow

import fetchWithRetries from '@mrtnzlml/fetch';
import { API_KEY, NODE_ENV } from 'react-native-dotenv';
import { stringify } from 'querystring';

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
  method: string = 'GET',
  options?: Options = ({}: Object),
): Promise<any> {
  if (typeof API_KEY !== 'string') {
    throw Error(
      `Expected to have apikey of type string, got ${typeof API_KEY}`,
    );
  }

  if (NODE_ENV === 'development') {
    console.log(url); // eslint-disable-line no-console
  }

  if (NODE_ENV === 'test') {
    throw new Error(
      `fetch should never be called in test environment. Have you forgotten to mock "${url}" with fake data response?`,
    );
  }

  try {
    const response = await fetchWithRetries(
      `https://kiwicom-prod.apigee.net${url}`,
      {
        fetchTimeout: 30000,
        retryDelays: [1000, 3000],
        ...prepareOptions(options),
        method,
      },
    );

    if (response.status === 204) {
      // response.json is undefined if there is no body
      return null;
    }
    return response.json();
  } catch (error) {
    throw error;
  }
}
