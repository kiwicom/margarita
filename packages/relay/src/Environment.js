// @flow

import { GRAPHQL_URL } from 'react-native-dotenv';
import { createEnvironment, createNetworkFetcher } from '@mrtnzlml/relay';

export default createEnvironment({
  fetcherFn: createNetworkFetcher(GRAPHQL_URL),
});
