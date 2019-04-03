// @flow

import * as React from 'react';
import { View } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import { Icon } from '../Icon';
import { StyleSheet } from '../PlatformStyleSheet';
import ButtonTitle from './ButtonTitle';
import type { ButtonType, ButtonSize } from './ButtonTypes';
import { textColor, wrapperColor } from './styles';
import { size as buttonSizeStyle } from './styles/shared';
import type { StylePropType } from '../PlatformStyleSheet/StyleTypes';

type Props = {|
  +children?: React.Node,
  +disabled?: boolean,
  +type?: ButtonType,
  +leftIcon?: React.Element<typeof Icon> | null,
  +rightIcon?: React.Element<typeof Icon> | null,
  +testID?: string,
  +sublabel?: React.Node,
  +label?: React.Node,
  +circled?: boolean,
  +size?: ButtonSize,
  +style?: StylePropType,
|};

export default function ButtonInner({
  disabled = false,
  type = 'primary',
  testID: testIDProps,
  children,
  leftIcon: originalLeftIcon,
  rightIcon: originalRightIcon,
  sublabel,
  label,
  circled,
  size,
  style,
}: Props) {
  const iconSize = size === 'normal' || size === 'large' ? 'medium' : 'small';
  const leftIcon = originalLeftIcon
    ? React.cloneElement(originalLeftIcon, {
        color: textColor[type],
        size: iconSize,
      })
    : originalLeftIcon;
  const rightIcon = originalRightIcon
    ? React.cloneElement(originalRightIcon, {
        color: textColor[type],
        size: iconSize,
      })
    : originalRightIcon;
  let justifyContent = layout.default;
  if (leftIcon != null) {
    justifyContent = layout.flexStart;
  }
  if (rightIcon != null || sublabel != null) {
    justifyContent = layout.spaceBetween;
  }

  let testID;
  if (testIDProps != null) {
    testID = `ButtonInner${testIDProps}`;
  }

  const leftSpace = size === 'large' ? layout.leftSpaceLarge : layout.leftSpace;
  const rightSpace =
    size === 'large' ? layout.rightSpaceLarge : layout.rightSpace;
  return (
    <View
      style={[
        styleSheet.buttonWrapper,
        disabled && styleSheet.disabled,
        typeTheme(type).wrapper,
        justifyContent,
        circled && styleSheet.buttonCircled,
        sizeTheme(size, leftIcon != null, rightIcon != null).buttonSizeWrapper,
        style,
      ]}
      testID={testID}
    >
      <View style={layout.row}>
        {leftIcon != null && <View style={rightSpace}>{leftIcon}</View>}
        {children ||
          (label != null && (
            <ButtonTitle text={label} type={type} size={size} />
          ))}
      </View>
      <View style={layout.row}>
        {sublabel != null && (
          <View style={layout.row}>
            <ButtonTitle text={sublabel} type={type} variant="sublabel" />
          </View>
        )}
        {rightIcon != null && <View style={leftSpace}>{rightIcon}</View>}
      </View>
    </View>
  );
}

const layout = StyleSheet.create({
  default: {
    justifyContent: 'center',
  },
  spaceBetween: {
    justifyContent: 'space-between',
    web: {
      justifyContent: 'center',
    },
  },
  flexStart: {
    justifyContent: 'flex-start',
    web: {
      justifyContent: 'center',
    },
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftSpace: {
    marginStart: parseInt(defaultTokens.marginButtonIconNormal, 10),
  },
  leftSpaceLarge: {
    marginStart: parseInt(defaultTokens.marginButtonIconLarge, 10),
  },
  rightSpace: {
    marginEnd: parseInt(defaultTokens.marginButtonIconNormal, 10),
  },
  rightSpaceLarge: {
    marginEnd: parseInt(defaultTokens.marginButtonIconLarge, 10),
  },
});

const styleSheet = StyleSheet.create({
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 11,
    borderRadius: parseInt(defaultTokens.borderRadiusLarge, 10),
  },
  buttonCircled: {
    borderRadius: parseInt(defaultTokens.heightButtonNormal, 10) / 2,
  },
  disabled: {
    opacity: 0.5,
  },
});

const typeTheme = (type: ButtonType = 'primary') =>
  StyleSheet.create({
    wrapper: {
      backgroundColor: wrapperColor[type],
    },
  });

const sizeTheme = (
  size: ButtonSize = 'normal',
  leftIcon: boolean,
  rightIcon: boolean,
) =>
  StyleSheet.create({
    buttonSizeWrapper: {
      height: buttonSizeStyle[size].height,
      paddingStart: leftIcon
        ? buttonSizeStyle[size].paddingWithIcon
        : buttonSizeStyle[size].padding,
      paddingEnd: rightIcon
        ? buttonSizeStyle[size].paddingWithIcon
        : buttonSizeStyle[size].padding,
    },
  });
