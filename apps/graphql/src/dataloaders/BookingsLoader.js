// @flow

import bookings from '../datasets/AllBookings.json';

type BookingApiResult = {|
  +bid: number,
  +status: string,
|};

export type Booking = {|
  +bid: number,
  +status: string,
|};

const sanitizeBookings = (
  bookings: $ReadOnlyArray<BookingApiResult>,
): $ReadOnlyArray<Booking> => {
  return bookings.map(booking => ({
    bid: booking.bid,
    status: booking.status,
  }));
};

export default {
  load: () => sanitizeBookings(bookings),
};
