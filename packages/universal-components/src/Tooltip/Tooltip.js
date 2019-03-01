// @flow

import * as React from 'react';
import { Dimensions, View } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import type { ViewLayoutEvent } from 'react-native/Libraries/Components/View/ViewPropTypes';

import TooltipBubble from './TooltipBubble';
import { StyleSheet } from '../PlatformStyleSheet';

type Props = {|
  +isActive?: boolean,
  +arrowHorizontalPosition?: 'flex-start' | 'center' | 'flex-end',
  +children: React.Node,
  +text: string,
  +verticalShift?: number,
|};

type State = {|
  elementY: number,
  childrenHeight: number,
|};

export default class Tooltip extends React.Component<Props, State> {
  static defaultProps = {
    isActive: false,
    arrowHorizontalPosition: 'center',
    verticalShift: 0,
  };

  state = {
    elementY: 0,
    childrenHeight: 0,
  };

  setElementPlacement = (event: ViewLayoutEvent) => {
    const { y, height } = event.nativeEvent.layout;
    const { elementY, childrenHeight: oldChildrenHeight } = this.state;
    const newY = Math.round(y);
    const newChildrenHeight = Math.round(height);
    const changedState = {};
    if (elementY !== newY) {
      changedState.elementY = newY;
    }
    if (newChildrenHeight !== oldChildrenHeight) {
      changedState.childrenHeight = newChildrenHeight;
    }
    if (Object.keys(changedState).length !== 0) {
      this.setState(changedState);
    }
  };

  getArrowVerticalPosition = (isArrowDown: boolean) =>
    isArrowDown ? 'flex-start' : 'flex-end';

  calculateVerticalShift = (childrenHeight: number) => {
    const { verticalShift } = this.props;
    return verticalShift + childrenHeight;
  };

  render() {
    const screenHeight = Dimensions.get('window').height;
    const { arrowHorizontalPosition, children, isActive, text } = this.props;
    const { elementY, childrenHeight } = this.state;
    const isArrowDown = screenHeight / 2 > elementY;
    const displayTooltipBubble = isActive && childrenHeight !== 0;
    const tooltipBubbleArrowPositionStyle = isArrowDown
      ? styles.tooltipBubbleArrowDown
      : styles.tooltipBubbleArrowUp;

    return (
      <View onLayout={this.setElementPlacement} style={styles.tooltipComponent}>
        <View renderToHardwareTextureAndroid>{children}</View>
        {displayTooltipBubble && (
          <TooltipBubble
            text={text}
            arrowVerticalPosition={this.getArrowVerticalPosition(isArrowDown)}
            arrowHorizontalPosition={arrowHorizontalPosition}
            style={[styles.tooltipBubble, tooltipBubbleArrowPositionStyle]}
            verticalShift={this.calculateVerticalShift(childrenHeight)}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tooltipComponent: {
    position: 'relative',
    zIndex: parseFloat(defaultTokens.zIndexModalOverlay),
  },
  tooltipBubble: {
    position: 'absolute',
    zIndex: parseFloat(defaultTokens.zIndexModal),
    opacity: 1,
  },
  tooltipBubbleArrowDown: { top: 0 },
  tooltipBubbleArrowUp: { bottom: 0 },
});
