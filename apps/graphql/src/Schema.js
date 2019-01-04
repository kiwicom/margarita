// @flow

import { GraphQLSchema, GraphQLObjectType, GraphQLString } from 'graphql';
import GlobalID from '@kiwicom/graphql-global-id';

import Itineraries from './queries/Itineraries';
import Locations from './queries/Locations';

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
      id: GlobalID(() => 'TODO: implement me'),
      searchItineraries: Itineraries,
      locationsByTerm: Locations,

      hello: {
        type: GraphQLString,
        description: 'A simple type for getting started!',
        resolve: async (_: mixed, __: mixed, { dataLoader }: Object) => {
          const test = await dataLoader.locations.load({ term: 'OSL' });

          return `Welcome to Tequila client demo! Test location query = ${
            test.locations[0].id
          }`;
        },
      },
    },
  }),
});

export default schema;
