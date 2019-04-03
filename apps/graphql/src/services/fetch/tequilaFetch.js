// @flow

import fetch, { type Options } from './globalFetch';
import extendHttpHeaders from './helpers/extendHttpHeaders';
import type { HttpMethod } from './httpMethods';

export default function tequilaFetch(
  url: string,
  method: HttpMethod = 'GET',
  options?: Options,
) {
  const { API_KEY, BASE_URL } = process.env;

  if (!BASE_URL) {
    throw new Error('Missing set the BASE_URL environments variable.');
  }

  return fetch(
    `${BASE_URL}${url}`,
    method,
    extendHttpHeaders(options, { apikey: API_KEY }),
  );
}
