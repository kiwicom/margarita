// @flow

import * as React from 'react';
import { View } from 'react-native';

import Icon from '../Icon';
import StyleSheet from '../PlatformStyleSheet/index';
import { type StylePropType } from '../PlatformStyleSheet/StyleTypes';
import GenericButtonWrapper from './GenericButtonWrapper';
import ButtonTitle from './ButtonTitle';
import type { ButtonType } from './ButtonTypes';
import { textColor } from './styles';

type Props = {|
  +children: React.Node,
  +onPress: () => void,
  +style?: StylePropType,
  +disabled?: boolean,
  +type?: ButtonType,
  +leftIcon?: React.Element<typeof Icon> | null,
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
  leftIcon: originalleftIcon,
  rightIcon: originalRightIcon,
  sublabel,
}: Props) {
  const type = disabled ? 'disabled' : originalType;
  const leftIcon = originalleftIcon
    ? React.cloneElement(originalleftIcon, { color: textColor[type] })
    : originalleftIcon;
  const rightIcon = originalRightIcon
    ? React.cloneElement(originalRightIcon, { color: textColor[type] })
    : originalRightIcon;
  let justifyContent = layout.default;
  if (leftIcon != null) {
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
          {leftIcon != null && (
            <View style={layout.rightSpace}>{leftIcon}</View>
          )}
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
