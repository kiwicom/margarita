// @flow

import Router from 'next/router';

import type { Navigation } from './types';

const navigate = (url: string, params?: Object) =>
  Router.push({ pathname: `/${url}`, query: params });

export const navigation: Navigation = { navigate };
