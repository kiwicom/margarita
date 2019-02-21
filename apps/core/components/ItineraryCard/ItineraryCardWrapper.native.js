// @flow

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet, LocalizedPrice } from '@kiwicom/universal-components';

import ItineraryCardRow from './ItineraryCardRow';
import BadgesContainer from './BadgesContainer';
import HorizontalDash from './HorizontalDash';

type Props = {|
  +localizedPrice: string,
  +children: React.Node,
  +detailOpened?: boolean,
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
    <View>
      {children}
      <HorizontalDash />
      <ItineraryCardRow style={styles.footer}>
        <BadgesContainer badges={badges} />
        <LocalizedPrice localizedPrice={localizedPrice} />
      </ItineraryCardRow>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 5,
    marginTop: 2,
  },
});
