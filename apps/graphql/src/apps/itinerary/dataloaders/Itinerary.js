// @flow

import stringify from 'json-stable-stringify';
import qs from 'querystring';
import { OptimisticDataloader } from '@kiwicom/graphql-utils';

import fetch from '../../../services/fetch/tequilaFetch';
import type {
  ItineraryCheckParameters,
  ItineraryApiResponseType,
  Itinerary,
} from '../Itinerary';

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
  const results: $ReadOnlyArray<ItineraryApiResponseType> = await Promise.all(
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

const sanitizeItinerary = (response: ItineraryApiResponseType): Itinerary => {
  /**
   * @TODO - map remaining (null) data
   * @TODO - `price.currency` - Tequila API currently always returns total price
   * in EUR, should be unified with search results where currency can be variable
   */
  return {
    id: mapItineraryId(response.flights),
    type: null,
    bookingToken: response.booking_token,
    isValid: !response.flights_invalid,
    isChecked: response.flights_checked,
    departure: null,
    arrival: null,
    sectors: null,
    price: {
      currency: 'EUR',
      amount: response.total,
    },
  };
};

const mapItineraryId = segments => {
  return segments ? segments.map(segment => segment.id).join('|') : '';
};

export default function ItineraryLoader() {
  return new OptimisticDataloader(
    async (
      keys: $ReadOnlyArray<ItineraryCheckParameters>,
    ): Promise<Array<Itinerary | Error>> => fetchItinerary(keys),
    {
      cacheKeyFn: stringify,
    },
  );
}
