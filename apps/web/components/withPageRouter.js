// @flow

import * as React from 'react';
import { withRouter, type Router } from 'next/router';
import 'url-search-params-polyfill';

export const withPageRouter = <T>(
  Component: React.ComponentType<T & { router: Router }>,
): Class<React.Component<T>> => {
  return withRouter<T>(({ router, ...props }) => {
    // split at first `?`
    const searchParams = new URLSearchParams(router.asPath.split(/\?/)[1]);

    const query = {};
    for (const [key, value] of searchParams) {
      query[key] = value;
    }

    // replace the empty query
    router.query = query;

    return <Component {...props} router={router} />;
  });
};
