// @flow

import Dataloader from 'dataloader';
import stringify from 'json-stable-stringify';
import qs from 'querystring';
import { DateTime } from 'luxon';

import fetch from '../services/Fetch';

export type ItinerariesSearchParameters = {|
  +travelFrom: string,
  +dateFrom: Date,
  +dateTo: ?Date,
|};

export type Itineraries = {|
  +id: string,
|};

type ApiResponse = {|
  +data: $ReadOnlyArray<{|
    +id: string,
  |}>,
|};

const dateFormat = 'dd/MM/yyyy';
const parseDate = (date: Date) =>
  DateTime.fromJSDate(date, { zone: 'UTC' }).toFormat(dateFormat);

const fetchItineraries = async (
  parameters: $ReadOnlyArray<ItinerariesSearchParameters>,
) => {
  return Promise.all(
    parameters.map(async params => {
      const dateTo = params.dateTo ?? params.dateFrom;
      const itineraries: ApiResponse = await fetch(
        `/v2/search?${qs.stringify({
          flyFrom: params.travelFrom,
          dateFrom: parseDate(params.dateFrom),
          dateTo: parseDate(dateTo),
          to: 'BCN', // Currently crashes without this, fix hardcoding later, see https://skypicker.slack.com/archives/C7J2QM28G/p1544189402006200?thread_ts=1544188700.004300&cid=C7J2QM28G
        })}`,
      );
      return sanitizeIteneraries(itineraries.data);
    }),
  );
};

const sanitizeIteneraries = (
  itineraries: $PropertyType<ApiResponse, 'data'>,
): Itineraries[] => {
  return itineraries.map(itinerary => ({
    id: itinerary.id,
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
