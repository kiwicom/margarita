// @flow

import * as React from 'react';
import * as DateFNS from 'date-fns';

type Props = {|
  +stopoverDuration: number,
  +locationName: ?string,
|};

const getDuration = stopoverDuration => {
  const durationDateFrom = new Date(0, 0, 0, 0, 0);
  const durationDateTo = new Date(0, 0, 0, 0, stopoverDuration);
  return DateFNS.formatDistance(durationDateTo, durationDateFrom);
};

export default function StopoverDuration({
  stopoverDuration,
  locationName,
}: Props) {
  return (
    <>
      Stays {getDuration(stopoverDuration)}
      {locationName && ` in ${locationName}`}
    </>
  );
}
