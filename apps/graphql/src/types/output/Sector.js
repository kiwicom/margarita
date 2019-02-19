// @flow

import { GraphQLObjectType, GraphQLInt, GraphQLList } from 'graphql';

import { type Sector } from '../../dataloaders/ItinerariesloaderTypes';
import Segment from './Segment';
import GraphQLRouteStop from './RouteStop';
import FromToInterface from './FromToInterface';
import GraphQLBookingType from './BookingType';

export default new GraphQLObjectType({
  name: 'Sector',
  interfaces: [FromToInterface],
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
    type: {
      type: GraphQLBookingType,
    },
  },
});
