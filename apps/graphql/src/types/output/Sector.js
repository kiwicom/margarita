// @flow

import { GraphQLObjectType, GraphQLInt, GraphQLList } from 'graphql';

import { type Sector } from '../../dataloaders/ItinerariesloaderTypes';
import DateType from './DateType';
import Segment from './Segment';
import Location from './Location';
import GraphQLRouteStop from './RouteStop';

export default new GraphQLObjectType({
  name: 'Sector',
  fields: {
    arrivalTime: {
      type: DateType,
      deprecationReason: 'Use arrival.time instead',
    },
    departureTime: {
      type: DateType,
      deprecationReason: 'Use departure.time instead',
    },
    destination: {
      type: Location,
      deprecationReason: 'Use arrival instead',
    },
    duration: {
      type: GraphQLInt,
    },
    origin: {
      type: Location,
      deprecationReason: 'Use departure instead',
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
