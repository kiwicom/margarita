// @flow

import stringify from 'json-stable-stringify';
import qs from 'querystring';
import * as DateFNS from 'date-fns';
import { OptimisticDataloader } from '@kiwicom/graphql-utils';

import fetch from '../../../services/fetch/Fetch';
import {
  mapLocation,
  mapDate,
  getItineraryType,
  mapSectors,
} from '../helpers/Itineraries';
import type {
  ItinerariesSearchParameters,
  ApiResponseType,
  ItinerariesType,
} from '../Itinerary';

const dateFormat = 'dd/MM/yyyy';

const stripTimeZoneOffset = (date: Date) =>
  DateFNS.addMinutes(date, date.getTimezoneOffset());

const parseDate = (date: Date) =>
  DateFNS.format(stripTimeZoneOffset(date), dateFormat);

export const parseParameters = (input: ItinerariesSearchParameters) => {
  const flyFrom = input.travelFrom.join();
  const flyTo = input.travelTo ? input.travelTo.join() : null;

  const params = {
    flyFrom,
    dateFrom: parseDate(input.dateFrom),
    dateTo: parseDate(input.dateFrom),
    to: flyTo,
    ...(input.returnDateFrom && {
      returnFrom: parseDate(input.returnDateFrom),
    }),
    ...(input.returnDateTo && {
      returnTo: parseDate(input.returnDateTo),
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

const sanitizeItineraries = (response: ApiResponseType): ItinerariesType[] => {
  const itineraries = response.data;

  return itineraries.map(itinerary => {
    return {
      id: itinerary.id,
      type: getItineraryType(itinerary.routes),
      bookingToken: itinerary.booking_token,
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

export default function itinerariasLoader() {
  return new OptimisticDataloader(
    async (
      keys: $ReadOnlyArray<ItinerariesSearchParameters>,
    ): Promise<Array<ItinerariesType[] | Error>> => fetchItineraries(keys),
    {
      cacheKeyFn: stringify,
    },
  );
}
