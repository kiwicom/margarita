// @flow

import stringify from 'json-stable-stringify';
import qs from 'querystring';
import * as DateFNS from 'date-fns';
import { OptimisticDataloader } from '@kiwicom/graphql-utils';
import { UK_DATE_FORMAT } from '@kiwicom/margarita-config';

import fetch from '../../../services/fetch/tequilaFetch';
import {
  mapLocation,
  mapDate,
  getItineraryType,
  mapSectors,
} from '../helpers/Itineraries';
import type {
  ItinerariesReturnSearchParameters,
  ItinerariesOneWaySearchParameters,
  ApiResponseType,
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

  const flyFrom = origin.ids.join();
  const flyTo = destination && destination.ids ? destination.ids.join() : null;

  const commonSearchParams = {
    fly_from: flyFrom,
    ...(input.order && { asc: input.order === 'ASC' ? 1 : 0 }),
    ...(input.sort && { sort: input.sort }),
    date_from: parseDate(outboundDate.start),
    date_to: outboundDate.end ? parseDate(outboundDate.end) : null,
    fly_to: flyTo,
    ...(input.passengers && {
      adults: input.passengers.adults ?? 0,
      children: input.passengers.children ?? 0,
      infants: input.passengers.infants ?? 0,
    }),
    curr: 'EUR',
  };

  return {
    ...commonSearchParams,
    ...addReturnSearchQueryParams(inboundDate),
  };
};

const addReturnSearchQueryParams = inboundDate => {
  return {
    ...(inboundDate && {
      return_from: parseDate(inboundDate.start),
      ...(inboundDate.end && {
        return_to: parseDate(inboundDate.end),
      }),
    }),
  };
};

const fetchItineraries = async (
  parameters: $ReadOnlyArray<ItinerariesReturnSearchParameters>,
) => {
  const results: $ReadOnlyArray<ApiResponseType> = await Promise.all(
    parameters.map(params => {
      return fetch(`/v2/search?${qs.stringify(parseParameters(params))}`);
    }),
  );
  return results.map(res => {
    return sanitizeItineraries(res);
  });
};

const sanitizeItineraries = (response: ApiResponseType): Itinerary[] => {
  const itineraries = response.data;

  return itineraries.map(itinerary => {
    return {
      id: itinerary.id,
      type: getItineraryType(itinerary.routes),
      bookingToken: itinerary.booking_token,
      isValid: false,
      isChecked: false,
      startTime: mapDate(itinerary.local_departure, itinerary.utc_departure),
      endTime: mapDate(itinerary.local_arrival, itinerary.utc_arrival),
      destination: mapLocation(
        itinerary.flyTo,
        itinerary.cityTo,
        itinerary.countryTo?.name,
        itinerary.countryTo?.code,
      ),
      origin: mapLocation(
        itinerary.flyFrom,
        itinerary.cityFrom,
        itinerary.countryFrom?.name,
        itinerary.countryFrom?.code,
      ),
      sectors: mapSectors(itinerary.route, itinerary.routes),
      price: {
        currency: response.currency,
        amount: itinerary.price,
      },
    };
  });
};

export function createItinerariesLoader() {
  return new OptimisticDataloader(
    async (
      keys: $ReadOnlyArray<ItinerariesReturnSearchParameters>,
    ): Promise<Array<Itinerary[] | Error>> => fetchItineraries(keys),
    {
      cacheKeyFn: stringify,
    },
  );
}
