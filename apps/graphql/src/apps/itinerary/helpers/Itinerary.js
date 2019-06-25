// @flow

import { head, last } from 'ramda';
import { TRIP_TYPES, type TripType } from '@kiwicom/margarita-config';
import { differenceInMinutes, fromISO } from '@kiwicom/margarita-utils';

import type { ItineraryApiSegment, HoldBagProps } from '../Itinerary';
import type {
  RouteStop,
  Sector,
  Segment,
  Carrier,
  Vehicle,
} from '../../common/CommonTypes';

/**
 * @TODO - Sectors mapping can handle only one-way and return types
 * from currently available `Booking API` response data.
 * It will need to be extended for Multicity and Nomad after response content update.
 * Related issue: https://github.com/kiwicom/margarita/issues/116#issuecomment-478977269
 */

export const sanitizeSectors = (
  rawSegments: ?Array<ItineraryApiSegment>,
): ?Array<Sector> => {
  if (rawSegments == null) {
    return null;
  }

  const sectors = [];
  const sanitizedSegments = rawSegments.reduce(
    (acc, rawSegment) => {
      if (rawSegment != null) {
        if (rawSegment.return === 1) {
          acc.outbound.push(sanitizeSegment(rawSegment));
        } else {
          acc.inbound.push(sanitizeSegment(rawSegment));
        }
      }
      return acc;
    },
    {
      inbound: [],
      outbound: [],
    },
  );

  sectors.push(sanitizeSector(sanitizedSegments.inbound));
  if (sanitizedSegments.outbound.length > 0) {
    sectors.push(sanitizeSector(sanitizedSegments.outbound));
  }

  return sectors;
};

const sanitizeSector = (segments: Array<Segment>): Sector => {
  const departure = head(segments)?.departure;
  const arrival = last(segments)?.arrival;

  return {
    duration: differenceInMinutes(
      fromISO(departure?.time?.utc),
      fromISO(arrival?.time?.utc),
    ),
    segments,
    stopoverDuration: 0,
    departure,
    arrival,
  };
};

const sanitizeSegment = (segment: ItineraryApiSegment): Segment => {
  return {
    id: segment.id,
    carrier: sanitizeCarrier(segment),
    duration: differenceInMinutes(
      fromISO(segment.utc_departure),
      fromISO(segment.utc_arrival),
    ),
    vehicle: sanitizeVehicle(segment),
    departure: sanitizeDeparture(segment),
    arrival: sanitizeArrival(segment),
  };
};

const sanitizeCarrier = (segment: ItineraryApiSegment): Carrier => ({
  name: segment.airline?.Name,
  code: segment.airline?.iatacode,
});

const sanitizeVehicle = (segment: ItineraryApiSegment): Vehicle => ({
  type: 'aircraft', // @TODO - value is not currently returned in endpoint reponse
  uniqueNo: segment.flight_no,
});

const sanitizeDeparture = (segment: ItineraryApiSegment): RouteStop => ({
  code: segment.src,
  time: {
    utc: segment.utc_departure,
    local: segment.local_departure,
  },
});

const sanitizeArrival = (segment: ItineraryApiSegment): RouteStop => ({
  code: segment.dst,
  time: {
    utc: segment.utc_arrival,
    local: segment.local_arrival,
  },
});

export const getItineraryId = (
  segments: ?Array<ItineraryApiSegment>,
): string => {
  return segments ? segments.map(segment => segment.id).join('|') : '';
};

export const getItineraryType = (sectors: ?Array<Sector>): ?TripType => {
  if (sectors == null) {
    return null;
  }

  switch (sectors.length) {
    case 1:
      return TRIP_TYPES.ONEWAY;
    case 2:
      return TRIP_TYPES.RETURN;
    default:
      return null;
  }
};

export const sanitizeHoldBagProps = (
  bagProps: ?$ReadOnlyArray<?number>,
): HoldBagProps => {
  return {
    weight: bagProps?.[4],
    width: bagProps?.[6],
    height: bagProps?.[7],
    length: bagProps?.[5],
  };
};
