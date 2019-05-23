// @flow

import * as React from 'react';
import {
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';

import type { AccessibilityProps as AccessibilityPropsType } from './AccessibilityTypes';
import type { StylePropType } from '../PlatformStyleSheet/StyleTypes';

type Props = {|
  +children: React.Node,
  +onPress: () => void | Promise<void>,
  +disabled: boolean,
  +width?: number,
  +style?: StylePropType,
  +onLongPress?: () => void,
  +delayPressIn?: number,
  // This will disable ripple effect completely and it will fallback to the
  // opacity behavior.
  +noRipple?: boolean,
  // Should the ripple render outside of the view bounds?
  +borderlessRipple?: boolean,
  +rippleColor?: string,
  +testID?: string,
  ...AccessibilityPropsType,
|};

/**
 * Touchable renders a touchable that looks native on both iOS and Android.
 * It provides an abstraction on top of TouchableNativeFeedback and
 * TouchableOpacity. On iOS you can pass the props of TouchableOpacity, on
 * Android pass the props of TouchableNativeFeedback.
 */
export default class Touchable extends React.Component<Props> {
  static defaultProps = {
    borderlessRipple: false,
    rippleColor: 'rgba(0, 0, 0, 0.32)',
    disabled: false,
    accessibilityTraits: 'button',
    accessibilityComponentType: 'button',
  };

  /**
   * TouchableNativeFeedback.Ripple causes a crash on old Android versions,
   * therefore only enable it on Android Lollipop and above.
   */
  supportsRippleEffect = () => {
    const { noRipple } = this.props;
    if (noRipple === true) {
      return false;
    }
    return Platform.OS === 'android' && Platform.Version >= 21;
  };

  render() {
    const {
      children: childrenProps,
      onPress,
      style,
      onLongPress,
      delayPressIn,
      noRipple,
      borderlessRipple,
      rippleColor,
      testID,
      width,
      disabled,
      ...accessibilityProps
    } = this.props;

    const touchableNativeFeedbackProps = {
      disabled,
      onPress,
      onLongPress,
      delayPressIn,
      noRipple,
      testID,
      ...accessibilityProps,
    };

    const touchableOpacityProps = {
      disabled,
      onPress,
      onLongPress,
      delayPressIn,
      testID,
    };

    // React.Children.only is only necessary for TouchableNativeFeedback
    // but since we are building for both platforms it is here as well
    // to discover this mistake as soon as possible
    const children = React.Children.only(childrenProps);

    // All touchables on Android should have the ripple effect according to
    // platform design guidelines.
    if (this.supportsRippleEffect()) {
      let useForeground = TouchableNativeFeedback.canUseNativeForeground();
      if (borderlessRipple) {
        useForeground = false;
      }

      return (
        <TouchableNativeFeedback
          {...touchableNativeFeedbackProps}
          useForeground={useForeground}
          background={TouchableNativeFeedback.Ripple(
            rippleColor,
            borderlessRipple,
          )}
        >
          <View style={[style, { width: width }]}>{children}</View>
        </TouchableNativeFeedback>
      );
    }

    return (
      <TouchableOpacity activeOpacity={0.5} {...touchableOpacityProps}>
        <View style={[style, { width: width }]}>{children}</View>
      </TouchableOpacity>
    );
  }
}
