// @flow

import * as DateFNS from 'date-fns';

import type { ApiRouteItemType, SectorType } from './ItinerariesloaderTypes';

export const getVehicle = (type: ?string, uniqueNo: string) => ({
  type: type ?? null,
  uniqueNo: uniqueNo ?? null,
});

export const getTransporter = (transporter: ?string) => ({
  name: transporter ?? null,
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
  routesList: ?Array<ApiRouteItemType>,
  routesMap: ?Array<Array<string>>,
): ?Array<SectorType> => {
  if (routesList && routesMap) {
    let routesSubList = routesList;
    return routesMap
      .map(routeMap => {
        const routeListEndSectorIndex = routesSubList.findIndex(
          routeItem => routeItem.flyTo === routeMap[1],
        );
        const tempRoutesSubList = routesSubList;
        routesSubList = tempRoutesSubList.slice(routeListEndSectorIndex + 1);
        return tempRoutesSubList.slice(0, routeListEndSectorIndex + 1);
      })

      .map(sector => {
        const firstSegment = sector[0];
        const lastSegment = sector[sector.length - 1];
        return {
          destination: getLocation(lastSegment.flyTo, lastSegment.cityTo),
          origin: getLocation(firstSegment.flyFrom, firstSegment.cityFrom),
          arrivalTime: getDate(
            lastSegment.local_arrival,
            lastSegment.utc_arrival,
          ),
          departureTime: getDate(
            firstSegment.local_departure,
            firstSegment.utc_departure,
          ),
          duration: DateFNS.differenceInMinutes(
            lastSegment.utc_arrival,
            firstSegment.utc_departure,
          ),
          segments: sector.map(segment => {
            return {
              arrivalTime: getDate(segment.local_arrival, segment.utc_arrival),
              departureTime: getDate(
                segment.local_departure,
                segment.utc_departure,
              ),
              destination: getLocation(segment.flyTo, segment.cityTo),
              duration: DateFNS.differenceInMinutes(
                segment.utc_arrival,
                segment.utc_departure,
              ),
              id: segment.id,
              origin: getLocation(segment.flyFrom, segment.cityFrom),
              transporter: getTransporter(segment.airline),
              vehicle: getVehicle(
                segment.vehicle_type,
                String(segment.flight_no),
              ),
            };
          }),
        };
      });
  }
  return null;
};

export const getDate = (local: ?Date, utc: ?Date) => ({
  local: local ?? null,
  utc: utc ?? null,
});

export const getCountry = (name: ?string, code: ?string) => ({
  id: code ?? null,
  name: name ?? null,
  code: code ?? null,
  slug: 'slug',
  flagURL: 'flagUrl',
});

export const getLocation = (
  locationId?: string,
  name?: string,
  countryName?: string,
  countryCode?: string,
) => ({
  id: locationId ?? null,
  locationId: locationId ?? null,
  name: name ?? null,
  timezone: 'UTC+1',
  country: getCountry(countryName, countryCode),
});
