// @flow

import { GraphQLSchema, GraphQLObjectType, GraphQLString } from 'graphql';
import GlobalID from '@kiwicom/graphql-global-id';

import Itineraries from './queries/Itineraries';
import fetch from './services/Fetch';

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
      id: GlobalID(() => 'TODO: implement me'),
      searchItineraries: Itineraries,
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

export default schema;
