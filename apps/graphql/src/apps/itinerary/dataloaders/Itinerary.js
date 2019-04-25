// @flow

import stringify from 'json-stable-stringify';
import qs from 'querystring';
import { OptimisticDataloader } from '@kiwicom/graphql-utils';

import fetch from '../../../services/fetch/tequilaFetch';
import type {
  Itinerary,
  ItineraryCheckParameters,
  ItineraryApiResponse,
} from '../Itinerary';
import {
  getItineraryDeparture,
  getItineraryArrival,
  getHoldBagOptions,
} from '../helpers/Itineraries';
import {
  sanitizeSectors,
  getItineraryId,
  getItineraryType,
  sanitizeHoldBagProps,
} from '../helpers/Itinerary';

export const parseParameters = (input: ItineraryCheckParameters) => {
  const passengersTotal =
    (input.passengers.adults ?? 0) +
    (input.passengers.children ?? 0) +
    (input.passengers.infants ?? 0);

  const params = {
    booking_token: input.bookingToken,
    bnum: input.bags,
    pnum: passengersTotal,
  };
  return params;
};

const fetchItinerary = async (
  parameters: $ReadOnlyArray<ItineraryCheckParameters>,
) => {
  const results: $ReadOnlyArray<ItineraryApiResponse> = await Promise.all(
    parameters.map(params => {
      return fetch(
        `/v2/booking/check_flights?${qs.stringify(parseParameters(params))}`,
      );
    }),
  );
  return results.map(res => {
    return sanitizeItinerary(res);
  });
};

const sanitizeItinerary = (response: ItineraryApiResponse): Itinerary => {
  /**
   * @TODO - `price.currency` - Tequila API currently always returns total price
   * in EUR, should be unified with search results where currency can be variable
   */
  const currency = response.currency;
  const sectors = sanitizeSectors(response.flights);
  const type = getItineraryType(sectors);
  const departure = getItineraryDeparture(sectors);
  const arrival = getItineraryArrival(type, sectors);
  const holdBagProps = sanitizeHoldBagProps(response.luggage);
  const holdBagOptions = getHoldBagOptions(
    response.bags_price,
    currency,
    holdBagProps,
  );

  return {
    id: getItineraryId(response.flights),
    type,
    bookingToken: response.booking_token,
    isValid: !response.flights_invalid,
    isChecked: response.flights_checked,
    departure,
    arrival,
    sectors,
    holdBagOptions,
    price: {
      currency,
      amount: response.total,
    },
  };
};

export default function ItineraryLoader() {
  return new OptimisticDataloader(
    (
      keys: $ReadOnlyArray<ItineraryCheckParameters>,
    ): Promise<Array<Itinerary | Error>> => fetchItinerary(keys),
    {
      cacheKeyFn: stringify,
    },
  );
}
