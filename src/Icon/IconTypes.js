// @flow

type Size = 'small' | 'medium' | 'large';

export type Props = {|
  +name: string,
  size?: Size,
  color?: string,
|};
