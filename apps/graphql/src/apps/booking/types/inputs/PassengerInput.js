// @flow

import {
  GraphQLInputObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLNonNull,
} from 'graphql';

import PassengerTitle from '../../../manageMyBooking/types/enums/PassengerTitle';
import HoldBags from './HoldBags';

export default new GraphQLInputObjectType({
  name: 'PassengerInput',
  description: 'Passenger information input',
  fields: {
    birthday: {
      type: GraphQLNonNull(GraphQLString),
    },
    cardNumber: {
      type: GraphQLNonNull(GraphQLString),
    },
    email: {
      type: GraphQLNonNull(GraphQLString),
    },
    holdBags: {
      description:
        'Number of baggage for passenger specified in each flight of the trip',
      type: GraphQLNonNull(GraphQLList(HoldBags)),
    },
    expiration: {
      description: 'Expiration date (UTC) of travel document',
      type: GraphQLNonNull(GraphQLString),
    },
    phone: {
      type: GraphQLNonNull(GraphQLString),
    },
    title: {
      type: GraphQLNonNull(PassengerTitle),
    },
    category: {
      type: GraphQLNonNull(GraphQLString),
    },
    firstname: {
      type: GraphQLNonNull(GraphQLString),
    },
    insuranceType: {
      type: GraphQLString,
    },
    lastname: {
      type: GraphQLNonNull(GraphQLString),
    },
    nationality: {
      type: GraphQLNonNull(GraphQLString),
    },
  },
});
