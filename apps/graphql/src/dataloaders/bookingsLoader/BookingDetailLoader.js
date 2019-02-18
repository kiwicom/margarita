// @flow

import booking6676524 from '../../datasets/booking-6676524.json';
import booking8142828 from '../../datasets/booking-8142828.json';
import booking16463447 from '../../datasets/booking-16463447.json';
import type { BookingApiResult } from './BookingFlowTypes';
import { detectType, getTypeSpecificData } from './BookingsLoader';

const BookingDetailLoader = {
  load: (id: string) => {
    switch (id) {
      case '6676524':
        return sanitizeBooking(booking6676524);
      case '8142828':
        return sanitizeBooking(booking8142828);
      case '16463447':
        return sanitizeBooking(booking16463447);
      default:
        return null;
    }
  },
};

const sanitizeBooking = (booking: BookingApiResult) => {
  const type = detectType(booking);
  const typeSpecificData = getTypeSpecificData(booking, type);

  return {
    bid: booking.bid,
    status: booking.status,
    passengerCount: booking.passengers.length,
    type,
    ...typeSpecificData,
  };
};

export default BookingDetailLoader;
