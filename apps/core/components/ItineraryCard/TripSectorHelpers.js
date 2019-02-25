// @flow

import * as DateFNS from 'date-fns';

export const timeSimpleFormat = 'H:mm';
export const dateFormat = 'ddd D MMM';

export const getFormattedDate = (
  time: ?string,
  format: ?string = timeSimpleFormat,
) => DateFNS.format(DateFNS.parse(time), format);
