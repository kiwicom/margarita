// @flow

import { format, addMinutes, parseISO } from 'date-fns';
import { HOURS_MINUTES_FORMAT } from '@kiwicom/margarita-config';

const formatDate = (dateString: ?string, dateFormat: ?string) => {
  if (dateString == null) {
    return null;
  }
  /**
   * NOTE: `date-fns` `format` adjusts for timezone,
   * we have to update date with timezone offset
   * to show correct time/date
   */
  const date = parseISO(dateString);
  return format(
    addMinutes(date, date.getTimezoneOffset()),
    dateFormat ?? HOURS_MINUTES_FORMAT,
  );
};

export default formatDate;
