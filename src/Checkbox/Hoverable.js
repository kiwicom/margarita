// @flow

import React, { Component } from 'react';
import { Platform } from 'react-native';
import type { HoverableProps } from './CheckboxTypes';
import HoverMonitor from './HoverMonitor';

const hoverMonitor = HoverMonitor();

class Hoverable extends Component<HoverableProps> {
  handleOnMouseEnter = () => {
    const { onMouseEnter } = this.props;
    if (onMouseEnter && hoverMonitor.hoverEnabled) {
      onMouseEnter();
    }
  };

  handleOnMouseLeave = () => {
    const { onMouseLeave } = this.props;
    if (onMouseLeave) {
      onMouseLeave();
    }
  };

  render() {
    const { children } = this.props;
    if (Platform.OS === 'web' && React.isValidElement(children)) {
      return React.cloneElement(React.Children.only(children), {
        onMouseEnter: this.handleOnMouseEnter,
        onMouseLeave: this.handleOnMouseLeave,
      });
    }
    return children;
  }
}

export default Hoverable;
