// @flow

import '@babel/polyfill';

import { ApolloServer } from 'apollo-server';

import createContext from './src/services/GraphQLContext';
import schema from './src/Schema';

const server = new ApolloServer({
  schema,
  context: ({ req }) => {
    // Please note: this context must be created for every single request.
    // This is important because of these reasons:
    //   - tokens and user identities are per request
    //   - dataloaders use Map internally (not LRU) and they would otherwise
    //     grow indefinitely because the Map content is not garbage collected
    const apikey = req.headers.apikey;
    return createContext(apikey);
  },
});

server.listen().then(({ url, context }) => {
  console.log(`🚀 Server ready at ${url}`); // eslint-disable-line no-console
});
