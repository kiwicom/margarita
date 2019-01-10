// @flow

import { GraphQLSchema, GraphQLObjectType } from 'graphql';

import Itineraries from './queries/Itineraries';
import Locations from './queries/Locations';

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
      searchItineraries: Itineraries,
      locationsByTerm: Locations,
    },
  }),
});

export default schema;
