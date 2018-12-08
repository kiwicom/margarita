// @flow

import '@babel/polyfill';

import { ApolloServer } from 'apollo-server';
import { GraphQLSchema, GraphQLObjectType, GraphQLString } from 'graphql';
import GlobalID from '@kiwicom/graphql-global-id';

import fetch from './src/services/Fetch';

// The GraphQL schema
export const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      searchItineraries: Itineraries,
      id: GlobalID(() => 'TODO: implement me'),

      hello: {
        type: GraphQLString,
        description: 'A simple type for getting started!',
        resolve: async () => {
          const test = await fetch('/locations/query?term=oslo');

          return `Welcome to Tequila client demo! Test location query = ${
            test.locations[0].id
          }`;
        },
      },
    },
  }),
});

const server = new ApolloServer({ schema });

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`); // eslint-disable-line no-console
});
