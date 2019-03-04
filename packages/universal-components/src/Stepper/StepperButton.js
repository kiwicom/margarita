// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import { Icon } from '../Icon';
import { Touchable } from '../Touchable';
import { StyleSheet } from '../PlatformStyleSheet';
import type { StylePropType } from '../PlatformStyleSheet/StyleTypes';

type ButtonProps = {|
  +icon: React.Element<typeof Icon>,
  +onPress: () => void,
  +touchable?: boolean,
  +style?: StylePropType,
|};

export default function StepperButton({
  icon,
  onPress,
  touchable = true,
  style,
}: ButtonProps) {
  const inner = (
    <View
      style={[styles.button, touchable ? null : styles.buttonDisabled, style]}
    >
      {icon}
    </View>
  );

  if (touchable) {
    return <Touchable onPress={onPress}>{inner}</Touchable>;
  }

  return inner;
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 28,
    height: 28,
    borderRadius: 6,
    backgroundColor: defaultTokens.paletteCloudNormal,
  },
  buttonDisabled: {
    opacity: parseFloat(defaultTokens.opacityButtonDisabled),
  },
});
