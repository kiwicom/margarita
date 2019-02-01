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
  |}>,
  +passengers: $ReadOnlyArray<{|
    +id: number,
  |}>,
|};

type RouteStopTime = {|
  +utc: Date,
  +local: Date,
|};

type RouteStop = {|
  +cityName: string,
  +cityId: string,
  +time: RouteStopTime,
|};

export type Booking = {|
  +bid: number,
  +status: string,
  +arrival: RouteStop,
  +departure: RouteStop,
  +passengerCount: number,
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
  }));
};

const sanitizeRouteStop = (departureArrival: ApiRouteStop) => {
  return {
    cityName: departureArrival.where.name,
    cityId: departureArrival.where.city_id,
    time: {
      utc: departureArrival.when.utc,
      local: departureArrival.when.local,
    },
  };
};

export default {
  load: () => sanitizeBookings(bookings),
};
