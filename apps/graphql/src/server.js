// @flow

import express from 'express';
import serverless from 'serverless-http';
import compression from 'compression';
import { ApolloServer } from 'apollo-server-express';
import requestIp from 'request-ip';
import cors from 'cors';
import morgan from 'morgan';

import createContext from './services/graphqlContext/GraphQLContext';
import schema from './Schema';

const isDevelopment = process.env.NODE_ENV === 'development';

const playgroundEndpoint = isDevelopment ? '/graphql' : '/staging/graphql';

const server = new ApolloServer({
  schema,
  context: ({ req }) => {
    // Please note: this context must be created for every single request.
    // This is important because of these reasons:
    //   - tokens and user identities are per request
    //   - dataloaders use Map internally (not LRU) and they would otherwise
    //     grow indefinitely because the Map content is not garbage collected
    const acceptLanguageHeaders: string = req.headers['accept-language'];

    return {
      clientIP: requestIp.getClientIp(req),
      ...createContext({ acceptLanguageHeaders }),
    };
  },
  playground: {
    endpoint: playgroundEndpoint,
    settings: {
      'editor.theme': 'light',
    },
  },
  introspection: true,
});

const app = express();
app.use(compression({ threshold: 0 }));
app.use(cors());

if (isDevelopment) {
  app.use(morgan('dev'));
}

server.applyMiddleware({ app });

const handler = serverless(app);
export { handler };
