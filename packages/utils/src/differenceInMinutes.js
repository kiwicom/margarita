// @flow

import { differenceInMinutes as dateFnsDifferenceInMinutes } from 'date-fns';

const differenceInMinutes = (from: ?Date, to: ?Date) => {
  if (from == null || to == null) {
    return null;
  }

  return dateFnsDifferenceInMinutes(to, from);
};

export default differenceInMinutes;
