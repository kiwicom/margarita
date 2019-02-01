// @flow

import { ApolloServer } from 'apollo-server-lambda';
import type { APIGatewayEvent, Context, ProxyCallback } from 'flow-aws-lambda';

import createContext from '../src/services/GraphQLContext';
import schema from '../src/Schema';

const server = (
  event: APIGatewayEvent,
  context: Context,
  callback: ProxyCallback,
) =>
  new ApolloServer({
    schema,
    context: {
      headers: event.headers,
      functionName: context.functionName,
      event,
      context,
      // Please note: this context must be created for every single request.
      // This is important because of these reasons:
      //   - tokens and user identities are per request
      //   - dataloaders use Map internally (not LRU) and they would otherwise
      //     grow indefinitely because the Map content is not garbage collected
      ...createContext(),
    },
    playground: {
      endpoint: '/staging/graphql',
    },
    introspection: true,
  });

exports.handler = (
  event: APIGatewayEvent,
  context: Context,
  callback: ProxyCallback,
) => {
  return server(event, context, callback).createHandler({
    cors: {
      origin: '*',
      allowedHeaders: ['Content-Type', 'Origin', 'Accept'],
    },
  })(event, context, callback);
};
