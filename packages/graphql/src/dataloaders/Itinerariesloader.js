// @flow

import Dataloader from 'dataloader';
import stringify from 'json-stable-stringify';
import qs from 'querystring';
import { DateTime } from 'luxon';

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

export type Itineraries = {|
  +id: string,
  +airlines: Array<string>,
  +price: number,
  +flyFrom: string,
  +flyTo: string,
  +localDeparture: string,
  +localArrival: string,
|};

type ApiResponse = {|
  +data: $ReadOnlyArray<{|
    +id: string,
    +airlines: Array<string>,
    +price: number,
    +flyFrom: string,
    +flyTo: string,
    +local_departure: string,
    +local_arrival: string,
  |}>,
|};

const dateFormat = 'dd/MM/yyyy';
const parseDate = (date: Date) =>
  DateTime.fromJSDate(date, { zone: 'UTC' }).toFormat(dateFormat);

export const parseParameters = (input: ItinerariesSearchParameters) => {
  const dateTo = input.dateTo ?? input.dateFrom;
  const params = {
    flyFrom: input.travelFrom,
    dateFrom: parseDate(input.dateFrom),
    dateTo: parseDate(dateTo),
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
  };

  return params;
};

const fetchItineraries = async (
  parameters: $ReadOnlyArray<ItinerariesSearchParameters>,
) => {
  const results: $ReadOnlyArray<ApiResponse> = await Promise.all(
    parameters.map(params => {
      return fetch(`/v2/search?${qs.stringify(parseParameters(params))}`);
    }),
  );
  return results.map(res => sanitizeIteneraries(res.data));
};

const sanitizeIteneraries = (
  itineraries: $PropertyType<ApiResponse, 'data'>,
): Itineraries[] => {
  return itineraries.map(itinerary => ({
    id: itinerary.id,
    airlines: itinerary.airlines,
    price: itinerary.price,
    flyFrom: itinerary.flyFrom,
    flyTo: itinerary.flyTo,
    localDeparture: itinerary.local_departure,
    localArrival: itinerary.local_arrival,
  }));
};

export default () =>
  new Dataloader<ItinerariesSearchParameters, Itineraries[]>(
    async (
      keys: $ReadOnlyArray<ItinerariesSearchParameters>,
    ): Promise<Array<Itineraries[]>> => await fetchItineraries(keys),
    {
      cacheKeyFn: stringify,
    },
  );
