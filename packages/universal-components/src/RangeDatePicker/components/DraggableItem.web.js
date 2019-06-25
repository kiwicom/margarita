// @flow

import React from 'react';
import { View } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { DraggableCore, type DraggableData, type Event } from 'react-draggable';

import { designTokens } from '../../DesignTokens';
import { TouchableWithoutFeedback } from '../../TouchableWithoutFeedback';
import type { GrabbedSideType, DayItemSizeType } from '../RangeDatePickerTypes';
import type { OnDragEvent } from '../../types';

type Props = {
  +onDrag: (OnDragEvent, GrabbedSideType, boolean) => void,
  +onDrop: () => void,
  +onPress: () => void,
  +grabbedSide: GrabbedSideType,
  +dayItemSize: DayItemSizeType,
  +isChoosingPastDatesEnabled: boolean,
  +isDragging: boolean,
};

export default class DraggableItem extends React.Component<Props> {
  componentDidMount() {
    window.document.body.addEventListener(
      'touchmove',
      this.handlePreventTouchmoveWhenPanning,
      {
        passive: false,
      },
    );
  }

  componentWillUnmount() {
    window.document.body.removeEventListener(
      'touchmove',
      this.handlePreventTouchmoveWhenPanning,
      {
        passive: false,
      },
    );
  }

  handlePreventTouchmoveWhenPanning = (event: SyntheticEvent<any>) => {
    if (this.props.isDragging) {
      event.preventDefault();
    }
  };

  handleDrag = (event: Event, data: DraggableData) => {
    this.props.onDrag(
      {
        nativeEvent: {
          translationX:
            data.lastX + data.deltaX - this.props.dayItemSize.width / 2,
          translationY:
            data.lastY + data.deltaY - this.props.dayItemSize.height / 2,
        },
      },
      this.props.grabbedSide,
      this.props.isChoosingPastDatesEnabled,
    );
  };

  handleStop = () => {
    this.props.onDrop();
  };

  render() {
    return (
      <DraggableCore onDrag={this.handleDrag} onStop={this.handleStop}>
        <TouchableWithoutFeedback onPress={this.props.onPress}>
          <View
            style={
              this.props.grabbedSide === 'left'
                ? styles.draggableItemLeft
                : styles.draggableItemRight
            }
          />
        </TouchableWithoutFeedback>
      </DraggableCore>
    );
  }
}

const boxStyle = {
  width: designTokens.widthDraggableCalendarItem,
  height: designTokens.heightCalendarItem,
  zIndex: parseFloat(defaultTokens.zIndexOnTheTop),
  position: 'absolute',
};

// Can't use StyleSheets because of DraggableCore
const styles = {
  draggableItemLeft: {
    ...boxStyle,
    start: -designTokens.widthDraggableCalendarItem / 2,
    cursor: 'w-resize',
  },
  draggableItemRight: {
    ...boxStyle,
    end: -designTokens.widthDraggableCalendarItem / 2,
    cursor: 'e-resize',
  },
};
