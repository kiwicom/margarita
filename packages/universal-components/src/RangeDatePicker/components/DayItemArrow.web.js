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
    const { onPress, style, direction } = this.props;
    return (
      <View style={[styles.container, style]}>
        <ExtendedTouchable overlap={20} onPress={onPress}>
          <View
            style={[
              styles.container,
              direction === 'left'
                ? styles.containerShadowLeft
                : styles.containerShadowRight,
            ]}
          >
            <SimpleArrow
              direction={direction}
              style={[
                styles.arrow,
                direction === 'left' ? styles.arrowLeft : styles.arrowRight,
              ]}
            />
          </View>
        </ExtendedTouchable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    zIndex: parseFloat(defaultTokens.zIndexDefault),
    backgroundColor: defaultTokens.backgroundBadgeDark,
    borderRadius: parseFloat(defaultTokens.borderRadiusSmall),
    height: 40,
    width: 12,
    position: 'absolute',
  },
  containerShadowLeft: {
    web: {
      boxShadow: '3px 0 2px -1px rgba(0,0,0,0.3)',
    },
  },
  containerShadowRight: {
    web: {
      boxShadow: '-3px 0 2px -1px rgba(0,0,0,0.3)',
    },
  },
  arrow: {
    marginTop: 17,
    position: 'absolute',
  },
  arrowLeft: {
    start: 0,
  },
  arrowRight: {
    end: 0,
  },
});
