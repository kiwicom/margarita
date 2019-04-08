// @flow

import * as React from 'react';
import { View } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import { Icon } from '../Icon';
import { StyleSheet } from '../PlatformStyleSheet';
import ButtonTitle from './ButtonTitle';
import type { ButtonType, ButtonSize } from './ButtonTypes';
import { textColor } from './styles';
import type { IconSize } from '../Icon/IconTypes';

type Props = {|
  +type?: ButtonType,
  +children?: React.Node,
  +leftIcon?: React.Element<typeof Icon> | null,
  +rightIcon?: React.Element<typeof Icon> | null,
  +sublabel?: React.Node,
  +label?: React.Node,
  +size?: ButtonSize,
|};

const styleIcon = (
  icon: ?React.Element<typeof Icon>,
  type: ButtonType,
  size: IconSize,
): React.Element<typeof Icon> | null => {
  return icon
    ? React.cloneElement(icon, {
        color: textColor[type],
        size: size,
      })
    : null;
};

export default function ButtonContent({
  type = 'primary',
  children,
  leftIcon: originalLeftIcon,
  rightIcon: originalRightIcon,
  sublabel,
  label,
  size,
}: Props) {
  const iconSize = size === 'normal' || size === 'large' ? 'medium' : 'small';
  const leftIcon = styleIcon(originalLeftIcon, type, iconSize);
  const rightIcon = styleIcon(originalRightIcon, type, iconSize);

  const leftSpace = size === 'large' ? styles.leftSpaceLarge : styles.leftSpace;
  const rightSpace =
    size === 'large' ? styles.rightSpaceLarge : styles.rightSpace;

  return (
    <>
      <View style={styles.row}>
        {leftIcon != null && <View style={rightSpace}>{leftIcon}</View>}
        {children ||
          (label != null && (
            <ButtonTitle text={label} type={type} size={size} />
          ))}
      </View>
      <View style={styles.row}>
        {sublabel != null && (
          <View style={styles.row}>
            <ButtonTitle text={sublabel} type={type} variant="sublabel" />
          </View>
        )}
        {rightIcon != null && <View style={leftSpace}>{rightIcon}</View>}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
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
