// @flow

import * as React from 'react';
import { Animated, Easing, View, InteractionManager } from 'react-native';

import { StyleSheet, type StylePropType } from '../../PlatformStyleSheet';
import { designTokens } from '../../DesignTokens';
import { ExtendedTouchable } from '../../ExtendedTouchable';

export type Props = {|
  +style?: StylePropType,
  +onPress?: () => void,
  +direction?: 'left' | 'right',
|};

const SHARED_ANIMATION_CONFIG = {
  duration: designTokens.durationArrowScaleAnimation,
  useNativeDriver: true,
  easing: Easing.ease,
};

const RenderArrows = ({ scale }) => (
  <View style={styles.touchableContainer}>
    <Animated.View
      style={[
        styles.easingArrow,
        {
          transform: [{ scale: scale ?? 0 }],
        },
      ]}
    />
    <View style={styles.innerArrow} />
  </View>
);

export default class DayItemArrow extends React.Component<Props> {
  static scale: Animated.Value = new Animated.Value(0);
  static animating: boolean;
  static numberOfInstances: number;

  static handleAnimation() {
    if (DayItemArrow.scale === undefined) {
      DayItemArrow.scale = new Animated.Value(0);
    }

    if (DayItemArrow.scale._value === 0) {
      Animated.sequence([
        Animated.timing(DayItemArrow.scale, {
          ...SHARED_ANIMATION_CONFIG,
          toValue: 1,
        }),
        Animated.timing(DayItemArrow.scale, {
          ...SHARED_ANIMATION_CONFIG,
          toValue: 0.1,
        }),
      ]).start(() => {
        DayItemArrow.scale.setValue(0);
        if (DayItemArrow.animating) {
          DayItemArrow.handleAnimation();
        }
      });
    }
  }

  componentDidMount() {
    DayItemArrow.scale.setValue(0);

    if (DayItemArrow.numberOfInstances === undefined) {
      DayItemArrow.numberOfInstances = 1;
    } else {
      DayItemArrow.numberOfInstances++;
    }
    InteractionManager.runAfterInteractions(() => {
      if (!DayItemArrow.animating && DayItemArrow.numberOfInstances !== 0) {
        DayItemArrow.animating = true;
        DayItemArrow.handleAnimation();
      }
    });
  }

  componentWillUnmount() {
    DayItemArrow.numberOfInstances--;
    if (DayItemArrow.numberOfInstances === 0) {
      DayItemArrow.animating = false;
    }
  }

  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        {this.props.onPress ? (
          <ExtendedTouchable overlap={20} onPress={this.props.onPress}>
            <RenderArrows scale={DayItemArrow.scale} />
          </ExtendedTouchable>
        ) : (
          <RenderArrows scale={DayItemArrow.scale} />
        )}
      </View>
    );
  }
}

const innerArrowSize = 8;
const easingArrowSize = 20;
const innerArrowMargin = (easingArrowSize - innerArrowSize) / 2;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    transform: [{ rotate: '45deg' }],
    zIndex: -1,
  },
  easingArrow: {
    backgroundColor: designTokens.backgroundDayItemEasingArrow,
    width: easingArrowSize,
    height: easingArrowSize,
    position: 'absolute',
  },
  innerArrow: {
    backgroundColor: designTokens.borderColorCalendarItem,
    width: innerArrowSize,
    height: innerArrowSize,
    position: 'absolute',
    marginStart: innerArrowMargin,
    marginTop: innerArrowMargin,
  },
});
