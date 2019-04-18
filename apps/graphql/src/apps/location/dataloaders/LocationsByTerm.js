// @flow

import stringify from 'json-stable-stringify';
import qs from 'querystring';
import { OptimisticDataloader } from '@kiwicom/graphql-utils';

import fetch from '../../../services/fetch/tequilaFetch';
import { type Location } from '../Location';
import sanitizeLocation from '../helpers/sanitizeLocation';
import type { LocationTypeInput } from '../../common/types/inputs/LocationTypeInput';

export type LocationInputTerm = {|
  +term: string,
  +types?: LocationTypeInput[],
|};

const fetchLocations = async (params: $ReadOnlyArray<LocationInputTerm>) => {
  const data = await Promise.all(
    params.map(param => {
      const locationsTypes = param.types ?? [];

      // convert locations types into locations params
      const locationsParamTypes = locationsTypes.reduce((acc, type) => {
        return `${acc}&location_types=${type}`;
      }, '');

      return fetch(
        `/locations/query?${qs.stringify({
          term: param.term ?? '',
        })}${locationsParamTypes}`,
      );
    }),
  );
  return data.map(({ locations }) =>
    locations.map(location => sanitizeLocation(location)),
  );
};

export default function locationsByTermLoader() {
  return new OptimisticDataloader(
    (
      ids: $ReadOnlyArray<LocationInputTerm>,
    ): Promise<Array<Location[] | Error>> => fetchLocations(ids),
    {
      cacheKeyFn: stringify,
    },
  );
}
