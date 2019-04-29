// @flow

import * as React from 'react';
import { View } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import { Icon } from '../Icon';
import { StyleSheet } from '../PlatformStyleSheet';
import type { ButtonType, ButtonSize } from './ButtonTypes';
import { wrapperColor } from './styles';
import { size as buttonSizeStyle } from './styles/shared';
import type { StylePropType } from '../PlatformStyleSheet/StyleTypes';
import { Loader } from '../Loader';
import ButtonContent from './ButtonContent';

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
  +isLoading?: boolean,
|};

export default function ButtonInner({
  disabled = false,
  type = 'primary',
  testID: testIDProps,
  children,
  leftIcon,
  rightIcon,
  sublabel,
  label,
  circled,
  size,
  style,
  isLoading,
}: Props) {
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
        styles.buttonWrapper,
        disabled && styles.disabled,
        typeTheme(type).wrapper,
        justifyContent,
        circled && styles.buttonCircled,
        sizeTheme(size, leftIcon != null, rightIcon != null).buttonSizeWrapper,
        style,
        isLoading && styles.loadingState,
      ]}
      testID={testID}
    >
      <Loader
        size={size === 'large' ? 'large' : 'small'}
        color={
          type === 'secondary' || type === 'google'
            ? defaultTokens.paletteProductNormal
            : defaultTokens.paletteWhite
        }
        isVisible={isLoading}
      />
      {!isLoading && (
        <ButtonContent
          type={type}
          children={children}
          leftIcon={leftIcon}
          rightIcon={rightIcon}
          sublabel={sublabel}
          label={label}
          size={size}
        />
      )}
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
});

const styles = StyleSheet.create({
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
  loadingState: {
    opacity: 0.5,
    flexDirection: 'column',
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
    // eslint-disable-next-line react-native/no-unused-styles
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
