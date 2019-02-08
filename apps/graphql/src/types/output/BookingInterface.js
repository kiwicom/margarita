// @flow

import {
  GraphQLInterfaceType,
  GraphQLString,
  GraphQLEnumType,
  GraphQLInt,
} from 'graphql';
import globalID from '@kiwicom/graphql-global-id';

import GraphQLRouteStop from './RouteStop';
import type { Booking } from '../../dataloaders/bookingsLoader/BookingFlowTypes';
import GraphQLBookingType from './BookingType';

export const commonFields = {
  id: globalID(({ bid }) => bid),
  status: {
    type: GraphQLString,
  },
  arrival: {
    type: GraphQLRouteStop,
  },
  departure: {
    type: GraphQLRouteStop,
  },
  destinationImageUrl: {
    type: GraphQLString,
    args: {
      dimensions: {
        type: new GraphQLEnumType({
          name: 'BookingDestinationImageDimensions',
          values: {
            _1200x628: { value: '1200x628' },
            _1280x720: { value: '1280x720' },
            _220x165: { value: '220x165' },
            _275x250: { value: '275x250' },
            _300x165: { value: '300x165' },
            _375x165: { value: '375x165' },
            _600x330: { value: '600x330' },
            _600x600: { value: '600x600' },
            _610x251: { value: '610x251' },
          },
        }),
        defaultValue: '600x600',
      },
    },
    resolve: ({ arrival }: Booking, args: {| +dimensions: string |}) => {
      const cityId = arrival?.cityId ?? '';
      return `https://images.kiwi.com/photos/${args.dimensions}/${cityId}.jpg`;
    },
  },
  passengerCount: {
    type: GraphQLInt,
  },
  type: {
    type: GraphQLBookingType,
    description: 'OneWay, Multicity or Return',
  },
};
export default new GraphQLInterfaceType({
  name: 'BookingInterface',
  fields: commonFields,
});
