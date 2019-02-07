// @flow

import * as React from 'react';
import { StyleSheet, Text } from '@kiwicom/universal-components';
import { View } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import TouchableWithoutFeedback from '../TouchableWithoutFeedback';

type Props = {|
  +type: string,
  +label: string,
  +selected: boolean,
  +onSelect: (type: string) => void,
|};

export default class TripTypeSwitchOption extends React.Component<Props> {
  handlePress = () => {
    const { onSelect, type } = this.props;
    onSelect(type);
  };

  render() {
    const { label, selected } = this.props;
    return (
      <TouchableWithoutFeedback onPress={this.handlePress}>
        <View>
          <Text style={[styles.switch, selected && styles.slectedSwitch]}>
            {label.toUpperCase()}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  switch: {
    fontSize: parseInt(defaultTokens.fontSizeTextNormal, 10),
    fontWeight: 'bold',
    color: defaultTokens.paletteInkLightHover,
    marginEnd: parseInt(defaultTokens.spaceSmall, 10),
  },
  slectedSwitch: {
    color: defaultTokens.paletteInkNormal,
  },
});
