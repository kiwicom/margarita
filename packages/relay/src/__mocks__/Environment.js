// @flow

import { createEnvironment, createNetworkFetcher } from '@kiwicom/relay';

export default createEnvironment({
  fetcherFn: createNetworkFetcher(''),
});
