// @flow

import * as DateFNS from 'date-fns';
import { HOURS_MINUTES_FORMAT } from '@kiwicom/margarita-config';

export const getFormattedDate = (time: ?string, format: ?string) =>
  time &&
  DateFNS.format(DateFNS.parseISO(time), format ?? HOURS_MINUTES_FORMAT);
