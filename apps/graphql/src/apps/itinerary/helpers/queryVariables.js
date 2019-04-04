// @flow

import { type ConnectionArguments } from 'graphql-relay';

export type Args<T> = {|
  +input: T,
  ...$Exact<ConnectionArguments>,
|};
