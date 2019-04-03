// @flow

import * as React from 'react';
import { View } from 'react-native';
import {
  StyleSheet,
  Icon,
  TouchableWithoutFeedback,
} from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import Text from '../text/Text';
import type { Props } from './PassengersButtonTypes';

export default function PassengersButton({ onPress, adults, infants }: Props) {
  let label = 'Passengers';
  if (infants === 0) {
    label = adults === 1 ? 'Adult' : 'Adults';
  }

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Icon
          size="small"
          color={defaultTokens.paletteInkNormal}
          name="passengers"
        />
        <Text weight="bold" style={styles.text}>{`${adults +
          infants} ${label}`}</Text>
        <Icon
          size="small"
          color={defaultTokens.paletteInkNormal}
          name="chevron-down"
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  text: {
    color: defaultTokens.paletteInkNormal,
    fontSize: parseInt(defaultTokens.fontSizeTextSmall, 10),
    marginHorizontal: 6,
  },
});
