// @flow

import type { Options } from '../globalFetch';

export default function extendHttpHeaders(
  options: Object,
  headers: Object,
): Options {
  return {
    ...options,
    headers: {
      ...(options?.headers ?? {}),
      ...headers,
    },
  };
}
