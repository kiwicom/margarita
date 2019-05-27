// @flow

export type ConfirmType = {|
  +dates?: $ReadOnlyArray<Date>,
  +isNightsInDestinationSelected?: boolean,
  +nightsInDestination?: $ReadOnlyArray<number>,
|};
