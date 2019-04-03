// @flow

import { createEnvironment, createNetworkFetcher } from '@kiwicom/relay';

export default createEnvironment({
  fetchFn: createNetworkFetcher('', { 'X-Client': 'mock' }),
});
