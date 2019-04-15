// @flow

import {
  GraphQLInterfaceType,
  GraphQLString,
  GraphQLEnumType,
  GraphQLInt,
  GraphQLList,
} from 'graphql';
import globalID from '@kiwicom/graphql-global-id';

import GraphQLRouteStop from '../../../common/types/outputs/RouteStop';
import type { Booking, Bag } from '../../manageMyBooking';
import GraphQLBookingType from '../enums/BookingType';
import GraphQLContactDetails from './ContactDetails';
import GraphQLPassenger from './Passenger';
import GraphQLBag from './Bag';

export const commonFields = {
  id: globalID(({ bid }) => bid),
  status: {
    type: GraphQLString,
  },
  contactDetails: {
    type: GraphQLContactDetails,
    resolve: ({ contact }: Booking) => contact,
  },
  passengers: {
    type: new GraphQLList(GraphQLPassenger),
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
    deprecationReason: 'Use __typename instead',
  },
  bagInfo: {
    type: GraphQLList(GraphQLBag),
    description: 'Total count of bags by the type',
    resolve: ({ passengers }: Booking): $ReadOnlyArray<Bag> => {
      const CABIN_BAG = 'Cabin bag';
      const PERSONAL_ITEM = 'Personal item';
      const CHECKED_BAGGAGE = 'Checked baggage';

      const cabinBag = {
        type: CABIN_BAG,
        dimensions: '',
        quantity: 0,
      };
      const personalItem = {
        type: PERSONAL_ITEM,
        dimensions: '',
        quantity: 0,
      };
      const checkedBaggage = {
        type: CHECKED_BAGGAGE,
        dimensions: '',
        quantity: 0,
      };
      passengers.forEach(passenger => {
        if (passenger.bags) {
          passenger.bags.forEach(bag => {
            switch (bag.type) {
              case CABIN_BAG:
                cabinBag.quantity += bag.quantity;
                cabinBag.dimensions = bag.dimensions;
                break;
              case PERSONAL_ITEM:
                personalItem.quantity += bag.quantity;
                personalItem.dimensions = bag.dimensions;
                break;
              case CHECKED_BAGGAGE:
                checkedBaggage.quantity += bag.quantity;
                checkedBaggage.dimensions = bag.dimensions;
                break;
              default:
                break;
            }
          });
        }
      });
      return [personalItem, cabinBag, checkedBaggage];
    },
  },
};

export default new GraphQLInterfaceType({
  name: 'BookingInterface',
  fields: commonFields,
});
