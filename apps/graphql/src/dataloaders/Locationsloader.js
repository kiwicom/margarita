// @flow

import stringify from 'json-stable-stringify';
import qs from 'querystring';
import { OptimisticDataloader } from '@kiwicom/graphql-utils';

import fetch from '../services/Fetch';
import { type ApiResponse, type Location } from './LocationsloaderTypes';

export type Locations = $ReadOnlyArray<Location>;

export type LocationInput =
  | {|
      +term: string,
    |}
  | {|
      +code: string,
    |};

function sanitizeLocations(locations: $PropertyType<ApiResponse, 'locations'>) {
  return locations.map(location => ({
    id: location.id,
    locationId: location.id,
    name: location.name,
    slug: location.slug,
    timezone: location.timezone,
    country: {
      id: location.city?.country?.id ?? '',
      locationId: location.city?.country?.id,
      code: location.city?.country?.code,
      flagURL: null,
      slug: location.city?.country?.slug,
      name: location.city?.country?.name,
    },
  }));
}

const fetchLocations = async (params: $ReadOnlyArray<LocationInput>) => {
  const data = await Promise.all(
    params.map(param => {
      if (param.term !== undefined) {
        return fetch(`/locations/query?${qs.stringify({ term: param.term })}`);
      }

      return fetch(`/locations/id?id=${param.code}`);
    }),
  );
  return data.map(({ locations }) => sanitizeLocations(locations));
};

export default function locationsLoader() {
  return new OptimisticDataloader(
    async (
      ids: $ReadOnlyArray<LocationInput>,
    ): Promise<Array<Location[] | Error>> => fetchLocations(ids),
    {
      cacheKeyFn: stringify,
    },
  );
}
