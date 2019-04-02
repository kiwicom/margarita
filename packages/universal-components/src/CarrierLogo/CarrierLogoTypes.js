// @flow

export type CarrierData = {
  code: ?string,
  name: ?string,
  type?: 'airline' | 'bus' | 'train',
};

type Size = 'small' | 'medium' | 'large';

export type Props = {|
  +size?: Size,
  +carriers: CarrierData[],
|};
