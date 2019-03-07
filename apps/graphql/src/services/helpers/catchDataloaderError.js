// @flow strict

import { TimeoutError, ResponseError } from '@kiwicom/fetch';

import { TimeoutErrorObject, ResponseErrorObject } from './ErrorsObjects';

export default async function catchDataloaderError<T>(cb: () => Promise<T>) {
  try {
    return await cb();
  } catch (err) {
    if (err instanceof TimeoutError) {
      return new TimeoutErrorObject(
        err.response.status,
        err.response.statusText,
      );
    }

    if (err instanceof ResponseError) {
      return new ResponseErrorObject(
        err.response.status,
        err.response.statusText,
      );
    }
    // something else
    throw err;
  }
}
