// @flow

import {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
} from 'graphql';

import PassengersInput from './common/PassengersInput';

export default new GraphQLInputObjectType({
  name: 'ItineraryCheckInput',
  fields: {
    bookingToken: {
      type: GraphQLNonNull(GraphQLString),
      description: 'Token received in search results',
    },
    bags: {
      type: GraphQLNonNull(GraphQLInt),
      description: 'Number of checked bags for the booking',
    },
    passengers: {
      type: GraphQLNonNull(PassengersInput),
      description: 'Number of children, adults and infants travelling',
    },
  },
});
