// @flow

import * as React from 'react';
import { View } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import Icon from '@kiwicom/react-native-orbit-icons';

import StyleSheet from '../PlatformStyleSheet/index';
import { type StylePropType } from '../PlatformStyleSheet/StyleTypes';
import GenericButtonWrapper from './GenericButtonWrapper';
import ButtonTitle from './ButtonTitle';
import type { ButtonType } from './ButtonTypes';

type Props = {|
  +children: React.Node,
  +onPress: () => void,
  +style?: StylePropType,
  +disabled?: boolean,
  +type?: ButtonType,
  +icon?: React.Element<typeof Icon> | null,
  +rightIcon?: React.Element<typeof Icon> | null,
  +testID?: string,
  +sublabel?: React.Node,
|};

export default function Button({
  onPress,
  disabled = false,
  type: originalType = 'primary',
  style,
  testID,
  children,
  icon: originalIcon,
  rightIcon: originalRightIcon,
  sublabel,
}: Props) {
  const type = disabled ? 'disabled' : originalType;
  const icon = originalIcon
    ? React.cloneElement(originalIcon, { color: iconTheme[type] })
    : originalIcon;
  const rightIcon = originalRightIcon
    ? React.cloneElement(originalRightIcon, { color: iconTheme[type] })
    : originalRightIcon;
  let justifyContent = layout.default;
  if (icon != null) {
    justifyContent = layout.flexStart;
  }
  if (rightIcon != null || sublabel != null) {
    justifyContent = layout.spaceBetween;
  }

  return (
    <GenericButtonWrapper
      disabled={!onPress || disabled}
      onPress={onPress}
      testID={testID}
      type={type}
      style={[justifyContent, style]}
    >
      <React.Fragment>
        <View style={layout.row}>
          {icon != null && <View style={layout.rightSpace}>{icon}</View>}
          <ButtonTitle text={children} type={type} />
        </View>
        <View style={layout.row}>
          {sublabel != null && (
            <View style={layout.row}>
              <ButtonTitle text={sublabel} type={type} variant="sublabel" />
            </View>
          )}
          {rightIcon != null && (
            <View style={layout.leftSpace}>{rightIcon}</View>
          )}
        </View>
      </React.Fragment>
    </GenericButtonWrapper>
  );
}

const iconTheme = {
  primary: defaultTokens.colorTextButtonPrimary,
  secondary: defaultTokens.colorTextButtonSecondary,
  info: defaultTokens.paletteBlueNormal,
  success: defaultTokens.paletteProductNormal,
  warning: defaultTokens.colorTextButtonWarning,
  critical: defaultTokens.colorTextButtonCritical,
  facebook: defaultTokens.colorTextButtonFacebook,
  google: defaultTokens.colorTextButtonGoogle,
  disabled: defaultTokens.paletteInkLighter,
};

const layout = StyleSheet.create({
  default: {
    justifyContent: 'center',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  flexStart: {
    justifyContent: 'flex-start',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftSpace: {
    marginStart: 5,
  },
  rightSpace: {
    marginEnd: 14,
  },
});
