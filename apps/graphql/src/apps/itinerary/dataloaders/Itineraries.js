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
  ItinerariesSearchParameters,
  ItinerariesOneWaySearchParameters,
  ApiResponseType,
  Itinerary,
} from '../Itinerary';

const stripTimeZoneOffset = (date: Date) =>
  DateFNS.addMinutes(date, date.getTimezoneOffset());

const parseDate = (date: Date) =>
  DateFNS.format(stripTimeZoneOffset(date), UK_DATE_FORMAT);

export const parseParameters = (input: ItinerariesSearchParameters) => {
  const flyFrom = input.travelFrom.join();
  const flyTo = input.travelTo ? input.travelTo.join() : null;

  const params = {
    fly_from: flyFrom,
    date_from: parseDate(input.dateFrom),
    date_to: parseDate(input.dateFrom),
    fly_to: flyTo,
    ...(input.returnDateFrom && {
      return_from: parseDate(input.returnDateFrom),
    }),
    ...(input.returnDateTo && {
      return_to: parseDate(input.returnDateTo),
    }),
    ...(input.passengers && {
      adults: input.passengers.adults ?? 0,
      children: input.passengers.children ?? 0,
      infants: input.passengers.infants ?? 0,
    }),
    curr: 'EUR',
  };

  return params;
};

export const parseParametersNew = (
  input: ItinerariesOneWaySearchParameters, // @TODO: Later on will be expanded to be the return one with extra fields
) => {
  const { origin, destination, outboundDate } = input.itinerary;
  const flyFrom = origin.ids.join();
  const flyTo = destination && destination.ids ? destination.ids.join() : null;
  const params = {
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
  return params;
};

const fetchItineraries = async (
  parameters: $ReadOnlyArray<ItinerariesSearchParameters>,
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

const fetchItinerariesNew = async (
  parameters: $ReadOnlyArray<ItinerariesOneWaySearchParameters>,
) => {
  const results: $ReadOnlyArray<ApiResponseType> = await Promise.all(
    parameters.map(params => {
      return fetch(`/v2/search?${qs.stringify(parseParametersNew(params))}`);
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
      keys: $ReadOnlyArray<ItinerariesSearchParameters>,
    ): Promise<Array<Itinerary[] | Error>> => fetchItineraries(keys),
    {
      cacheKeyFn: stringify,
    },
  );
}

export function createItinerariesNewLoader() {
  return new OptimisticDataloader(
    async (
      keys: $ReadOnlyArray<ItinerariesOneWaySearchParameters>,
    ): Promise<Array<Itinerary[] | Error>> => fetchItinerariesNew(keys),
    {
      cacheKeyFn: stringify,
    },
  );
}
