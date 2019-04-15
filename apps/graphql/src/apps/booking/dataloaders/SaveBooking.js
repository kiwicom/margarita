// @flow

import stringify from 'json-stable-stringify';
import { OptimisticDataloader } from '@kiwicom/graphql-utils';

import fetch from '../../../services/fetch/tequilaFetch';
import type {
  SaveBookingPayloadType,
  SaveBookingOutputType,
  HoldBags,
} from '../Booking';
import type { Passenger } from '../../manageMyBooking/manageMyBooking';

type ParsedPassenger = {|
  +birthday: string,
  +category: string,
  +expiration?: string,
  +nationality: string,
  +email?: string,
  +phone?: string,
  +title: string,
  +cardno?: string,
  +name: string,
  +surname: string,
  +hold_bags?: any,
|};

export const parseParameters = (input: SaveBookingPayloadType) => {
  return {
    booking_token: input.bookingToken,
    bags: input.bags,
    lang: input.language,
    locale: input.locale,
    passengers: parsePassengers(input.passengers),
    ...(input.paymentGateway ? { payment_gateway: input.paymentGateway } : {}),
  };
};

export const parsePassengers = (
  passengers: $ReadOnlyArray<Passenger>,
): $ReadOnlyArray<ParsedPassenger> => {
  return passengers.map(passenger => ({
    birthday: passenger.birthday,
    category: passenger.category,
    expiration: passenger.expiration,
    nationality: passenger.nationality,
    email: passenger.email,
    phone: passenger.phone,
    title: passenger.title,
    cardno: passenger.cardNumber,
    name: passenger.firstname,
    surname: passenger.lastname,
    hold_bags: parseHoldBags(passenger.holdBags),
  }));
};

export const parseHoldBags = (bags: ?$ReadOnlyArray<HoldBags>) => {
  return bags
    ? bags.reduce(
        (bags, currBag) => ({
          ...bags,
          [currBag.flightID]: {
            '1': currBag.first,
            '2': currBag.second,
            '3': currBag.third,
          },
        }),
        {},
      )
    : {};
};

const saveBooking = async (
  parameters: $ReadOnlyArray<SaveBookingPayloadType>,
) => {
  const method = 'POST';
  const results: $ReadOnlyArray<
    SaveBookingOutputType | Error,
  > = await Promise.all(
    parameters.map(input => {
      return fetch('/v2/booking/save_booking', method, {
        body: JSON.stringify(parseParameters(input)),
      });
    }),
  );
  return results;
};

export default function saveBookingLoader() {
  return new OptimisticDataloader(
    (
      keys: $ReadOnlyArray<SaveBookingPayloadType>,
    ): Promise<$ReadOnlyArray<SaveBookingOutputType | Error>> =>
      saveBooking(keys),
    {
      cacheKeyFn: stringify,
    },
  );
}
