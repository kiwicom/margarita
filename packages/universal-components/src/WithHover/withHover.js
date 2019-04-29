// @flow

import * as React from 'react';
import { View } from 'react-native';

type HoverProps = {
  +isHovered: boolean,
};

type WithHoverState = {|
  +isHovered: boolean,
|};

export default function withHover<Config: { isHovered: boolean }>(
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
      this.setState({ isHovered: true });
    };

    handleOnMouseLeave = () => {
      this.setState({ isHovered: false });
    };

    render() {
      return (
        <View
          onMouseEnter={this.handleOnMouseEnter}
          onMouseLeave={this.handleOnMouseLeave}
        >
          <Component {...this.props} isHovered={this.state.isHovered} />
        </View>
      );
    }
  };
}
