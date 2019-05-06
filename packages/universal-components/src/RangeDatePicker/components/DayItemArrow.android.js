// @flow

import * as React from 'react';
import { View } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import { StyleSheet, type StylePropType } from '../../PlatformStyleSheet';
import { ExtendedTouchable } from '../../ExtendedTouchable';
import { SimpleArrow } from './SimpleArrow';

export type Props = {|
  +style?: StylePropType,
  +onPress?: () => void,
  +direction?: 'left' | 'right',
|};

export default class DayItemArrow extends React.Component<Props> {
  render() {
    return (
      <View
        style={[
          styles.container,
          this.props.direction === 'left'
            ? styles.containerArrowLeft
            : styles.containerArrowRight,
          this.props.style,
        ]}
      >
        {this.props.onPress ? (
          <ExtendedTouchable overlap={20} onPress={this.props.onPress}>
            <SimpleArrow
              direction={this.props.direction}
              style={styles.arrow}
            />
          </ExtendedTouchable>
        ) : (
          <SimpleArrow direction={this.props.direction} style={styles.arrow} />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: parseFloat(defaultTokens.zIndexModalOverlay),
    width: 20,
    height: '100%',
    alignItems: 'center',
  },

  containerArrowLeft: {
    alignItems: 'flex-start',
  },
  containerArrowRight: {
    alignItems: 'flex-end',
  },
  arrow: {
    marginTop: 20,
  },
});
