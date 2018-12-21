// @flow

import Routes from '../config/routes';

export type Route = $Values<typeof Routes>;

export type Navigation = {
  +navigate: (route: Route, params?: {}) => Promise<boolean> | void,
};
