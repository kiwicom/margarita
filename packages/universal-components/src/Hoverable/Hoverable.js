// @flow

import * as React from 'react';
import { Platform } from 'react-native';

import HoverMonitor from './HoverMonitor';

type Props = {|
  +disabled?: boolean,
  +children: React.Node,
  +onMouseEnter?: () => void,
  +onMouseLeave?: () => void,
|};

const hoverMonitor = HoverMonitor();

class Hoverable extends React.Component<Props> {
  componentDidMount() {
    // eslint-disable-next-line no-console
    console.warn(
      'This component is deprecated and will be removed in a future release. Please use withHover instead',
    );
  }

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
    const { disabled, children } = this.props;
    if (!disabled && Platform.OS === 'web' && React.isValidElement(children)) {
      return React.cloneElement(React.Children.only(children), {
        onMouseEnter: this.handleOnMouseEnter,
        onMouseLeave: this.handleOnMouseLeave,
      });
    }
    return children;
  }
}

export default Hoverable;
