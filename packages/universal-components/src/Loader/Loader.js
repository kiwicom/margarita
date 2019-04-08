// @flow strict

import * as React from 'react';
import { ActivityIndicator } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

type Props = {|
  +size?: 'large' | 'small',
  +color?: string,
  +isVisible?: boolean,
|};

export default function Loader({
  size = 'small',
  color = defaultTokens.paletteProductNormal,
  isVisible = true,
}: Props) {
  return isVisible ? (
    <ActivityIndicator size={size} color={color} animating={isVisible} />
  ) : null;
}
