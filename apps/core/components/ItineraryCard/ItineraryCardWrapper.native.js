// @flow

import * as React from 'react';
import { View } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { StyleSheet, LocalizedPrice } from '@kiwicom/universal-components';

import ItineraryCardRow from './ItineraryCardRow';
import BadgesContainer from './BadgesContainer';
import HorizontalDash from './HorizontalDash';

type Props = {|
  +localizedPrice: string,
  +children: React.Node,
|};

export default function ItineraryCardWrapper({
  localizedPrice,
  children,
}: Props) {
  // @TODO use real badges
  const badges = [
    {
      id: '1',
      type: 'warning',
      children: 'Cheapest',
    },
    {
      id: '2',
      type: 'neutral',
      children: 'Wi-fi',
    },
  ];

  return (
    <View style={styles.card}>
      {children}
      <HorizontalDash />
      <ItineraryCardRow style={styles.lastRow}>
        <BadgesContainer badges={badges} />
        <LocalizedPrice localizedPrice={localizedPrice} />
      </ItineraryCardRow>
    </View>
  );
}

const styles = StyleSheet.create({
  lastRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 5,
    marginTop: 2,
  },
  card: {
    marginBottom: 10,
    backgroundColor: defaultTokens.backgroundCard,
    borderColor: defaultTokens.borderColorCard,
    borderBottomWidth: parseInt(defaultTokens.borderWidthCard, 10),
    borderTopWidth: parseInt(defaultTokens.borderWidthCard, 10),
  },
});
