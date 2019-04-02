// @flow

import { GRAPHQL_URL } from 'react-native-dotenv';
import { createEnvironment, createNetworkFetcher } from '@kiwicom/relay';

export default createEnvironment({
  fetchFn: createNetworkFetcher(GRAPHQL_URL, { 'X-Client': 'Margarita' }),
});
