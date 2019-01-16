// @flow

import { ApolloServer } from 'apollo-server-lambda';

import createContext from '../src/services/GraphQLContext';
import schema from '../src/Schema';

const server = new ApolloServer({
  schema,
  context: () => {
    // Please note: this context must be created for every single request.
    // This is important because of these reasons:
    //   - tokens and user identities are per request
    //   - dataloaders use Map internally (not LRU) and they would otherwise
    //     grow indefinitely because the Map content is not garbage collected
    return createContext();
  },
  playground: true,
  introspection: true,
});

exports.handler = server.createHandler();
