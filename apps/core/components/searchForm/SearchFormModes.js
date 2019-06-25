// @flow

import * as React from 'react';
import { View } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { StyleSheet } from '@kiwicom/universal-components';

import TripTypeSelect from './TripTypeSelect';
import PassengersInput from './PassengersInput';

type Props = {|
  +onParamsUpdate: () => void,
|};

const SearchFormModes = ({ onParamsUpdate }: Props) => {
  return (
    <View style={styles.container}>
      <TripTypeSelect onParamsUpdate={onParamsUpdate} />
      <View style={styles.hSpacer} />
      <PassengersInput onParamsUpdate={onParamsUpdate} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: parseInt(defaultTokens.spaceMedium, 10),
    web: {
      marginBottom: parseInt(defaultTokens.spaceSmall, 10),
    },
  },
  hSpacer: {
    width: parseInt(defaultTokens.spaceXSmall, 10),
  },
});

export default SearchFormModes;
