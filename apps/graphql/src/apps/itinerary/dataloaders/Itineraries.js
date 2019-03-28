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
  slugsNeedParsing,
  unmaskReplaceIds,
} from '../helpers/Itineraries';
import type {
  ItinerariesReturnSearchParameters,
  ItinerariesOneWaySearchParameters,
  ApiResponseType as ApiResponseSearch,
  Itinerary,
  SearchLocation,
} from '../Itinerary';
import type {
  ApiResponse as ApiResponseLocation,
  ApiLocation,
} from '../../location/Location';

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

  const destinationIds = destination?.ids;
  const flyFrom = (origin.ids ?? []).join();
  const flyTo = destinationIds !== null ? (destinationIds ?? []).join() : null;

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

const parseSlugsToIds = async (
  location: SearchLocation,
): Promise<SearchLocation> => {
  if (!location.slugs) return location;

  const results: $ReadOnlyArray<ApiResponseLocation> = await Promise.all(
    location.slugs.map(slug => fetch(`/locations/slug?term=${slug}`)),
  );

  const getFirstValidID = (locations: $ReadOnlyArray<ApiLocation>): ?string =>
    locations.filter(location => location.id)[0].id;

  const IDs: string[] = results.map(
    result => getFirstValidID(result.locations) ?? '',
  );

  return { ...location, ids: IDs.filter(id => id) };
};

const fetchItineraries = async (
  parameters: $ReadOnlyArray<ItinerariesReturnSearchParameters>,
) => {
  const results: $ReadOnlyArray<ApiResponseSearch> = await Promise.all(
    parameters.map(async params => {
      const { origin, destination } = params.itinerary;

      const parsedOrigin = slugsNeedParsing(origin)
        ? await parseSlugsToIds(origin)
        : unmaskReplaceIds(origin);

      const parsedDestination =
        destination && slugsNeedParsing(destination)
          ? await parseSlugsToIds(destination)
          : unmaskReplaceIds(destination);

      const parsedParams: typeof params = {
        ...params,
        itinerary: {
          ...params.itinerary,
          origin: parsedOrigin,
          ...(destination && { destination: parsedDestination }),
        },
      };

      return fetch(`/v2/search?${qs.stringify(parseParameters(parsedParams))}`);
    }),
  );
  return results.map(res => {
    return sanitizeItineraries(res);
  });
};

const sanitizeItineraries = (response: ApiResponseSearch): Itinerary[] => {
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
