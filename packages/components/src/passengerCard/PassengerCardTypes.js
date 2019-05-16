// @flow

import { type IconNameType } from '@kiwicom/universal-components';
import { type BaggageBundleType } from '@kiwicom/margarita-core';

export type PassengerCardType = {|
  +name: ?string,
  +lastName: ?string,
  +gender: 'female' | 'male' | 'other',
  +nationality: ?string,
  +dateOfBirth: ?Date,
  +id: ?string,
  +insurance?: ?string,
  +bags: null | Array<BaggageBundleType>,
  +passengerCount: number,
  +visaRequired?: ?boolean,
|};

export type PassengerCardActionType = {|
  +editIconName?: IconNameType,
  +onEditPress?: (?string) => void,
  +deleteIconName?: IconNameType,
  +onDeletePress?: (?string) => void,
|};
