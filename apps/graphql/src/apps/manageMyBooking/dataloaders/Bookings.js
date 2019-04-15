// @flow

import { head, last } from 'ramda';
import differenceInMinutes from 'date-fns/differenceInMinutes';
import { capitalize } from '@kiwicom/margarita-utils';

import bookings from '../__datasets__/AllBookings.json';
import type {
  BookingApiResult,
  Booking,
  ApiFlight,
  ApiRouteStop,
  TypeSpecificData,
  Passenger,
  ApiCarrier,
  PassengerTitle,
} from '../manageMyBooking';
import type { RouteStop, Segment, Carrier } from '../../common/CommonTypes';

const cabinBag = '55x40x20, 10kg';
const personalItem = '35x20x20';
const checkedBaggage = '70x50x38, 15kg';

const bags = [
  { type: 'Cabin bag', dimensions: cabinBag, quantity: 1 },
  { type: 'Personal item', dimensions: personalItem, quantity: 1 },
  { type: 'Checked baggage', dimensions: checkedBaggage, quantity: 2 },
];

const sanitizeBookings = (
  bookings: $ReadOnlyArray<BookingApiResult>,
): $ReadOnlyArray<Booking> => {
  return bookings.map(sanitizeBooking);
};

export const sanitizeBooking = (booking: BookingApiResult) => {
  const type = detectType(booking);
  const typeSpecificData = getTypeSpecificData(booking, type);
  const passengers = sanitizePassengers(booking);
  return {
    bid: booking.bid,
    status: booking.status,
    passengerCount: booking.passengers.length,
    contact: {
      email: booking.contact.email,
      phone: booking.contact.phone,
    },
    passengers,
    type,
    ...typeSpecificData,
  };
};

const sanitizePassengers = (booking: BookingApiResult): Array<Passenger> =>
  booking.passengers.map(passenger => {
    const passengerTitle = capitalize(passenger.title);
    const title: PassengerTitle = (passengerTitle: any);
    return {
      id: passenger.id,
      bags,
      birthday: passenger.birthday,
      category: passenger.category,
      firstname: passenger.firstname,
      insuranceType: passenger.insuranceType,
      lastname: passenger.lastname,
      nationality: passenger.nationality,
      title,
      visaRequired: false,
    };
  });

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
  const arrival = sanitizeRouteStop(last(booking.flights)?.arrival);
  const departure = sanitizeRouteStop(head(booking.flights)?.departure);
  return {
    arrival,
    departure,
    segments: booking.flights.map(sanitizeFlight),
    duration: getDuration(departure, arrival),
  };
};

const sanitizeReturn = (booking: BookingApiResult) => {
  const inboundSegments = [];
  const outboundSegments = [];
  const segments = booking.flights.map(flight => {
    const segment = sanitizeFlight(flight);

    if (flight.return) {
      inboundSegments.push(segment);
    } else {
      outboundSegments.push(segment);
    }

    return segment;
  });

  const inboundDeparture = head(inboundSegments)?.departure;
  const inboundArrival = last(inboundSegments)?.arrival;

  const inbound = {
    departure: inboundDeparture,
    arrival: inboundArrival,
    segments: inboundSegments,
    duration: getDuration(inboundDeparture, inboundArrival),
  };

  const outboundDeparture = head(outboundSegments)?.departure;
  const outboundArrival = last(outboundSegments)?.arrival;

  const outbound = {
    departure: outboundDeparture,
    arrival: outboundArrival,
    segments: outboundSegments,
    duration: getDuration(outboundDeparture, outboundArrival),
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
  const sectors = [];
  const segmentIndexes = booking.segments ?? [];

  const segments = booking.flights.map<Segment>(sanitizeFlight);

  const lastIndex = segmentIndexes.reduce(
    (lastIndex: number, segment: string) => {
      const indexOfNewSegment = parseInt(segment, 10);
      const sector = segments.slice(lastIndex, indexOfNewSegment);
      sectors.push(sector);

      return indexOfNewSegment;
    },
    0,
  );

  sectors.push(segments.slice(lastIndex));

  return {
    segments,
    sectors: sectors.map(trip => {
      const departure = head(trip)?.departure;
      const arrival = last(trip)?.arrival;
      return {
        departure,
        arrival,
        segments: trip,
        duration: getDuration(departure, arrival),
      };
    }),
    departure: head(segments)?.departure,
    arrival: last(segments)?.arrival,
  };
};

const sanitizeFlight = (flight: ApiFlight): Segment => {
  return {
    id: flight.id,
    departure: sanitizeRouteStop(flight.departure),
    arrival: sanitizeRouteStop(flight.arrival),
    duration: null, // @TODO - calculate duration
    carrier: sanitizeCarrier(flight.airline),
    vehicle: null, // @TODO - map values
  };
};

const getDuration = (departure: ?RouteStop, arrival: ?RouteStop) => {
  const departureRawTime = parseInt(departure?.time?.utc, 10) ?? 0;
  const arrivalRawTime = parseInt(arrival?.time?.utc, 10) ?? 0;
  const departureTimeMs = departureRawTime * 1000;
  const arrivalTimeMs = arrivalRawTime * 1000;

  return differenceInMinutes(arrivalTimeMs, departureTimeMs);
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

const sanitizeRouteStop = (departureArrival: ?ApiRouteStop): ?RouteStop => {
  if (departureArrival == null) {
    return null;
  }

  return {
    code: departureArrival.where.code,
    cityId: departureArrival.where.city_id,
    time: {
      utc: departureArrival.when.utc,
      local: departureArrival.when.local,
    },
  };
};

const sanitizeCarrier = (apiCarrier: ?ApiCarrier): Carrier => ({
  name: apiCarrier?.name,
  code: apiCarrier?.iata,
});

const BookingsLoader = {
  load: () => sanitizeBookings(bookings),
};

export default BookingsLoader;
