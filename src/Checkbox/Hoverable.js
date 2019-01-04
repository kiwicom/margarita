// @flow

import * as React from 'react';
import { Platform } from 'react-native';
import HoverMonitor from './HoverMonitor';

type Props = {|
  +children: React.Element<any>,
  +onMouseEnter?: () => void,
  +onMouseLeave?: () => void,
|};

const hoverMonitor = HoverMonitor();

class Hoverable extends React.Component<Props> {
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
