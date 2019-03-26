// @flow

import * as DateFNS from 'date-fns';
import { head, last } from 'ramda';
import { fromGlobalId } from '@kiwicom/graphql-global-id';

import type { ApiRouteItem, Sector, Segment } from '../Itinerary';
import type { RouteStop } from '../../booking/Booking';

export const differenceInMinutes = (
  from: ?(string | number),
  to: ?(string | number),
) => {
  if (from == null || to == null) {
    return null;
  }
  const parseNonSpecificDate = date =>
    typeof date === 'string'
      ? DateFNS.parseISO(date)
      : DateFNS.fromUnixTime(date);

  return parseInt(
    DateFNS.differenceInMinutes(
      parseNonSpecificDate(to),
      parseNonSpecificDate(from),
    ),
    10,
  );
};

export const mapToOpaqueID = (input: any) => {
  const parsedOriginIds: string[] = input.itinerary.origin.ids.map(id =>
    fromGlobalId(id),
  );
  const parsedDestinationIds: string[] = input.itinerary.destination.ids.map(
    id => fromGlobalId(id),
  );

  return {
    ...input,
    itinerary: {
      ...input.itinerary,
      origin: {
        ids: parsedOriginIds,
      },
      destination: {
        ids: parsedDestinationIds,
      },
    },
  };
};

export const mapVehicle = (type: ?string, uniqueNo: ?string) => ({
  type: type ?? null,
  uniqueNo: uniqueNo ?? null,
});

export const mapTransporter = (transporter: ?string) => ({
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

/**
 * This function converts route and routes data from REST API to well-structured Sectors with Segments.
 * Sector = The whole part from source to destination, e.g Oslo -> Prague. A return trip will have 2 sectors
 * and 1 way trip will have 1 sector. A multicity trip could have 2 or more sectors.
 * Segment = A part of the sector. Segments could be Oslo -> Warzaw, Warzaw -> Prague
 */
export const mapSectors = (
  routesList: ?(ApiRouteItem[]),
  routeCodes: ?Array<string[]>,
): ?Array<Sector> => {
  if (routesList == null || routeCodes == null) {
    return null;
  }
  const sectors = [];
  let currentSectorIndex = 0;
  let currentRouteCode = head(routeCodes) ?? [];

  let { currentSector, currentArrival } = sanitizeSector(
    routesList,
    currentRouteCode,
  );

  sectors[currentSectorIndex] = currentSector;

  routesList.forEach((route: ApiRouteItem) => {
    const segment = sanitizeSegment(route);

    if (sectors[currentSectorIndex].segments) {
      sectors[currentSectorIndex].segments.push(segment);
    }

    if (route.flyTo === currentArrival?.flyTo) {
      currentSectorIndex++;
      // $FlowExpectedError: We already tested that routeCodes != null
      currentRouteCode = routeCodes[currentSectorIndex];

      if (currentRouteCode == null) {
        return;
      }
      // $FlowExpectedError: We already tested that routesList != null
      const nextSector = sanitizeSector(routesList, currentRouteCode);
      currentArrival = nextSector.currentArrival;
      sectors[currentSectorIndex] = nextSector.currentSector;
    }
  });

  return sectors;
};

const sanitizeSector = (
  routesList: ApiRouteItem[],
  currentRouteCode: string[],
) => {
  const currentRouteArrivalCode = last(currentRouteCode) ?? '';
  const currentRouteDepartureCode = head(currentRouteCode) ?? '';

  const currentDeparture: ?ApiRouteItem = routesList.find(
    route => route.flyFrom === currentRouteDepartureCode,
  );

  const currentArrival: ?ApiRouteItem = routesList.find(
    route => route.flyTo === currentRouteArrivalCode,
  );

  const departure = sanitizeRouteStop(
    apiRouteItemToDeparture(currentDeparture),
  );
  const arrival = sanitizeRouteStop(apiRouteItemToArrival(currentArrival));

  const currentSector = {
    departure,
    arrival,
    arrivalTime: {
      local: arrival.time?.local,
      utc: arrival.time?.utc,
    },
    departureTime: {
      local: departure.time?.local,
      utc: departure.time?.utc,
    },
    duration: differenceInMinutes(departure.time?.utc, arrival.time?.utc),
    destination: mapLocation(currentArrival?.flyTo, currentArrival?.cityTo),
    origin: mapLocation(currentDeparture?.flyFrom, currentDeparture?.cityFrom),
    segments: [],
    stopoverDuration: 0,
  };

  return {
    currentArrival,
    currentSector,
  };
};

const apiRouteItemToArrival = (routeItem: ?ApiRouteItem) => ({
  cityName: routeItem?.cityTo,
  code: routeItem?.flyTo,
  time: {
    utc: routeItem?.utc_arrival,
    local: routeItem?.local_arrival,
  },
});

const apiRouteItemToDeparture = (routeItem: ?ApiRouteItem) => ({
  cityName: routeItem?.cityFrom,
  code: routeItem?.flyFrom,
  time: {
    utc: routeItem?.utc_departure,
    local: routeItem?.local_departure,
  },
});

const sanitizeRouteStop = ({
  cityName,
  code,
  time,
}: {|
  +cityName: ?string,
  +code: ?string,
  +time: {| +utc: ?string, +local: ?string |},
|}): RouteStop => ({
  cityName,
  cityId: null,
  time,
  code,
});

const sanitizeSegment = (segment: ?ApiRouteItem): Segment => {
  return {
    duration: differenceInMinutes(segment?.utc_departure, segment?.utc_arrival),
    id: segment?.id,
    transporter: mapTransporter(segment?.airline),
    vehicle: mapVehicle(segment?.vehicle_type, String(segment?.flight_no)),
    departure: sanitizeRouteStop(apiRouteItemToDeparture(segment)),
    arrival: sanitizeRouteStop(apiRouteItemToArrival(segment)),
  };
};

export const mapDate = (local: ?string, utc: ?string) => {
  const localDate = local && DateFNS.parseISO(local).toISOString();
  const utcDate = utc && DateFNS.parseISO(utc).toISOString();
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
  flagURL: ?string,
) => ({
  id: locationId ?? null,
  code: code ?? null,
  locationId: locationId ?? null,
  name: name ?? null,
  slug: slug ?? null,
  flagURL: flagURL ?? null,
});

export const mapLocation = (
  locationId: ?string,
  name: ?string,
  countryName: ?string,
  countryCode: ?string,
  slug: ?string,
) => ({
  id: locationId ?? null,
  locationId: locationId ?? null,
  name: name ?? null,
  timezone: 'UTC+1',
  country: mapLocationArea(countryCode, countryCode, countryName),
  slug: slug ?? null,
  city: null,
  type: null,
});
