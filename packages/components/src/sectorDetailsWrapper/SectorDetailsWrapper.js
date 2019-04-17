// @flow

import * as React from 'react';
import { Touchable, Icon, StyleSheet } from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { Animated } from 'react-native';

type Props = {|
  +children: React.Node,
|};

type State = {|
  +isExpanded: boolean,
  +isDisabled: boolean,
|};

export default class SectorDetailsWrapper extends React.Component<
  Props,
  State,
> {
  constructor() {
    super();

    this.state = {
      isExpanded: false,
      isDisabled: false,
    };

    this.spinValue = new Animated.Value(0);
  }

  spinValue: Animated.Value;

  toggleExpanded = () => {
    this.setState({ isDisabled: true }, () => {
      Animated.timing(this.spinValue, {
        toValue: this.state.isExpanded ? 0 : 1,
        duration: 250,
        useNativeDriver: true,
      }).start(() => {
        this.setState(state => ({
          isExpanded: !state.isExpanded,
          isDisabled: false,
        }));
      });
    });
  };

  render() {
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '180deg'],
    });

    return (
      <>
        <Touchable
          onPress={this.toggleExpanded}
          disabled={this.state.isDisabled}
        >
          <Animated.View
            style={[
              styles.iconWrapper,
              {
                transform: [{ rotate: spin }, { perspective: 1000 }],
              },
            ]}
          >
            <Icon
              name="chevron-down"
              color={defaultTokens.paletteProductNormal}
            />
          </Animated.View>
        </Touchable>
        {this.state.isExpanded && this.props.children}
      </>
    );
  }
}

const styles = StyleSheet.create({
  iconWrapper: {
    flex: 1,
    alignSelf: 'center',
  },
});
