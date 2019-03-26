// @flow

import '@babel/polyfill';

import { ApolloServer } from 'apollo-server';
import requestIp from 'request-ip';

import createContext from './services/graphqlContext/GraphQLContext';
import schema from './Schema';
import Logger from './services/logger/Logger';

const server = new ApolloServer({
  schema,
  context: ({ req }) => {
    // Please note: this context must be created for every single request.
    // This is important because of these reasons:
    //   - tokens and user identities are per request
    //   - dataloaders use Map internally (not LRU) and they would otherwise
    //     grow indefinitely because the Map content is not garbage collected
    return {
      clientIP: requestIp.getClientIp(req),
      ...createContext(),
    };
  },
});

server.listen().then(({ url }) => {
  Logger.info(`🚀 Server ready at ${url}`);
});
