// @flow

import * as DateFNS from 'date-fns';

export const timeSimpleFormat = 'H:mm';
export const dateFormat = 'EEE d MMM';

export const getFormattedDate = (
  time: ?string,
  format: ?string = timeSimpleFormat,
) => time && format && DateFNS.format(DateFNS.parseISO(time), format);
