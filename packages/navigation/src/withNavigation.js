// @flow

import * as React from 'react';
import Router from 'next/router';

import type { Navigation, Route } from './types';

const navigate = (url: Route, params?: Object) =>
  Router.push({ pathname: `/${url}`, query: params });

type Props = {
  navigation: Navigation | void,
};

export const withNavigation = <PassedProps: {}>(
  WrappedComponent: React.ComponentType<PassedProps>,
): React.StatelessFunctionalComponent<$Diff<PassedProps, Props>> => {
  return (props: PassedProps) => (
    <WrappedComponent {...props} navigation={{ navigate }} />
  );
};
