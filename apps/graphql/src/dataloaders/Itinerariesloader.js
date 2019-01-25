// @flow

import stringify from 'json-stable-stringify';
import qs from 'querystring';
import * as DateFNS from 'date-fns';
import { OptimisticDataloader } from '@kiwicom/graphql-utils';

import fetch from '../services/Fetch';
import {
  getLocation,
  getDate,
  getItineraryType,
  getSectors,
} from './itinerariesHelpers';
import type {
  ItinerariesSearchParametersType,
  ApiResponseType,
  ItinerariesType,
} from './ItinerariesloaderTypes';

const dateFormat = 'DD/MM/YYYY';

const parseDate = (date: Date) =>
  DateFNS.format(DateFNS.parse(date), dateFormat);

export const parseParameters = (input: ItinerariesSearchParametersType) => {
  const params = {
    flyFrom: input.travelFrom,
    dateFrom: parseDate(input.dateFrom),
    dateTo: parseDate(input.dateFrom),
    to: input.travelTo ?? 'BCN', // Currently crashes without this fallback, fix hardcoding later, see https://skypicker.slack.com/archives/C7J2QM28G/p1544189402006200?thread_ts=1544188700.004300&cid=C7J2QM28G
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
    limit: 10, // TODO pagination
  };

  return params;
};

const fetchItineraries = async (
  parameters: $ReadOnlyArray<ItinerariesSearchParametersType>,
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
      type: getItineraryType(itinerary.routes),
      startTime: getDate(itinerary.local_departure, itinerary.utc_departure),
      endTime: getDate(itinerary.local_arrival, itinerary.utc_arrival),
      destination: getLocation(
        itinerary.flyTo,
        itinerary.cityTo,
        itinerary.countryTo?.name,
        itinerary.countryTo?.code,
      ),
      origin: getLocation(
        itinerary.flyFrom,
        itinerary.cityFrom,
        itinerary.countryFrom?.name,
        itinerary.countryFrom?.code,
      ),
      sectors: getSectors(itinerary.route, itinerary.routes),

      // old structure which we want to keep in new structure
      id: itinerary.id,
      price: {
        currency: response.currency,
        amount: itinerary.price,
      },

      // old structure
      airlines: itinerary.airlines,
      flyFrom: itinerary.flyFrom,
      flyTo: itinerary.flyTo,
      localDeparture: itinerary.local_departure,
      localArrival: itinerary.local_arrival,
      routes: itinerary.routes,
      route:
        itinerary.route &&
        itinerary.route.map(routeItem => ({
          airline: routeItem.airline ?? '',
          arrival: {
            city: routeItem.cityTo ?? '',
            cityCode: routeItem.flyTo ?? '',
            localTime: routeItem.local_arrival ?? null,
            utcTime: routeItem.utc_arrival ?? null,
          },
          departure: {
            city: routeItem.cityFrom ?? '',
            cityCode: routeItem.flyFrom ?? '',
            localTime: routeItem.local_departure ?? null,
            utcTime: routeItem.utc_departure ?? null,
          },
          id: routeItem.id ?? '',
        })),
    };
  });
};

export default () =>
  new OptimisticDataloader(
    async (
      keys: $ReadOnlyArray<ItinerariesSearchParametersType>,
    ): Promise<Array<ItinerariesType[] | Error>> => fetchItineraries(keys),
    {
      cacheKeyFn: stringify,
    },
  );
