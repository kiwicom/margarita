// @flow

export type Props = {|
  +adults: number,
  +infants: number,
  +bags: number,
  +onClosePress: () => void,
  +onSavePress: (passengersData: State) => void,
|};

export type State = {|
  adults: number,
  infants: number,
  bags: number,
|};
