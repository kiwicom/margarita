// @flow

import * as React from 'react';
import { View } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import { Text } from '../../Text';
import { StyleSheet, type StylePropType } from '../../PlatformStyleSheet';
import { TouchableWithoutFeedback } from '../../TouchableWithoutFeedback';

type Props = {|
  +label: string,
  +value: string,
  +active?: boolean,
  +style?: StylePropType,
  +tabId: number,
  +onPress: number => void,
|};

export default class ControlContainerItem extends React.Component<Props> {
  static defaultProps = {
    active: false,
  };

  onPress = () => {
    this.props.onPress(this.props.tabId);
  };

  render() {
    const { label, value, active, style } = this.props;
    return (
      <View style={[styles.flexContainer]}>
        <TouchableWithoutFeedback
          onPress={this.onPress}
          style={styles.flexContainer}
        >
          <View style={[styles.outerContainer, style]}>
            {active && <View style={styles.arrow} />}
            <View
              style={[
                styles.borderedContainer,
                active && styles.borderedContainerActive,
              ]}
            >
              <View style={styles.innerContainer}>
                {active ? (
                  <>
                    <View style={styles.dot} />
                    <View>
                      <Text style={styles.label}>{label}</Text>
                      <Text style={styles.date} weight="bold">
                        {value}
                      </Text>
                    </View>
                  </>
                ) : (
                  <Text style={styles.placeholder}>{label}</Text>
                )}
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
  },
  outerContainer: {
    flex: 1,
  },
  borderedContainer: {
    borderWidth: parseFloat(defaultTokens.borderWidthInput),
    borderColor: defaultTokens.paletteInkLight,
    borderRadius: parseFloat(defaultTokens.borderRadiusLarge),
    height: 58,
    paddingHorizontal: parseFloat(defaultTokens.spaceXSmall),
    backgroundColor: defaultTokens.backgroundModal,
    justifyContent: 'center',
  },
  borderedContainerActive: {
    borderColor: defaultTokens.borderColorButtonInfoBordered,
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
    android: {
      marginBottom: 0,
    },
  },
  placeholder: {
    color: defaultTokens.colorTextSecondary,
    marginStart: 10,
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
