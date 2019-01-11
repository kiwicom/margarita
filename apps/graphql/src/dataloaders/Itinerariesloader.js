// @flow

import stringify from 'json-stable-stringify';
import qs from 'querystring';
import { DateTime } from 'luxon';
import { OptimisticDataloader } from '@kiwicom/graphql-utils';

import fetch from '../services/Fetch';

export type ItinerariesSearchParameters = {|
  +travelFrom: string,
  +dateFrom: Date,
  +dateTo?: Date,
  +travelTo?: string,
  +returnDateFrom?: Date,
  +returnDateTo?: Date,
  +passengers?: {|
    +adults?: number,
    +children?: number,
    +infants?: number,
  |},
|};

export type TripSector = {
  +city: string,
  +cityCode: string,
  +localTime: Date,
  +utcTime: Date,
};
export type RouteItem = {
  +airline: string,
  +arrival: TripSector,
  +departure: TripSector,
  +id: string,
};

export type Price = {
  +amount: number,
  +currency: string,
};

export type Itineraries = {|
  +airlines: Array<string>,
  +id: string,
  +flyFrom: string,
  +flyTo: string,
  +localDeparture: string,
  +localArrival: string,
  +price: Price,
  +route: Array<RouteItem>,
  +routes: Array<Array<string>>,
|};

export type ApiRouteItem = {
  +airline: string,
  +cityFrom: string,
  +cityTo: string,
  +flyFrom: string,
  +flyTo: string,
  +id: string,
  +local_arrival: Date,
  +utc_arrival: Date,
  +local_departure: Date,
  +utc_departure: Date,
};

type ApiResponse = {|
  +currency: string,
  +data: $ReadOnlyArray<{|
    +id: string,
    +airlines: Array<string>,
    +price: number,
    +flyFrom: string,
    +flyTo: string,
    +local_departure: string,
    +local_arrival: string,
    +route: Array<ApiRouteItem>,
    +routes: Array<Array<string>>,
  |}>,
|};

const dateFormat = 'dd/MM/yyyy';
const parseDate = (date: Date) =>
  DateTime.fromJSDate(date, { zone: 'UTC' }).toFormat(dateFormat);

export const parseParameters = (input: ItinerariesSearchParameters) => {
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
  };

  return params;
};

const fetchItineraries = async (
  parameters: $ReadOnlyArray<ItinerariesSearchParameters>,
  apikey: string,
) => {
  const results: $ReadOnlyArray<ApiResponse> = await Promise.all(
    parameters.map(params => {
      return fetch(
        `/v2/search?${qs.stringify(parseParameters(params))}`,
        apikey,
      );
    }),
  );
  return results.map(res => {
    return sanitizeItineraries(res);
  });
};

const sanitizeItineraries = (response: ApiResponse): Itineraries[] => {
  const itineraries = response.data;
  return itineraries.map(itinerary => ({
    id: itinerary.id,
    airlines: itinerary.airlines,
    price: {
      currency: response.currency,
      amount: itinerary.price,
    },
    flyFrom: itinerary.flyFrom,
    flyTo: itinerary.flyTo,
    localDeparture: itinerary.local_departure,
    localArrival: itinerary.local_arrival,
    routes: itinerary.routes,
    route: itinerary.route.map(routeItem => ({
      airline: routeItem.airline,
      arrival: {
        city: routeItem.cityTo,
        cityCode: routeItem.flyTo,
        localTime: routeItem.local_arrival,
        utcTime: routeItem.utc_arrival,
      },
      departure: {
        city: routeItem.cityFrom,
        cityCode: routeItem.flyFrom,
        localTime: routeItem.local_departure,
        utcTime: routeItem.utc_departure,
      },
      id: routeItem.id,
    })),
  }));
};

export default (apikey: string) =>
  new OptimisticDataloader(
    async (
      keys: $ReadOnlyArray<ItinerariesSearchParameters>,
    ): Promise<Array<Itineraries[] | Error>> => fetchItineraries(keys, apikey),
    {
      cacheKeyFn: stringify,
    },
  );
