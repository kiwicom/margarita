// @flow

import type {
  ApiRouteItemType,
  ProviderTypeType,
} from './ItinerariesloaderTypes';

export const getVehicle = (type: ?ProviderTypeType, uniqueNo: string) => ({
  type: type ?? null,
  uniqueNo: uniqueNo ?? null,
});

export const getProvider = (provider: ?string) => ({
  id: 'ads',
  name: provider ?? null,
});

export const getItineraryType = (routes: ?Array<Array<string>>) => {
  if (routes == null) {
    return null;
  }
  if (routes.length === 1) {
    return 'oneway';
  }
  if (routes.length === 2) {
    return 'return';
  }
  return null;
};

export const getSectors = (
  routesList: Array<ApiRouteItemType>,
  routesMap: Array<Array<string>>,
): Array<Array<ApiRouteItemType>> => {
  let routesSubList = routesList;
  return routesMap.map(routeMap => {
    const routeListEndSectorIndex = routesSubList.findIndex(
      routeItem => routeItem.flyTo === routeMap[1],
    );
    const tempRoutesSubList = routesSubList;
    routesSubList = tempRoutesSubList.slice(routeListEndSectorIndex + 1);
    return tempRoutesSubList.slice(0, routeListEndSectorIndex + 1);
  });
};

export const getDate = (local: ?Date, utc: ?Date) => ({
  local: local ?? null,
  utc: utc ?? null,
});

export const getCountry = (name: ?string, code: ?string) => ({
  id: 'aaa',
  name: name ?? '',
  code: code ?? '',
  slug: 'slug',
  flagURL: 'flagUrl',
});

export const getLocation = (
  locationId?: string,
  name?: string,
  countryName?: string,
  countryCode?: string,
) => ({
  id: '',
  locationId: locationId ?? '',
  name: name ?? '',
  timezone: 'UTC+1',
  country: getCountry(countryName, countryCode),
});
