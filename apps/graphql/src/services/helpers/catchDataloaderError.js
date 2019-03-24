// @flow strict

import { TimeoutError, ResponseError } from '@kiwicom/fetch';

import Logger from '../logger/Logger';
import { HttpErrorObject } from './HttpErrorObject';

export default async function catchDataloaderError<T>(cb: () => Promise<T>) {
  try {
    return await cb();
  } catch (err) {
    if (err instanceof TimeoutError) {
      return new HttpErrorObject(504, `Service Timeout`);
    }

    if (err instanceof ResponseError) {
      return new HttpErrorObject(err.response.status, err.response.statusText);
    }
    // @TODO log error to sentry with the hash value
    Logger.error(err.message);
    throw new Error('Unhandled exception');
  }
}
