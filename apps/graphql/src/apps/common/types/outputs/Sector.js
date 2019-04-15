// @flow

import { GraphQLObjectType, GraphQLInt, GraphQLList } from 'graphql';

import type { Sector } from '../../CommonTypes';
import GraphQLBookingType from '../../../manageMyBooking/types/enums/BookingType';
import GraphQLSegment from './Segment';
import GraphQLRouteStop from './RouteStop';
import FromToInterface from './FromToInterface';

export default new GraphQLObjectType({
  name: 'Sector',
  interfaces: [FromToInterface],
  fields: {
    duration: {
      type: GraphQLInt,
    },
    segments: {
      type: new GraphQLList(GraphQLSegment),
    },
    stopoverDuration: {
      type: GraphQLInt,
      resolve: ({ stopoverDuration }: Sector): ?number => stopoverDuration,
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
