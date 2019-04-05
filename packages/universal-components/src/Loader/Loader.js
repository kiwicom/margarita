// @flow strict

import * as React from 'react';
import { ActivityIndicator } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

type Props = {|
  +size?: 'large' | 'small',
  +color?: string,
  +animating?: boolean,
|};

export default function Loader({
  size = 'small',
  color = defaultTokens.paletteProductNormal,
  animating = true,
}: Props) {
  return <ActivityIndicator size={size} color={color} animating={animating} />;
}
