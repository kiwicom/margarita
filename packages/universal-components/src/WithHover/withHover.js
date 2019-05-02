// @flow

import * as React from 'react';

import HoverMonitor from './HoverMonitor';

type HoverProps = {
  +isHovered: boolean,
  +onMouseEnter: () => void,
  +onMouseLeave: () => void,
};

type WithHoverState = {|
  +isHovered: boolean,
|};

const hoverMonitor = HoverMonitor();

export default function withHover<Config: HoverProps>(
  Component: React.AbstractComponent<Config>,
): React.AbstractComponent<$Diff<Config, HoverProps>> {
  return class WithHover extends React.Component<
    $Diff<Config, HoverProps>,
    WithHoverState,
  > {
    state = {
      isHovered: false,
    };

    handleOnMouseEnter = () => {
      if (hoverMonitor.hoverEnabled) {
        this.setState({ isHovered: true });
      }
    };

    handleOnMouseLeave = () => {
      this.setState({ isHovered: false });
    };

    render() {
      return (
        <Component
          {...this.props}
          isHovered={this.state.isHovered}
          onMouseEnter={this.handleOnMouseEnter}
          onMouseLeave={this.handleOnMouseLeave}
        />
      );
    }
  };
}
