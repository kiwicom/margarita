// @flow

import type { GraphqlContextType } from '../../../services/graphqlContext/GraphQLContext';
import ConfirmPaymentPayload from '../types/inputs/ConfirmPaymentPayload';
import ConfirmPaymentOutput from '../types/outputs/ConfirmPayment';
import type { ConfirmPaymentPayloadType } from '../Booking';

type Args = {|
  +payload: ConfirmPaymentPayloadType,
|};

const ConfirmPayment = {
  name: 'ConfirmPayment',
  description: 'Confirms the payment for a given booking. (POST Request)',
  args: {
    payload: {
      type: ConfirmPaymentPayload,
    },
  },
  type: ConfirmPaymentOutput,
  resolve: async (_: mixed, args: Args, { dataLoader }: GraphqlContextType) => {
    const bookingConfirmation = await dataLoader.confirmPayment.load(
      args.payload,
    );
    return bookingConfirmation;
  },
};

export default ConfirmPayment;
