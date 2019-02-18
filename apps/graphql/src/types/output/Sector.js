// @flow

import { GraphQLObjectType, GraphQLInt, GraphQLList } from 'graphql';

import { type Sector } from '../../dataloaders/ItinerariesloaderTypes';
import Segment from './Segment';
import GraphQLRouteStop from './RouteStop';

export default new GraphQLObjectType({
  name: 'Sector',
  fields: {
    duration: {
      type: GraphQLInt,
    },
    segments: {
      type: new GraphQLList(Segment),
    },
    stopoverDuration: {
      type: GraphQLInt,
      resolve: ({ stopoverDuration }: Sector): number | null =>
        stopoverDuration,
    },
    departure: {
      type: GraphQLRouteStop,
    },
    arrival: {
      type: GraphQLRouteStop,
    },
  },
});
