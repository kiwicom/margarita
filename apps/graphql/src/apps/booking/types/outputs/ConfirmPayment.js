// @flow

import { GraphQLObjectType, GraphQLBoolean, GraphQLFloat } from 'graphql';

const ConfirmPaymentOutput = new GraphQLObjectType({
  name: 'ConfirmPaymentOutput',
  fields: {
    isSuccess: {
      description: 'Indicates whether the payment was successful',
      type: GraphQLBoolean,
    },
    price: {
      description: 'The average price of the booking per passenger',
      type: GraphQLFloat,
    },
  },
});

export default ConfirmPaymentOutput;
