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
  const trips = [];
  const segmentIndexes = booking.segments ?? [];

  const segments = booking.flights.map<Segment>(sanitizeFlight);

  const lastIndex = segmentIndexes.reduce(
    (lastIndex: number, segment: string) => {
      const indexOfNewSegment = parseInt(segment, 10);
      const trip = segments.slice(lastIndex, indexOfNewSegment);
      trips.push(trip);

      return indexOfNewSegment;
    },
    0,
  );

  trips.push(segments.slice(lastIndex));

  return {
    segments,
    trips: trips.map(trip => ({
      departure: head(trip)?.departure,
      arrival: last(trip)?.arrival,
      segments: trip,
    })),
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

const BookingsLoader = {
  load: () => sanitizeBookings(bookings),
};

export default BookingsLoader;
