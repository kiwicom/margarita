// @flow

import * as React from 'react';
import { View } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import { Text } from '../../Text';
import { StyleSheet } from '../../PlatformStyleSheet';

type Props = {|
  +label: string,
  +value: string,
|};

export default class ControlContainerItem extends React.Component<Props> {
  render() {
    const { label, value } = this.props;
    return (
      <View style={styles.outerContainer}>
        <View style={styles.arrow} />
        <View style={styles.borderedContainer}>
          <View style={styles.innerContainer}>
            <View style={styles.dot} />
            <View>
              <Text style={styles.label}>{label}</Text>
              <Text style={styles.date} weight="bold">
                {value}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
  },
  borderedContainer: {
    borderWidth: parseFloat(defaultTokens.borderWidthInput),
    borderColor: defaultTokens.borderColorButtonInfoBordered,
    borderRadius: parseFloat(defaultTokens.borderRadiusLarge),
    height: 58,
    paddingHorizontal: parseFloat(defaultTokens.spaceXSmall),
    backgroundColor: defaultTokens.backgroundModal,
    justifyContent: 'center',
  },
  arrow: {
    width: 14,
    height: 14,
    position: 'absolute',
    transform: [{ rotate: '45deg' }],
    zIndex: -1,
    backgroundColor: defaultTokens.borderColorButtonInfoBordered,
    start: '50%',
    marginStart: -9,
    top: -6,
  },
  innerContainer: {
    flexDirection: 'row',
  },
  label: {
    color: defaultTokens.colorTextInfo,
    marginBottom: 5,
  },
  date: {
    color: defaultTokens.colorTextAttention,
  },
  dot: {
    width: 6,
    height: 6,
    backgroundColor: defaultTokens.backgroundButtonInfo,
    borderRadius: parseFloat(defaultTokens.borderRadiusNormal),
    marginTop: 5,
    marginEnd: 5,
  },
});
