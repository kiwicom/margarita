// @flow

import React from 'react';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import { Animated } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import { designTokens } from '../../DesignTokens';
import { StyleSheet } from '../../PlatformStyleSheet';
import type { GrabbedSideType, XY } from '../RangeDatePickerTypes';
import type { OnDragEvent, OnDropEvent } from '../../types';

type Props = {
  +onDrag: (OnDragEvent, GrabbedSideType, boolean) => void,
  +onDrop: () => void,
  +grabbedSide: GrabbedSideType,
  +isChoosingPastDatesEnabled: boolean,
};

export default class DraggableItem extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.translateX = new Animated.Value(0);
    this.translateY = new Animated.Value(0);
    this.lastOffset = { x: 0, y: 0 };
    this.onGestureEvent = Animated.event(
      [
        {
          nativeEvent: {
            translationX: this.translateX,
            translationY: this.translateY,
          },
        },
      ],
      {
        useNativeDriver: true,
        listener: this.onDrag,
      },
    );
  }

  lastOffset: XY;
  translateY: Animated.Value;
  translateX: Animated.Value;
  onGestureEvent: OnDragEvent;

  onDrag = (event: OnDragEvent) => {
    this.props.onDrag(
      event,
      this.props.grabbedSide,
      this.props.isChoosingPastDatesEnabled,
    );
  };

  onHandlerStateChange = (event: OnDropEvent) => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      this.props.onDrop();
      this.lastOffset.x += event.nativeEvent.translationX;
      this.lastOffset.y += event.nativeEvent.translationY;
      this.translateX.setOffset(this.lastOffset.x);
      this.translateX.setValue(0);
      this.translateY.setOffset(this.lastOffset.y);
      this.translateY.setValue(0);
    }
  };

  render() {
    return (
      <PanGestureHandler
        {...this.props}
        onGestureEvent={this.onGestureEvent}
        onHandlerStateChange={this.onHandlerStateChange}
      >
        <Animated.View
          style={[
            styles.box,
            {
              transform: [
                { translateX: this.translateX },
                { translateY: this.translateY },
              ],
            },
            this.props.grabbedSide === 'left'
              ? styles.draggableItemLeft
              : styles.draggableItemRight,
          ]}
        />
      </PanGestureHandler>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    width: designTokens.widthDraggableCalendarItem,
    height: designTokens.heightCalendarItem,
    zIndex: parseFloat(defaultTokens.zIndexOnTheTop),
    position: 'absolute',
  },
  draggableItemLeft: {
    start: -designTokens.widthDraggableCalendarItem / 2,
  },
  draggableItemRight: {
    end: -designTokens.widthDraggableCalendarItem / 2,
  },
});
