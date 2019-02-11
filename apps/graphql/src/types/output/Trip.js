// @flow

import { GraphQLObjectType, GraphQLInt } from 'graphql';

import GraphQLRouteStop from './RouteStop';
import { differenceInMinutes } from '../../dataloaders/itinerariesHelpers';
import type { Booking } from '../../dataloaders/bookingsLoader/BookingFlowTypes';

export default new GraphQLObjectType({
  name: 'Trip',
  description:
    'Single travel from origin to destination, with possible stopovers.',
  fields: {
    departure: {
      type: GraphQLRouteStop,
      resolve: ({ departure }: Booking) => departure,
    },

    arrival: {
      type: GraphQLRouteStop,
      resolve: ({ arrival }: Booking) => arrival,
    },

    duration: {
      type: GraphQLInt,
      resolve: ({ departure, arrival }: Booking) => {
        const departureRawTime = departure?.time.utc ?? 0;
        const arrivalRawTime = arrival?.time.utc ?? 0;
        const departureTimeMs = departureRawTime * 1000;
        const arrivalTimeMs = arrivalRawTime * 1000;

        return differenceInMinutes(departureTimeMs, arrivalTimeMs);
      },
    },
  },
});
