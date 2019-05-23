// @flow

import * as React from 'react';
import {
  StyleSheet,
  TouchableWithoutFeedback,
} from '@kiwicom/universal-components';
import { View } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { type TripType } from '@kiwicom/margarita-config';

import Text from '../text/Text';

type Props = {|
  +type: TripType,
  +label: string,
  +selected: boolean,
  +onSelect: (type: TripType) => void | Promise<void>,
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
          <Text
            weight="bold"
            style={[styles.switch, selected && styles.selectedSwitch]}
          >
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
    color: defaultTokens.paletteInkLightHover,
    marginEnd: parseInt(defaultTokens.spaceSmall, 10),
  },
  selectedSwitch: {
    color: defaultTokens.paletteInkNormal,
  },
});
