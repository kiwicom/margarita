// @flow

import * as React from 'react';
import { View } from 'react-native';
import {
  StyleSheet,
  Icon,
  RadioButton,
  type IconNameType,
} from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import Text from '../text/Text';

type OptionProps = {|
  +id: string,
  +icon: IconNameType,
  +label: string,
  +selected?: boolean,
  +underline?: boolean,
  +onSelect: (id: string) => void | Promise<void>,
|};

class SelectOption extends React.Component<OptionProps> {
  onPressHandler = () => {
    const { id, onSelect } = this.props;
    onSelect(id);
  };

  render() {
    const { id, icon, label, selected, underline } = this.props;
    return (
      <View style={styles.line}>
        <View style={styles.icon}>
          <Icon
            name={icon}
            color={defaultTokens.colorIconSecondary}
            size="medium"
          />
        </View>
        <RadioButton
          key={id}
          checked={selected}
          type="check"
          bulletPosition="right"
          onPress={this.onPressHandler}
          style={[styles.radio, underline && styles.radioUnderline]}
        >
          <Text style={styles.label}>{label}</Text>
        </RadioButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  line: {
    flexDirection: 'row',
    height: parseInt(defaultTokens.heightButtonNormal, 10),
  },
  icon: {
    paddingHorizontal: parseInt(defaultTokens.spaceSmall, 10),
    justifyContent: 'center',
  },
  radio: {
    flex: 1,
    paddingEnd: parseInt(defaultTokens.spaceMedium, 10),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  radioUnderline: {
    borderBottomColor: defaultTokens.paletteInkLighter,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  label: {
    fontSize: parseInt(defaultTokens.fontSizeButtonLarge, 10),
    color: defaultTokens.colorTextAttention,
  },
});
export default SelectOption;
