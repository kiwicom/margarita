// @flow

import * as React from 'react';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import {
  Icon,
  StyleSheet,
  type StylePropType,
} from '@kiwicom/universal-components';

import TimelineInformation from './TimelineInformation';
import Text from '../text/Text';

type Props = {|
  +cabinBaggageWarning: string,
  +containerStyle?: StylePropType,
|};

export default function TimelineCabinBaggage({
  cabinBaggageWarning,
  containerStyle,
}: Props) {
  return (
    <TimelineInformation
      icon={
        <Icon name="baggage-cabin" color={defaultTokens.paletteOrangeNormal} />
      }
      information={
        <Text style={styles.information}>{cabinBaggageWarning}</Text>
      }
      containerStyle={[styles.container, containerStyle]}
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
