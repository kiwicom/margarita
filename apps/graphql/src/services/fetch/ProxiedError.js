// @flow

type ProxiedErrorValues = {|
  +statusCode: string,
  +url: string,
  +errorBody: mixed,
|};

export default class ProxiedError extends Error {
  extensions: {|
    +proxy: ProxiedErrorValues,
  |};

  constructor(
    message: string,
    originStatusCode: string,
    originUrl: string,
    errorBody: any,
  ) {
    super(message);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ProxiedError);
    }

    this.extensions = {
      proxy: {
        statusCode: String(originStatusCode),
        url: originUrl,
        errorBody,
      },
    };
  }

  getProxyInfo() {
    return this.extensions.proxy;
  }
}
