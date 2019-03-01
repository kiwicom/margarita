// @flow strict

import * as React from 'react';
import { ActivityIndicator } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

type Props = {|
  +size?: 'large' | 'small',
|};

export default function Loader({ size = 'small' }: Props) {
  return (
    <ActivityIndicator size={size} color={defaultTokens.paletteProductNormal} />
  );
}
