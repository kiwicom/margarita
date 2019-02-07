// @flow

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet, Text, Icon } from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import TouchableWithoutFeedback from '../TouchableWithoutFeedback';
import type { Props } from './PassengersButtonTypes';

export default function PassengersButton({
  onPress,
  adults,
  infants,
  bags,
}: Props) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Icon color={defaultTokens.colorIconSecondary} name="passengers" />
        <Text style={styles.text}>{adults + infants}</Text>
        <Icon color={defaultTokens.colorIconSecondary} name="baggage-set" />
        <Text style={styles.text}>{bags}</Text>
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
    paddingEnd: parseInt(defaultTokens.paddingButtonNormal, 10),
    backgroundColor: defaultTokens.backgroundButtonSecondary,
    borderRadius: parseInt(defaultTokens.borderRadiusLarge, 10),
  },
  text: {
    color: defaultTokens.paletteInkDark,
    fontSize: parseInt(defaultTokens.fontSizeButtonLarge, 10),
  },
});
