// @flow

import stringify from 'json-stable-stringify';
import qs from 'querystring';
import { OptimisticDataloader } from '@kiwicom/graphql-utils';

import fetch from '../services/Fetch';

type ApiResponse = {|
  +locations: $ReadOnlyArray<{|
    +id: string,
    +name: string,
    +slug: string,
  |}>,
|};

export type Location = {|
  +id: string,
  +name: string,
  +slug: string,
|};

export type Locations = $ReadOnlyArray<Location>;

function sanitizeLocations(locations: $PropertyType<ApiResponse, 'locations'>) {
  return locations.map(location => ({
    id: location.id,
    name: location.name,
    slug: location.slug,
  }));
}

const fetchLocations = async (
  ids: $ReadOnlyArray<{| +term: string |}>,
  apikey: string,
) => {
  const data = await Promise.all(
    ids.map(({ term }) =>
      fetch(`/locations/query?${qs.stringify({ term })}`, apikey),
    ),
  );
  return data.map(({ locations }) => sanitizeLocations(locations));
};

export default (apikey: string) =>
  new OptimisticDataloader(
    async (
      ids: $ReadOnlyArray<{| +term: string |}>,
    ): Promise<Array<Location[] | Error>> => fetchLocations(ids, apikey),
    {
      cacheKeyFn: stringify,
    },
  );
