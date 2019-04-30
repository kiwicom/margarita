// @flow

import * as React from 'react';
import { View } from 'react-native';
import {
  Text,
  StyleSheet,
  withHover,
  TouchableWithoutFeedback,
} from '@kiwicom/universal-components';
import Router from 'next/router';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

type Props = {|
  +label: string,
  +route: string,
  +isHovered: boolean,
  +onMouseLeave: () => void,
  +onMouseEnter: () => void,
|};

type State = {|
  +isActive: boolean,
|};

class NavbarLink extends React.Component<Props, State> {
  state = {
    isActive: false,
  };

  componentDidMount() {
    if (Router.route === this.props.route) {
      this.setState({ isActive: true });
    }
  }

  onPress = () => {
    Router.push(this.props.route);
  };

  render() {
    const { label, isHovered, onMouseEnter, onMouseLeave } = this.props;
    return (
      <TouchableWithoutFeedback
        onPress={this.onPress}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <View style={styles.container}>
          <Text
            size="small"
            type="primary"
            style={[
              styles.label,
              (isHovered || this.state.isActive) && styles.activeLabel,
            ]}
          >
            {label}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default withHover(NavbarLink);

const styles = StyleSheet.create({
  container: {
    marginHorizontal: parseInt(defaultTokens.spaceSmall, 10),
  },
  label: {
    web: {
      fontWeight: '500',
    },
  },
  activeLabel: {
    color: defaultTokens.colorTextLinkPrimaryHover,
  },
});
