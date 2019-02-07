// @flow

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet, type StylePropType } from '@kiwicom/universal-components';

import TripTypeSwitchOption from './TripTypeSwitchOption';

type Props = {|
  +style?: StylePropType,
  +optionsData: {
    [string]: {|
      +icon: string,
      +label: string,
    |},
  },
  +selectedType: string,
  +onSelect: (type: string) => void,
|};

export default function TripTypeSwitch({
  style,
  optionsData,
  selectedType,
  onSelect,
}: Props) {
  const optionKeys = Object.keys(optionsData);
  const options = optionKeys.map(key => {
    const optionData = optionsData[key];
    return (
      <TripTypeSwitchOption
        key={key}
        label={optionData.label}
        type={key}
        selected={selectedType === key}
        onSelect={onSelect}
      />
    );
  });
  return <View style={[styles.container, style]}>{options}</View>;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginEnd: 20,
  },
});
