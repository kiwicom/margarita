// @flow

import { IconNameType } from '@kiwicom/universal-components';

export type Bag = {|
  +count: number,
  +type: string,
|};

export type PassengerCardProps = {|
  +name: string,
  +gender: 'female' | 'male' | 'other',
  +nationality: string,
  +dateOfBirth: string,
  +id: string,
  +insurance: string,
  +bags: null | Array<Bag>,
  +passengerCount: number,
  +actionIconName?: IconNameType,
  +onActionPress: () => void,
|};
