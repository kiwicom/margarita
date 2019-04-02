// @flow

import stringify from 'json-stable-stringify';
import qs from 'querystring';
import { OptimisticDataloader } from '@kiwicom/graphql-utils';

import fetch from '../../../services/fetch/tequilaFetch';
import { type Location, type ApiLocation } from '../Location';

export type Locations = $ReadOnlyArray<Location>;

export type LocationTypeInput =
  | 'STATION'
  | 'AIRPORT'
  | 'BUS_STATION'
  | 'CITY'
  | 'AUTONOMOUS_TERRITORY'
  | 'SUBDIVISION'
  | 'COUNTRY'
  | 'REGION'
  | 'CONTINENT'
  | 'SPECIAL';

export type LocationInput =
  | {|
      +term: string,
      +types?: LocationTypeInput[],
    |}
  | {|
      +code: string,
    |};

function sanitizeCity(location: ApiLocation) {
  if (location.city != null) {
    return {
      id: location.city.id,
      locationId: location.city.id,
      code: location.city.code,
      flagURL: null,
      slug: location.city.slug,
      name: location.city.name,
    };
  }
  return null;
}

function sanitizeLocations(locations: $ReadOnlyArray<ApiLocation>) {
  return locations.map(location => ({
    id: location.id,
    locationId: location.id,
    name: location.name,
    slug: location.slug,
    type: location.type,
    timezone: location.timezone,
    coordinates: {
      lat: location.location.lat,
      lng: location.location.lon,
    },
    country: {
      id: location.city?.country?.id ?? '',
      locationId: location.city?.country?.id,
      code: location.city?.country?.code,
      flagURL: null,
      slug: location.city?.country?.slug,
      name: location.city?.country?.name,
    },
    city: sanitizeCity(location),
  }));
}

const fetchLocations = async (params: $ReadOnlyArray<LocationInput>) => {
  const data = await Promise.all(
    params.map(param => {
      const locationsTypes = param.types ? param.types : [];

      // convert locations types into locations params
      const locationsParamTypes = locationsTypes.reduce((acc, type) => {
        return `${acc}&location_types=${type}`;
      }, '');

      if (param.term !== undefined) {
        return fetch(
          `/locations/query?${qs.stringify({
            term: param.term,
          })}${locationsParamTypes}`,
        );
      }

      return fetch(`/locations/id?id=${param.code}`);
    }),
  );
  return data.map(({ locations }) => sanitizeLocations(locations));
};

export default function locationsLoader() {
  return new OptimisticDataloader(
    (ids: $ReadOnlyArray<LocationInput>): Promise<Array<Location[] | Error>> =>
      fetchLocations(ids),
    {
      cacheKeyFn: stringify,
    },
  );
}
