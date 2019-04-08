// @flow

import {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLList,
  GraphQLString,
  GraphQLInt,
} from 'graphql';

import PassengerInput from './PassengerInput';

const SaveBookingPayload = new GraphQLInputObjectType({
  name: 'SaveBookingPayload',
  fields: {
    bookingToken: {
      description: 'Token received in Search Results',
      type: GraphQLNonNull(GraphQLString),
    },
    bags: {
      description: 'Number of checked bags for the booking',
      type: GraphQLNonNull(GraphQLInt),
    },
    paymentGateway: {
      description:
        'Specifies the payment gateway to use for the booking. If using Zooz, set to payu',
      type: GraphQLString,
    },
    passengers: {
      description:
        'Information about the passengers traveling such as name, nationality, etc',
      type: GraphQLNonNull(GraphQLList(PassengerInput)),
    },
  },
});
export default SaveBookingPayload;
