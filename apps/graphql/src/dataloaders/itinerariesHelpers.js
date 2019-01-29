// @flow

import * as DateFNS from 'date-fns';

import type { ApiRouteItem, Sector } from './ItinerariesloaderTypes';

export const differenceInMinutes = (from: ?string, to: ?string) => {
  return from && to ? DateFNS.differenceInMinutes(to, from) : null;
};

export const mapVehicle = (type: ?string, uniqueNo: ?string) => ({
  type: type ?? null,
  uniqueNo: uniqueNo ?? null,
});

export const mapTransporter = (transporter: ?string) => ({
  name: transporter ?? null,
});

export const mapItineraryType = (routes: ?Array<Array<string>>) => {
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

export const sortRoute = (
  segments: Array<ApiRouteItem>,
): Array<ApiRouteItem> => {
  return segments.slice(0).sort((segmentA, segmentB) => {
    const a = segmentA.utc_departure && new Date(segmentA.utc_departure);
    const b = segmentB.utc_departure && new Date(segmentB.utc_departure);
    if (!a || !b) return 0;
    return a < b ? -1 : a > b ? 1 : 0;
  });
};

export const mapSectors = (
  routesList: ?Array<ApiRouteItem>,
  routesMap: ?Array<Array<string>>,
): ?Array<Sector> => {
  if (routesList && routesMap) {
    let routesSubList = sortRoute(routesList);
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
          destination: mapLocation(lastSegment.flyTo, lastSegment.cityTo),
          origin: mapLocation(firstSegment.flyFrom, firstSegment.cityFrom),
          arrivalTime: mapDate(
            lastSegment.local_arrival,
            lastSegment.utc_arrival,
          ),
          departureTime: mapDate(
            firstSegment.local_departure,
            firstSegment.utc_departure,
          ),
          duration: differenceInMinutes(
            firstSegment.utc_departure,
            lastSegment.utc_arrival,
          ),
          segments: sector.map(segment => {
            return {
              arrivalTime: mapDate(segment.local_arrival, segment.utc_arrival),
              departureTime: mapDate(
                segment.local_departure,
                segment.utc_departure,
              ),
              destination: mapLocation(segment.flyTo, segment.cityTo),
              duration: differenceInMinutes(
                segment.utc_departure,
                segment.utc_arrival,
              ),
              id: segment.id,
              origin: mapLocation(segment.flyFrom, segment.cityFrom),
              transporter: mapTransporter(segment.airline),
              vehicle: mapVehicle(
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

export const mapDate = (local: ?string, utc: ?string) => {
  const localDate = local && DateFNS.parse(local).toISOString();
  const utcDate = utc && DateFNS.parse(utc).toISOString();
  return {
    local: localDate ?? null,
    utc: utcDate ?? null,
  };
};

export const mapLocationArea = (
  code: ?string,
  locationId: ?string,
  name: ?string,
  slug: ?string,
) => ({
  code: code ?? null,
  locationId: locationId ?? null,
  name: name ?? null,
  slug: slug ?? null,
});

export const mapLocation = (
  locationId?: string,
  name?: string,
  countryName?: string,
  countryCode?: string,
) => ({
  id: locationId ?? null,
  locationId: locationId ?? null,
  name: name ?? null,
  timezone: 'UTC+1',
  country: mapLocationArea(countryCode, countryCode, countryName),
});
