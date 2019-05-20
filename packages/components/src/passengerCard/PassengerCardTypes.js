// @flow

import { type IconNameType } from '@kiwicom/universal-components';

export type PassengerCardActionType = {|
  +editIconName?: IconNameType,
  +onEditPress?: (?string) => void,
  +deleteIconName?: IconNameType,
  +onDeletePress?: (?string) => void,
|};
