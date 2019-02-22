// @flow

import * as React from 'react';
import {
  Touchable,
  Icon,
  Text,
  StyleSheet,
} from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { Animated, Platform } from 'react-native';
import { graphql, createFragmentContainer } from '@kiwicom/margarita-relay';

import SegmentMap from './SegmentMap';
import type { SegmentContainer as BookingType } from './__generated__/SegmentContainer.graphql';

type Props = {|
  +data: ?BookingType,
|};

type State = {|
  +expandSegments: boolean,
  +isDisabled: boolean,
|};

export class SegmentContainer extends React.Component<Props, State> {
  constructor() {
    super();

    this.state = {
      expandSegments: false,
      isDisabled: false,
    };

    this.spinValue = new Animated.Value(0);
  }

  spinValue: Animated.Value;

  toggleExpanded = () => {
    this.setState({ isDisabled: true }, () => {
      Animated.timing(this.spinValue, {
        toValue: this.state.expandSegments ? 0 : 1,
        duration: 250,
        useNativeDriver: true,
      }).start(() => {
        this.setState(state => ({
          expandSegments: !state.expandSegments,
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
        {this.state.expandSegments && (
          <>
            <Text>TODO: Put segment data</Text>
            {Platform.OS !== 'web' && <SegmentMap data={this.props.data} />}
          </>
        )}
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

export default createFragmentContainer(
  SegmentContainer,
  graphql`
    fragment SegmentContainer on BookingInterface {
      ...SegmentMap
    }
  `,
);
