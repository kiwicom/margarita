// @flow

import Dataloader from 'dataloader';
import stringify from 'json-stable-stringify';
import qs from 'querystring';

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

const fetchLocations = async (ids: $ReadOnlyArray<{| +term: string |}>) => {
  const data = await Promise.all(
    ids.map(({ term }) => fetch(`/locations/query?${qs.stringify({ term })}`)),
  );
  return data.map(({ locations }) => sanitizeLocations(locations));
};

export default () =>
  new Dataloader<{| +term: string |}, Locations>(fetchLocations, {
    cacheKeyFn: stringify,
  });
