// @flow

import * as React from 'react';
import { View } from 'react-native';
import { TouchableWithoutFeedback } from '@kiwicom/margarita-components';
import { Text, StyleSheet } from '@kiwicom/universal-components';
import Router from 'next/router';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

type Props = {|
  +label: string,
  +route: string,
|};

type State = {|
  +isActive: boolean,
|};

export default class NavbarLink extends React.Component<Props, State> {
  state = {
    isActive: false,
  };

  componentDidMount() {
    if (Router.route === this.props.route) {
      this.onMouseEnter();
    }
  }

  onMouseEnter = () => {
    this.setState({ isActive: true });
  };

  onMouseLeave = () => {
    if (Router.route !== this.props.route) {
      // If this is the active route, it should always stay marked as active
      this.setState({ isActive: false });
    }
  };

  onPress = () => {
    Router.push(this.props.route);
  };

  render() {
    return (
      <TouchableWithoutFeedback
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        onPress={this.onPress}
      >
        <View>
          <Text style={this.state.isActive && styles.active}>
            {this.props.label}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  active: {
    color: defaultTokens.colorTextLinkPrimaryHover,
  },
});
