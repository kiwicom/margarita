// @flow

import stringify from 'json-stable-stringify';
import { OptimisticDataloader } from '@kiwicom/graphql-utils';

import fetch from '../../../services/fetch/tequilaFetch';
import { type Location } from '../Location';
import sanitizeLocation from '../helpers/sanitizeLocation';

export type LocationInputID = {|
  +code: string,
|};

const fetchLocations = async (params: $ReadOnlyArray<LocationInputID>) => {
  const results = await fetch(
    `/locations/id?limit=${params.length}&` +
      params
        .map((param: LocationInputID) => {
          const code = param.code ?? '';
          return `id=${code}`;
        })
        .join('&'),
  );
  return results.locations.map(location => sanitizeLocation(location));
};

export default function locationsByIDLoader() {
  return new OptimisticDataloader(
    (ids: $ReadOnlyArray<LocationInputID>): Promise<Array<Location | Error>> =>
      fetchLocations(ids),
    {
      cacheKeyFn: stringify,
    },
  );
}
