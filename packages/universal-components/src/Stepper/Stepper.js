// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import { Text } from '../Text';
import { Icon } from '../Icon';
import StepperButton from './StepperButton';
import { StyleSheet } from '../PlatformStyleSheet';
import type { StylePropType } from '../PlatformStyleSheet/StyleTypes';

type Props = {|
  +onIncrement: () => void,
  +onDecrement: () => void,
  +number: number,
  +showNumber?: boolean,
  +numberStyle?: StylePropType,
  +min?: number,
  +max?: number,
  +disableDecrement?: boolean,
  +disableIncrement?: boolean,
|};

export default function Stepper({
  onIncrement,
  onDecrement,
  number,
  showNumber = true,
  numberStyle,
  min,
  max,
  disableDecrement: originalDisableDecrement,
  disableIncrement: originalDisableIncrement,
}: Props) {
  const belowMin = min != null && number <= min;
  const aboveMax = max != null && number >= max;
  const disableDecrement = belowMin ?? originalDisableDecrement;
  const disableIncrement = aboveMax ?? originalDisableIncrement;

  const iconProps = {
    color: defaultTokens.colorIconSecondary,
    size: 'small',
  };

  let numberDisplayed = number;
  if (belowMin) {
    numberDisplayed = min;
  }
  if (aboveMax) {
    numberDisplayed = max;
  }

  return (
    <View style={styles.row}>
      <StepperButton
        icon={<Icon name="minus" {...iconProps} />}
        touchable={!disableDecrement}
        onPress={onDecrement}
      />
      {showNumber && numberDisplayed != null && (
        <Text style={numberStyle}>{numberDisplayed}</Text>
      )}
      <StepperButton
        icon={<Icon name="plus" {...iconProps} />}
        touchable={!disableIncrement}
        onPress={onIncrement}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
