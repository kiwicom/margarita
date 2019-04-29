// @flow

import { parseISO } from 'date-fns';

/**
 * Our date type from api if ?(string | number).
 * Tequila itinerary returns string, while booking.com mock is returning number.
 * This function allows a number so we don't have to cast type to string. We know where in the application we
 * are working with strings, and where we are working with numbers.
 * It is therefore ok to return null in case we are passed a number.
 * Date types that are returned as numbers should not use this function
 */
export default function fromISO(date: ?(string | number)) {
  if (date == null || typeof date === 'number') {
    return null;
  }

  const parsedDate = parseISO(date);
  // NaN is return in case of invalid string format 🙈
  return isNaN(parsedDate) ? null : parsedDate;
}
