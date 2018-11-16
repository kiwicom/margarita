// @flow

import * as React from 'react';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import Touchable from './Touchable';
import StyleSheet from '../PlatformStyleSheet';
import type { StylePropType } from '../PlatformStyleSheet/StyleTypes';
import type { ButtonType } from './ButtonTypes';

type Props = {|
  +children: React.Node,
  +onPress: () => void,
  +style?: StylePropType,
  +disabled?: boolean,
  +type: ButtonType,
  +testID?: string,
|};

/**
 * This is base component for generic button. You can pass anything to the
 * children so you should almost never use this component directly. There
 * are specialized components like 'TextButton' or 'LinkButton' for this.
 */
export default function Button({
  onPress,
  disabled = false,
  type = 'primary',
  style,
  testID,
  children,
}: Props) {
  const onPressHandler = onPress || (() => {});

  return (
    <Touchable
      disabled={!onPress || disabled}
      onPress={onPressHandler}
      style={[styleSheet.buttonWrapper, theme[type].wrapper, style]}
      accessibilityComponentType="button"
      accessibilityTraits="button"
      testID={testID}
    >
      {children}
    </Touchable>
  );
}

const styleSheet = StyleSheet.create({
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 11,
    height: 44,
    borderRadius: 6,
  },
});

const theme = {
  primary: StyleSheet.create({
    wrapper: {
      backgroundColor: defaultTokens.backgroundButtonPrimary,
    },
  }),
  secondary: StyleSheet.create({
    wrapper: {
      backgroundColor: defaultTokens.backgroundButtonSecondary,
    },
  }),
  info: StyleSheet.create({
    wrapper: {
      backgroundColor: defaultTokens.paletteBlueLight,
      web: {
        backgroundColor: defaultTokens.backgroundButtonInfo,
      },
    },
  }),
  success: StyleSheet.create({
    wrapper: {
      backgroundColor: defaultTokens.paletteProductLight,
      web: {
        backgroundColor: defaultTokens.backgroundButtonSuccess,
      },
    },
  }),
  warning: StyleSheet.create({
    wrapper: {
      backgroundColor: defaultTokens.backgroundButtonWarning,
    },
  }),
  critical: StyleSheet.create({
    wrapper: {
      backgroundColor: defaultTokens.backgroundButtonCritical,
    },
  }),
  facebook: StyleSheet.create({
    wrapper: {
      backgroundColor: defaultTokens.backgroundButtonFacebook,
    },
  }),
  google: StyleSheet.create({
    wrapper: {
      backgroundColor: defaultTokens.backgroundButtonGoogle,
    },
  }),
  disabled: StyleSheet.create({
    wrapper: {
      backgroundColor: defaultTokens.paletteCloudLight,
    },
  }),
};
