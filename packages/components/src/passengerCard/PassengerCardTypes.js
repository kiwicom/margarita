// @flow

import { type IconNameType } from '@kiwicom/universal-components';

export type Bag = {|
  +count: number,
  +type: string,
|};

export type PassengerCardType = {|
  +name: string,
  +gender: 'female' | 'male' | 'other',
  +nationality: string,
  +dateOfBirth: string,
  +id: string,
  +insurance?: ?string,
  +bags: null | Array<Bag>,
  +passengerCount: number,
  +visaRequired?: ?boolean,
|};

export type PassengerCardActionType = {|
  +actionIconName?: IconNameType,
  +onActionPress?: (?string) => void,
|};
