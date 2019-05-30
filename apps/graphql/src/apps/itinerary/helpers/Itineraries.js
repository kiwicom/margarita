// @flow

import { differenceInMinutes, fromISO } from '@kiwicom/margarita-utils';
import { head, last } from 'ramda';
import { fromGlobalId } from '@kiwicom/graphql-global-id';
import { TRIP_TYPES, type TripType } from '@kiwicom/margarita-config';

import type {
  ApiRouteItem,
  HoldBagProps,
  ApiBagsPrice,
  ApiBagsLimits,
} from '../Itinerary';
import type {
  RouteStop,
  Sector,
  Segment,
  HoldBagOption,
} from '../../common/CommonTypes';
import airlines from './airlines.json';

export const unmaskID = (ids: string[]): string[] =>
  ids.map(id => fromGlobalId(id));

export const mapVehicle = (type: ?string, uniqueNo: ?string) => ({
  type: type ?? null,
  uniqueNo: uniqueNo ?? null,
});

export const sanitizeCarrier = (routeItem: ?ApiRouteItem) => {
  // @TODO - value is currently missing from API endpoint response
  // JSON file is used from https://github.com/BesrourMS/Airlines/blob/master/airlines.json
  const airline = airlines.find(airline => airline.iata === routeItem?.airline);
  return {
    name: airline?.name,
    code: routeItem?.airline,
  };
};

export const getItineraryType = (routes: ?Array<Array<string>>) => {
  if (routes == null) {
    return null;
  }
  if (routes.length === 1) {
    return TRIP_TYPES.ONEWAY;
  }
  if (routes.length === 2) {
    return TRIP_TYPES.RETURN;
  }
  return null;
};

export const getItineraryDeparture = (sectors: ?Array<Sector>): ?RouteStop => {
  return head(head(sectors ?? [])?.segments ?? [])?.departure;
};

export const getItineraryArrival = (
  tripType: ?TripType,
  sectors: ?Array<Sector>,
): ?RouteStop => {
  return tripType === TRIP_TYPES.RETURN
    ? last(head(sectors ?? [])?.segments ?? [])?.arrival
    : last(last(sectors ?? [])?.segments ?? [])?.arrival;
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

  const departure = apiRouteItemToDeparture(currentDeparture);
  const arrival = apiRouteItemToArrival(currentArrival);

  const currentSector = {
    duration: differenceInMinutes(
      fromISO(departure.time?.utc),
      fromISO(arrival.time?.utc),
    ),
    segments: [],
    stopoverDuration: 0,
    departure,
    arrival,
  };

  return {
    currentArrival,
    currentSector,
  };
};

const apiRouteItemToArrival = (routeItem: ?ApiRouteItem): RouteStop => ({
  code: routeItem?.flyTo,
  time: {
    utc: routeItem?.utc_arrival,
    local: routeItem?.local_arrival,
  },
});

const apiRouteItemToDeparture = (routeItem: ?ApiRouteItem): RouteStop => ({
  code: routeItem?.flyFrom,
  time: {
    utc: routeItem?.utc_departure,
    local: routeItem?.local_departure,
  },
});

const sanitizeSegment = (segment: ?ApiRouteItem): Segment => {
  return {
    duration: differenceInMinutes(
      fromISO(segment?.utc_departure),
      fromISO(segment?.utc_arrival),
    ),
    id: segment?.id,
    carrier: sanitizeCarrier(segment),
    vehicle: mapVehicle(segment?.vehicle_type, String(segment?.flight_no)),
    departure: apiRouteItemToDeparture(segment),
    arrival: apiRouteItemToArrival(segment),
  };
};

const parseBagDimensions = (bagProps: ?HoldBagProps): ?string => {
  if (bagProps != null) {
    const { width, height, length } = bagProps;
    if (width != null && height != null && length != null) {
      return `${width} x ${height} x ${length} cm`;
    }
  }
  return null;
};

const parseBagWeight = (weight: ?number): ?string => {
  if (weight == null) {
    return null;
  }
  return `${weight} kg`;
};

export const getHoldBagOptions = (
  prices: ?ApiBagsPrice,
  currency: ?string,
  bagProps: ?HoldBagProps,
): ?Array<HoldBagOption> => {
  /**
   * NOTE: For now there is only 0-3 available and bookable quantity for hold bags.
   * This value is defined by current data available on endpoints and will be extended later
   * with more combinations, after new bags implementation will be ready for booking
   * endpoint https://docs.kiwi.com/booking/ (planned for Q2 2019)
   */
  const defaultOption = {
    quantity: 0,
  };
  const possibleHoldBagQuantities = [1, 2, 3];
  const dimensions = parseBagDimensions(bagProps);
  const weight = parseBagWeight(bagProps?.weight);
  return possibleHoldBagQuantities.reduce(
    (acc, quantity) => {
      const priceAmount = prices?.[quantity.toString()];
      if (quantity == null || priceAmount == null) {
        return acc;
      }
      const option = {
        quantity,
        dimensions,
        weight,
        price: {
          currency,
          amount: priceAmount,
        },
      };
      return [...acc, option];
    },
    [defaultOption],
  );
};

export const sanitizeHoldBagProps = (
  bagProps: ?ApiBagsLimits,
): HoldBagProps => {
  return {
    weight: bagProps?.hold_weight,
    width: bagProps?.hold_width,
    height: bagProps?.hold_height,
    length: bagProps?.hold_length,
  };
};
