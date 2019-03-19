// @flow

import * as DateFNS from 'date-fns';
import { HOURS_MINUTES_FORMAT } from '@kiwicom/margarita-config';

export const getFormattedDate = (
  time: ?string,
  format: ?string = HOURS_MINUTES_FORMAT,
) => time && format && DateFNS.format(DateFNS.parseISO(time), format);
