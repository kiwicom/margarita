// @flow

import * as React from 'react';
import { View } from 'react-native';
import {
  StyleSheet,
  Button,
  type IconNameType,
} from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import SelectOption from './SelectOption';

type Props = {|
  +optionsData: {
    [string]: {|
      +icon: IconNameType,
      +label: string,
    |},
  },
  +selectedType: string,
  +onSelect: (id: string) => void | Promise<void>,
  +onClosePress: () => void,
|};

const Select = ({
  optionsData,
  selectedType,
  onSelect,
  onClosePress,
}: Props) => {
  const optionKeys = Object.keys(optionsData);
  const options = optionKeys.map((key, index) => {
    const optionData = optionsData[key];
    return (
      <SelectOption
        key={key}
        id={key}
        icon={optionData.icon}
        label={optionData.label}
        selected={selectedType === key}
        underline={index < optionKeys.length - 1}
        onSelect={onSelect}
      />
    );
  });
  return (
    <>
      {options}
      <View style={styles.buttonWrapper}>
        <Button onPress={onClosePress} type="secondary" label="Close" />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    margin: parseInt(defaultTokens.spaceXSmall, 10),
  },
});
export default Select;
