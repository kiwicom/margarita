// @flow

import '@babel/polyfill';

import { ApolloServer } from 'apollo-server';

import createContext from './src/services/GraphQLContext';
import schema from './src/Schema';

const server = new ApolloServer({ schema, context: createContext() });

export { schema, server };
