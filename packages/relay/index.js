// @flow strict

import type { RefetchRelayProp } from '@kiwicom/relay';

export {
  graphql,
  createPaginationContainer,
  createRefetchContainer,
  createFragmentContainer,
} from '@kiwicom/relay';

export { default as QueryRenderer } from './src/QueryRenderer';
export type RelayRefetchProp = RefetchRelayProp;
