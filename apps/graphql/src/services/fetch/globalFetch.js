// @flow

import fetchWithRetries from '@kiwicom/fetch';

import Logger from '../logger/Logger';
import type { HttpMethod } from './httpMethods';
import extendHttpHeaders from './helpers/extendHttpHeaders';

const { NODE_ENV } = process.env;

export type Options = {|
  +headers?: Object,
  +body?: string, // usually JSON.stringify
  +fetchTimeout?: number,
|};

export default async function fetch(
  url: string,
  method: HttpMethod = 'GET',
  options?: Options = ({}: Object),
): Promise<any> {
  if (NODE_ENV !== 'production') {
    Logger.info(url);
  }

  if (NODE_ENV === 'test') {
    throw new Error(
      `fetch should never be called in test environment. Have you forgotten to mock "${url}" with fake data response?`,
    );
  }

  try {
    const response = await fetchWithRetries(url, {
      fetchTimeout: 30000,
      retryDelays: [1000, 3000],
      ...extendHttpHeaders(options, { 'Content-Type': 'application/json' }),
      method,
    });
    Logger.info(`response status: ${response.status}`);

    if (response.status === 204) {
      // response.json is undefined if there is no body
      return null;
    }

    return response.json();
  } catch (err) {
    const { response } = err;
    if (response) {
      const apiError = await err.response.json();

      Logger.error(`URL: ${url}
     status: ${err.response.status} - ${err.response.statusText}`);

      Logger.error(apiError);

      throw err;
    }
    Logger.error(err);
    throw err;
  }
}
