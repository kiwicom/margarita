// @flow

import { head, last } from 'ramda';

import bookings from '../../datasets/AllBookings.json';
import type {
  BookingApiResult,
  Booking,
  ApiFlight,
  ApiRouteStop,
  TypeSpecificData,
  Segment,
} from './BookingFlowTypes';

const sanitizeBookings = (
  bookings: $ReadOnlyArray<BookingApiResult>,
): $ReadOnlyArray<Booking> => {
  return bookings.map(booking => {
    const type = detectType(booking);
    const typeSpecificData = getTypeSpecificData(booking, type);

    return {
      bid: booking.bid,
      status: booking.status,
      passengerCount: booking.passengers.length,
      type,
      ...typeSpecificData,
    };
  });
};

const getTypeSpecificData = (
  booking: BookingApiResult,
  type: $PropertyType<Booking, 'type'>,
): TypeSpecificData => {
  if (type === 'BookingReturn') {
    return sanitizeReturn(booking);
  }
  if (type === 'BookingMulticity') {
    return sanitizeMulticity(booking);
  }
  return sanitizeOneWay(booking);
};

const sanitizeOneWay = (booking: BookingApiResult) => {
  return {
    arrival: sanitizeRouteStop(last(booking.flights)?.arrival),
    departure: sanitizeRouteStop(head(booking.flights)?.departure),
    segments: booking.flights.map(sanitizeFlight),
  };
};

const sanitizeReturn = (booking: BookingApiResult) => {
  const inboundSegments = [];
  const outboundSegments = [];
  const segments = booking.flights.map(flight => {
    const segment = sanitizeFlight(flight);

    if (segment.isReturn) {
      inboundSegments.push(segment);
    } else {
      outboundSegments.push(segment);
    }

    return segment;
  });

  const inbound = {
    departure: head(inboundSegments)?.departure,
    arrival: last(inboundSegments)?.arrival,
    segments: inboundSegments,
  };
  const outbound = {
    departure: head(outboundSegments)?.departure,
    arrival: last(outboundSegments)?.arrival,
    segments: outboundSegments,
  };
  return {
    segments,
    inbound,
    outbound,
    departure: outbound.departure,
    arrival: outbound.arrival,
  };
};

const sanitizeMulticity = (booking: BookingApiResult) => {
  const trips = {};
  const bookingSegments = booking.segments ?? [];
  const segmentIndexes = bookingSegments.map((segmentIndex, index) => {
    return parseInt(segmentIndex, 10);
  });

  let currentTripIndex = 0;

  const segments = booking.flights.map((flight, index) => {
    const segment = sanitizeFlight(flight);

    if (!trips[currentTripIndex]) {
      trips[currentTripIndex] = [];
    }

    trips[currentTripIndex].push(segment);

    if (segmentIndexes.includes(index)) {
      currentTripIndex++;
    }
    return segment;
  });

  return {
    segments,
    trips: Object.keys(trips).reduce((acc, key) => {
      return [...acc, ...trips[key]];
    }, []),
    departure: head(segments)?.departure,
    arrival: last(segments)?.arrival,
  };
};

const sanitizeFlight = (flight: ApiFlight): Segment => {
  return {
    isReturn: flight.return === 1,
    id: flight.id,
    departure: sanitizeRouteStop(flight.departure),
    arrival: sanitizeRouteStop(flight.arrival),
  };
};

const detectType = (booking: BookingApiResult) => {
  if (Array.isArray(booking.flights)) {
    const isReturn = booking.flights.some(flight => flight.return === 1);

    if (isReturn) {
      return 'BookingReturn';
    }
  }

  if (Array.isArray(booking.segments) && booking.segments.length) {
    return 'BookingMulticity';
  }

  return 'BookingOneWay';
};

const sanitizeRouteStop = (departureArrival: ?ApiRouteStop) => {
  if (departureArrival == null) {
    return null;
  }
  return {
    cityName: departureArrival.where.name,
    cityId: departureArrival.where.city_id,
    code: departureArrival.where.code,
    time: {
      utc: departureArrival.when.utc,
      local: departureArrival.when.local,
    },
  };
};

export default {
  load: () => sanitizeBookings(bookings),
};
