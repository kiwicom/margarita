// @flow

import differenceInMinutes from 'date-fns/differenceInMinutes';

import type { Sector } from '../../common/CommonTypes';

const getStopoverDuration = (
  sector: Sector,
  previousSector: ?Sector,
): number | null => {
  if (previousSector == null) {
    return null;
  }

  const currentSectorDeparture = sector.departure?.time?.utc;
  const previousSectorArrival = previousSector.arrival?.time?.utc;

  if (currentSectorDeparture == null || previousSectorArrival == null) {
    return null;
  }

  return differenceInMinutes(
    new Date(currentSectorDeparture),
    new Date(previousSectorArrival),
  );
};

export default getStopoverDuration;
