// @flow

import * as DateFNS from 'date-fns';

export const timeSimpleFormat = 'H:mm';
export const dateFormat = 'ddd D MMM';
const durationFormat = 'H[h] m[m]';
export const getFormattedDate = (
  time: ?string,
  format: ?string = timeSimpleFormat,
) => DateFNS.format(DateFNS.parse(time), format);

export const getDuration = (durationInMinutes: ?number) => {
  if (!durationInMinutes) {
    return null;
  }
  const date = new Date(0, 0, 0, 0, durationInMinutes);
  return DateFNS.format(date, durationFormat);
};
