// @flow

import { fromGlobalId } from '@kiwicom/graphql-global-id';

import booking6676524 from '../__datasets__/booking-6676524.json';
import booking8142828 from '../__datasets__/booking-8142828.json';
import booking16463447 from '../__datasets__/booking-16463447.json';
import { sanitizeBooking } from './Bookings';

const BookingDetailLoader = {
  load: (opaqueID: string) => {
    const id = fromGlobalId(opaqueID);
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

export default BookingDetailLoader;
