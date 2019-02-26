// @flow

import { GRAPHQL_URL } from 'react-native-dotenv';
import { createEnvironment, createNetworkFetcher } from '@kiwicom/relay';

export default createEnvironment({
  fetcherFn: createNetworkFetcher(GRAPHQL_URL, { 'X-Client': 'Margarita' }),
});
