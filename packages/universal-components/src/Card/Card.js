// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import { StyleSheet } from '../PlatformStyleSheet';
import { Touchable } from '../Touchable';
import type { StylePropType } from '../PlatformStyleSheet/StyleTypes';

type Props = {|
  +children: React.Node,
  +onPress?: () => void,
  +style?: StylePropType,
  +delayPressIn?: number,
|};

export default function Card({
  children,
  onPress,
  style,
  delayPressIn,
}: Props) {
  if (onPress) {
    return (
      <Touchable
        style={[styles.wrapper, style]}
        onPress={onPress}
        delayPressIn={delayPressIn}
      >
        {children}
      </Touchable>
    );
  }

  return <View style={[styles.wrapper, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: defaultTokens.paletteWhite,
    borderStyle: 'solid',
    padding: 10,
    android: {
      marginHorizontal: 8,
      elevation: 1,
      borderRadius: 3,
      overflow: 'hidden',
    },
    web: {
      marginHorizontal: 8,
      borderRadius: 8,
      overflow: 'hidden',
    },
    ios: {
      borderTopWidth: StyleSheet.hairlineWidth,
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderColor: defaultTokens.paletteCloudNormal,
    },
  },
});
