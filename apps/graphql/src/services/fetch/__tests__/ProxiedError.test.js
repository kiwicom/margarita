// @flow

import { formatError } from 'graphql';

import ProxiedError from '../ProxiedError';

let error;

beforeEach(() => {
  error = new ProxiedError('custom message', '123', 'http://a.b', {
    error: 'body message',
  });
});

describe('ProxiedError', () => {
  test('is throwable', () => {
    expect(() => {
      throw error;
    }).toThrow('custom message');
    expect(error instanceof ProxiedError).toBe(true);
  });

  test('returns proxy info', () => {
    expect(error.getProxyInfo()).toMatchInlineSnapshot(`
Object {
  "errorBody": Object {
    "error": "body message",
  },
  "statusCode": "123",
  "url": "http://a.b",
}
`);
  });

  test('is compatible with graphql formatError function', () => {
    expect(formatError(error)).toMatchInlineSnapshot(`
Object {
  "extensions": Object {
    "proxy": Object {
      "errorBody": Object {
        "error": "body message",
      },
      "statusCode": "123",
      "url": "http://a.b",
    },
  },
  "locations": undefined,
  "message": "custom message",
  "path": undefined,
}
`);
  });
});
