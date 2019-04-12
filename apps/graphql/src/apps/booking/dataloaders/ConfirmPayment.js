// @flow

import stringify from 'json-stable-stringify';
import { OptimisticDataloader } from '@kiwicom/graphql-utils';

import fetch from '../../../services/fetch/tequilaFetch';
import type {
  ConfirmPaymentPayloadType,
  ConfirmPaymentOutputType,
  ConfirmPaymentAPIResponse,
} from '../Booking';

const parseParameters = (input: ConfirmPaymentPayloadType) => {
  return {
    transaction_id: input.transactionId,
    ...(input.bookingToken ? { booking_id: input.bookingToken } : {}),
  };
};

const parseResults = (
  results: $ReadOnlyArray<ConfirmPaymentAPIResponse>,
): $ReadOnlyArray<ConfirmPaymentOutputType> => {
  return results.map(result => ({
    isSuccess: !result.status,
    price: result.price,
  }));
};

const confirmPayment = async (
  parameters: $ReadOnlyArray<ConfirmPaymentPayloadType>,
) => {
  const method = 'POST';
  const results: $ReadOnlyArray<ConfirmPaymentAPIResponse> = await Promise.all(
    parameters.map(input => {
      return fetch('/v2/booking/confirm_payment', method, {
        body: JSON.stringify(parseParameters(input)),
      });
    }),
  );

  return parseResults(results);
};

export default function confirmPaymentLoader() {
  return new OptimisticDataloader(
    (
      keys: $ReadOnlyArray<ConfirmPaymentPayloadType>,
    ): Promise<$ReadOnlyArray<ConfirmPaymentOutputType | Error>> =>
      confirmPayment(keys),
    {
      cacheKeyFn: stringify,
    },
  );
}
