// @flow

import { GraphQLObjectType, GraphQLInt, GraphQLList } from 'graphql';

import { type Sector } from '../../dataloaders/ItinerariesloaderTypes';
import DateType from './DateType';
import Segment from './Segment';
import Location from './Location';

export default new GraphQLObjectType({
  name: 'Sector',
  fields: {
    arrivalTime: { type: DateType },
    departureTime: { type: DateType },
    destination: { type: Location },
    duration: { type: GraphQLInt },
    origin: { type: Location },
    segments: { type: new GraphQLList(Segment) },
    stopoverDuration: {
      type: GraphQLInt,
      resolve: ({ stopoverDuration }: Sector): number | null =>
        stopoverDuration,
    },
  },
});
