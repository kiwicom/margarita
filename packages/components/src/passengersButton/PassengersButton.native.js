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
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Icon color={defaultTokens.colorIconSecondary} name="passengers" />
        <Text style={styles.text}>{adults + infants}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 122,
    height: parseInt(defaultTokens.heightButtonNormal, 10),
    paddingStart: 11,
    paddingEnd: parseInt(defaultTokens.spaceMedium, 10),
    backgroundColor: defaultTokens.backgroundButtonSecondary,
    borderRadius: parseInt(defaultTokens.borderRadiusLarge, 10),
  },
  text: {
    color: defaultTokens.paletteInkDark,
    fontSize: parseInt(defaultTokens.fontSizeButtonLarge, 10),
  },
});
