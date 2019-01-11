// @flow

import TripSector from './TripSector';

export type TripSectorWithId = {
  ...React.ElementProps<typeof TripSector>,
  +id: string,
};
