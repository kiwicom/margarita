// @flow

import TripSegment from './TripSegment';

export type TripSegmentWithId = {
  ...React.ElementProps<typeof TripSegment>,
  +id: string,
};
