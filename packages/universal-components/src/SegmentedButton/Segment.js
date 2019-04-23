// @flow

import * as React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import { Text } from '../Text';
import { StyleSheet } from '../PlatformStyleSheet';

export type Props = {|
  +label: string,
  +value: string,
  +first: boolean,
  +last: boolean,
  +active: boolean,
  +onPress: (value: string) => void,
|};

export default class Segment extends React.Component<Props> {
  handleOnPress = () => {
    const { value, onPress } = this.props;
    onPress(value);
  };

  render() {
    const { label, first, last, active } = this.props;
    return (
      <TouchableWithoutFeedback onPress={this.handleOnPress}>
        <View
          style={[
            styles.container,
            first && styles.containerFirst,
            last && styles.containerLast,
            active && styles.containerActive,
          ]}
        >
          <Text
            style={[styles.label, active && styles.labelActive]}
            align="center"
            numberOfLines={1}
          >
            {label}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const borderRadius = parseInt(defaultTokens.borderRadiusSmall, 10);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: parseInt(defaultTokens.heightInputNormal, 10),
    paddingHorizontal: parseInt(defaultTokens.spaceSmall, 10),
    backgroundColor: defaultTokens.paletteCloudLight,
    marginEnd: parseInt(defaultTokens.spaceXXXSmall, 10),
    overflow: 'hidden',
    web: {
      userSelect: 'none',
    },
  },
  containerFirst: {
    borderTopStartRadius: borderRadius,
    borderBottomStartRadius: borderRadius,
  },
  containerLast: {
    borderTopEndRadius: borderRadius,
    borderBottomEndRadius: borderRadius,
    marginEnd: 0,
  },
  containerActive: {
    backgroundColor: defaultTokens.paletteWhite,
  },
  label: {
    flex: 1,
    color: defaultTokens.paletteInkLight,
  },
  labelActive: {
    color: defaultTokens.paletteProductNormal,
  },
});
