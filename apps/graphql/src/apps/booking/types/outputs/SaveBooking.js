// @flow

import { GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql';

import Passenger from '../../../manageMyBooking/types/outputs/Passenger';
import ItineraryInterface from '../../../itinerary/types/outputs/ItineraryInterface';

const SaveBookingOutput = new GraphQLObjectType({
  name: 'SaveBookingOutput',
  fields: {
    transactionId: {
      description:
        'The unique ID of the transaction which then can be used to identify the booking in subsequent calls e.g confirm payment',
      type: GraphQLString,
    },
    itinerary: {
      type: ItineraryInterface,
    },
    passengers: {
      type: GraphQLList(Passenger),
    },
  },
});

export default SaveBookingOutput;
