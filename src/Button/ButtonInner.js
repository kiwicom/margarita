// @flow

import * as React from 'react';
import { View } from 'react-native';

import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { Icon } from '../Icon';
import { StyleSheet } from '../PlatformStyleSheet';
import ButtonTitle from './ButtonTitle';
import type { ButtonType } from './ButtonTypes';
import { textColor, wrapperColor } from './styles';

type Props = {|
  +children?: React.Node,
  +disabled?: boolean,
  +type?: ButtonType,
  +leftIcon?: React.Element<typeof Icon> | null,
  +rightIcon?: React.Element<typeof Icon> | null,
  +testID?: string,
  +sublabel?: React.Node,
  +label?: React.Node,
|};

export default function ButtonInner({
  disabled = false,
  type = 'primary',
  testID: testIDProps,
  children,
  leftIcon: originalleftIcon,
  rightIcon: originalRightIcon,
  sublabel,
  label,
}: Props) {
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

  let testID;
  if (testIDProps != null) {
    testID = `ButtonInner${testIDProps}`;
  }

  return (
    <View
      style={[
        styleSheet.buttonWrapper,
        disabled && styleSheet.disabled,
        theme(type).wrapper,
        justifyContent,
      ]}
      testID={testID}
    >
      <View style={layout.row}>
        {leftIcon != null && <View style={layout.rightSpace}>{leftIcon}</View>}
        {children || <ButtonTitle text={label} type={type} />}
      </View>
      <View style={layout.row}>
        {sublabel != null && (
          <View style={layout.row}>
            <ButtonTitle text={sublabel} type={type} variant="sublabel" />
          </View>
        )}
        {rightIcon != null && <View style={layout.leftSpace}>{rightIcon}</View>}
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
    marginStart: 5,
  },
  rightSpace: {
    marginEnd: 14,
  },
});

const styleSheet = StyleSheet.create({
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: parseInt(defaultTokens.spaceXSmall, 10),
    paddingVertical: 11,
    height: parseInt(defaultTokens.heightButtonNormal, 10),
    borderRadius: parseInt(defaultTokens.borderRadiusLarge, 10),
  },
  disabled: {
    opacity: 0.5,
  },
});

const theme = (type: ButtonType = 'primary') =>
  StyleSheet.create({
    wrapper: {
      backgroundColor: wrapperColor[type],
    },
  });
