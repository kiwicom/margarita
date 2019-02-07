// @flow

import { head, last } from 'ramda';

import bookings from '../datasets/AllBookings.json';

type ApiRouteStop = {|
  +where: {|
    +code: string,
    +name: string,
    +city_id: string,
  |},
  +when: {|
    +utc: Date,
    +local: Date,
  |},
|};

type BookingApiResult = {|
  +bid: number,
  +status: string,
  +flights: $ReadOnlyArray<{|
    +arrival: ApiRouteStop,
    +departure: ApiRouteStop,
    +return: number,
  |}>,
  +passengers: $ReadOnlyArray<{|
    +id: number,
  |}>,
  +segments: $ReadOnlyArray<Object> | null,
|};

type RouteStopTime = {|
  +utc: Date,
  +local: Date,
|};

export type RouteStop = {|
  +cityName: string,
  +cityId: string,
  +time: RouteStopTime,
  +code: string,
|};

export type Booking = {|
  +bid: number,
  +status: string,
  +arrival: RouteStop,
  +departure: RouteStop,
  +passengerCount: number,
  +type: 'BookingReturn' | 'BookingMulticity' | 'BookingOneWay',
|};

const sanitizeBookings = (
  bookings: $ReadOnlyArray<BookingApiResult>,
): $ReadOnlyArray<Booking> => {
  return bookings.map(booking => ({
    bid: booking.bid,
    status: booking.status,
    arrival: sanitizeRouteStop(last(booking.flights).arrival),
    departure: sanitizeRouteStop(head(booking.flights).departure),
    passengerCount: booking.passengers.length,
    type: detectType(booking),
  }));
};

const detectType = (booking: BookingApiResult) => {
  if (Array.isArray(booking.flights)) {
    const returnFlight = booking.flights.find(flight => flight.return === 1);

    if (returnFlight) {
      return 'BookingReturn';
    }
  }

  if (Array.isArray(booking.segments) && booking.segments.length) {
    return 'BookingMulticity';
  }

  return 'BookingOneWay';
};

const sanitizeRouteStop = (departureArrival: ApiRouteStop) => {
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
