// @flow

import * as React from 'react';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import TimelineInformation from './TimelineInformation';

import { Icon } from '../Icon';
import { Text } from '../Text';
import { StyleSheet } from '../PlatformStyleSheet';

type Props = {|
  +cabinBaggageWarning: string,
|};

export default function TimelineCabinBaggage({ cabinBaggageWarning }: Props) {
  return (
    <TimelineInformation
      icon={
        <Icon name="baggage-cabin" color={defaultTokens.paletteOrangeNormal} />
      }
      information={
        <Text style={styles.information}>{cabinBaggageWarning}</Text>
      }
      containerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultTokens.paletteOrangeLight,
    borderColor: defaultTokens.paletteOrangeDark,
  },
  information: {
    color: defaultTokens.paletteOrangeDark,
  },
});
