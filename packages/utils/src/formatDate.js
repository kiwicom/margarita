// @flow

import format from 'date-fns/format';
import addMinutes from 'date-fns/addMinutes';

const formatDate = (date: Date, dateFormat: string) => {
  // Date-fns format adjusts for timezone, we have to remove this
  // to show correct time/date
  return format(addMinutes(date, date.getTimezoneOffset()), dateFormat);
};

export default formatDate;
