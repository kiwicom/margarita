// @flow

import * as React from 'react';
import { View } from 'react-native';
import {
  Icon,
  Stepper,
  StyleSheet,
  type IconNameType,
} from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import Text from '../text/Text';

type Props = {|
  +icon: IconNameType,
  +label: string,
  +value: number,
  +min?: number,
  +max?: number,
  +underline?: boolean,
  +onChange: (updateValue: number) => void,
|};

class PassengersInputsLine extends React.Component<Props> {
  handleDecrement = () => {
    this.props.onChange(-1);
  };

  handleIncrement = () => {
    this.props.onChange(1);
  };

  render() {
    const { icon, label, value, min, max, underline } = this.props;
    return (
      <View style={styles.line}>
        <View style={styles.icon}>
          <Icon
            name={icon}
            color={defaultTokens.colorIconSecondary}
            size="medium"
          />
        </View>
        <View style={[styles.counter, underline && styles.counterUnderline]}>
          <Text style={styles.label}>{label}</Text>
          <Stepper
            onDecrement={this.handleDecrement}
            onIncrement={this.handleIncrement}
            number={value}
            showNumber
            numberStyle={styles.stepperNumber}
            min={min}
            max={max}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  line: {
    flexDirection: 'row',
    height: parseInt(defaultTokens.heightInputNormal, 10),
  },
  icon: {
    paddingHorizontal: parseInt(defaultTokens.spaceSmall, 10),
    justifyContent: 'center',
  },
  counter: {
    flex: 1,
    paddingEnd: parseInt(defaultTokens.spaceSmall, 10),
    flexDirection: 'row',
    alignItems: 'center',
  },
  counterUnderline: {
    borderBottomColor: defaultTokens.paletteInkLighter,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  label: {
    flex: 1,
    fontSize: parseInt(defaultTokens.fontSizeTextLarge, 10),
    color: defaultTokens.colorTextAttention,
  },
  stepperNumber: {
    width: parseInt(defaultTokens.spaceXXXLarge, 10),
    textAlign: 'center',
    fontSize: parseInt(defaultTokens.fontSizeTextNormal, 10),
    color: defaultTokens.colorTextAttention,
  },
});

export default PassengersInputsLine;
