// @flow

import stringify from 'json-stable-stringify';
import qs from 'querystring';
import * as DateFNS from 'date-fns';
import { OptimisticDataloader } from '@kiwicom/graphql-utils';
import { UK_DATE_FORMAT } from '@kiwicom/margarita-config';

import fetch from '../../../services/fetch/tequilaFetch';
import {
  getItineraryType,
  getItineraryDeparture,
  getItineraryArrival,
  getHoldBagOptions,
  sanitizeHoldBagProps,
  mapSectors,
  unmaskID,
} from '../helpers/Itineraries';
import type {
  ItinerariesReturnSearchParameters,
  ItinerariesOneWaySearchParameters,
  ItinerariesApiResponse,
  Itinerary,
} from '../Itinerary';

const stripTimeZoneOffset = (date: Date) =>
  DateFNS.addMinutes(date, date.getTimezoneOffset());

const parseDate = (date: Date) =>
  DateFNS.format(stripTimeZoneOffset(date), UK_DATE_FORMAT);

export const parseParameters = (
  input: ItinerariesReturnSearchParameters | ItinerariesOneWaySearchParameters,
) => {
  const { origin, destination, outboundDate } = input.itinerary;
  const inboundDate = input.itinerary.inboundDate
    ? input.itinerary.inboundDate
    : null;
  const nightsInDestination = input.itinerary.nightsInDestination
    ? input.itinerary.nightsInDestination
    : null;

  const flyFrom = unmaskID(origin.ids).join();
  const flyTo =
    destination && destination.ids ? unmaskID(destination.ids).join() : null;

  const commonSearchParams = {
    fly_from: flyFrom,
    ...(input.order && { asc: input.order === 'ASC' ? 1 : 0 }),
    ...(input.sort && { sort: input.sort }),
    ...(input.limit ? { limit: input.limit } : {}),
    date_from: parseDate(outboundDate.start),
    date_to: outboundDate.end ? parseDate(outboundDate.end) : null,
    fly_to: flyTo,
    ...(input.passengers && {
      adults: input.passengers.adults ?? 1,
      children: input.passengers.children ?? 0,
      infants: input.passengers.infants ?? 0,
    }),
    curr: 'EUR',
  };

  return {
    ...commonSearchParams,
    ...addReturnSearchQueryParams(inboundDate, nightsInDestination),
  };
};

const addReturnSearchQueryParams = (inboundDate, nightsInDestination) => ({
  ...(!inboundDate && nightsInDestination
    ? {
        nights_in_dst_from: nightsInDestination.from,
        nights_in_dst_to: nightsInDestination.to,
      }
    : inboundDate && {
        return_from: parseDate(inboundDate.start),
        ...(inboundDate.end && {
          return_to: parseDate(inboundDate.end),
        }),
      }),
});

const fetchItineraries = async (
  parameters: $ReadOnlyArray<ItinerariesReturnSearchParameters>,
) => {
  const results: $ReadOnlyArray<ItinerariesApiResponse> = await Promise.all(
    parameters.map(params => {
      return fetch(`/v2/search?${qs.stringify(parseParameters(params))}`);
    }),
  );
  return results.map(res => {
    return sanitizeItineraries(res);
  });
};

const sanitizeItineraries = (response: ItinerariesApiResponse): Itinerary[] => {
  const itineraries = response.data;
  return itineraries.map(itinerary => {
    const currency = response.currency;
    const type = getItineraryType(itinerary.routes);
    const sectors = mapSectors(itinerary.route, itinerary.routes);
    const departure = getItineraryDeparture(sectors);
    const arrival = getItineraryArrival(type, sectors);
    const holdBagProps = sanitizeHoldBagProps(itinerary.baglimit);
    const holdBagOptions = getHoldBagOptions(
      itinerary.bags_price,
      currency,
      holdBagProps,
    );

    return {
      id: itinerary.id,
      type,
      bookingToken: itinerary.booking_token,
      isValid: false,
      isChecked: false,
      departure,
      arrival,
      sectors,
      holdBagOptions,
      price: {
        currency,
        amount: itinerary.price,
      },
    };
  });
};

export function createItinerariesLoader() {
  return new OptimisticDataloader(
    (
      keys: $ReadOnlyArray<ItinerariesReturnSearchParameters>,
    ): Promise<Array<Itinerary[] | Error>> => fetchItineraries(keys),
    {
      cacheKeyFn: stringify,
    },
  );
}
