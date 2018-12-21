// @flow

import * as React from 'react';
import Router from 'next/router';

import type { Navigation, Route } from './types';

const navigate = (url: Route, params?: Object) =>
  Router.push({ pathname: `/${url}`, query: params });

type Props = {};
type EnhancedProps = { +navigation: Navigation };

export const withNavigation = (
  Component: React.ComponentType<EnhancedProps>,
): React.ComponentType<Props> =>
  class extends React.Component<Props> {
    render() {
      return <Component {...this.props} navigation={{ navigate }} />;
    }
  };
