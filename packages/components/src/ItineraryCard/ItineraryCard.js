// @flow

import * as React from 'react';
import { View } from 'react-native';
import { LocalizedPrice, StyleSheet } from '@kiwicom/universal-components';
import { formatPrice } from '@kiwicom/margarita-utils';

import ItineraryCardRow from './ItineraryCardRow';
import type { ItineraryCardProps } from './ItineraryCardTypes';
import BadgesContainer from './BadgesContainer';
import HorizontalDash from './HorizontalDash';
import CollapsedSector from './CollapsedSector';

export default function ItineraryCard({
  sectors,
  price,
  badges,
}: ItineraryCardProps) {
  return (
    <View>
      {sectors &&
        sectors.map<React.Node>((sector, sectorIndex) => (
          <CollapsedSector
            sectors={sectors}
            sector={sector}
            sectorIndex={sectorIndex}
          />
        ))}
      <HorizontalDash />
      <ItineraryCardRow style={styles.lastRow}>
        <BadgesContainer badges={badges} />
        <LocalizedPrice localizedPrice={formatPrice(price)} />
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
});
