// @flow

import { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from 'graphql';

const ConfirmPaymentPayload = new GraphQLInputObjectType({
  name: 'ConfirmPaymentPayload',
  fields: {
    bookingToken: {
      description: 'Token received in Search Results',
      type: GraphQLString,
    },
    transactionId: {
      description:
        'Token received from save_booking that identifies the booking process',
      type: GraphQLNonNull(GraphQLString),
    },
  },
});
export default ConfirmPaymentPayload;
