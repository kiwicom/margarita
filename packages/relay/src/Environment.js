// @flow

import { GRAPHQL_URL, API_KEY } from 'react-native-dotenv';
import { createEnvironment, createNetworkFetcher } from '@mrtnzlml/relay';

export default createEnvironment({
  fetcherFn: createNetworkFetcher(GRAPHQL_URL, {
    apikey: API_KEY,
  }),
});
