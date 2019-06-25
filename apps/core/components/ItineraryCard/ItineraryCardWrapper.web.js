// @flow

import * as React from 'react';
import { View } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import {
  StyleSheet,
  Icon,
  LocalizedPrice,
  Button,
  designTokens,
} from '@kiwicom/universal-components';
import { PassengerInfoItineraryCard } from '@kiwicom/margarita-components';
import { noop } from '@kiwicom/margarita-utils';
import {
  withLayoutContext,
  LAYOUT,
  type LayoutContextState,
} from '@kiwicom/margarita-device';

type Props = {|
  +localizedPrice: string,
  +children: React.Node,
  +detailOpened?: boolean,
  +layout: number,
  +infants: number,
  +adults: number,
|};

const ItineraryCardWrapper = ({
  localizedPrice,
  children,
  detailOpened,
  layout,
  infants,
  adults,
}: Props) => {
  const mobileLayout = layout < LAYOUT.largeMobile;
  const chevronIconName = detailOpened ? 'chevron-up' : 'chevron-down';

  return (
    <View style={styles.card}>
      <View style={styles.row}>
        {!mobileLayout && (
          <View style={styles.price}>
            <LocalizedPrice localizedPrice={localizedPrice} />
            <PassengerInfoItineraryCard infants={infants} adults={adults} />
          </View>
        )}
        <View style={styles.sectors}>{children}</View>
        {!mobileLayout && (
          <Icon
            name={chevronIconName}
            color={defaultTokens.paletteInkLighter}
          />
        )}
      </View>
      {mobileLayout && (
        <View style={styles.footer}>
          <LocalizedPrice localizedPrice={localizedPrice} />
          <PassengerInfoItineraryCard infants={infants} adults={adults} />
          <Button
            label={detailOpened ? 'Hide' : 'Show Detail'}
            type="secondary"
            rightIcon={<Icon name={chevronIconName} />}
            onPress={noop}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: parseInt(defaultTokens.spaceMedium, 10),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    minWidth: 80,
    marginEnd: 10,
  },
  sectors: {
    flex: 1,
  },
  footer: {
    marginTop: parseInt(defaultTokens.spaceMedium, 10),
    paddingTop: parseInt(defaultTokens.spaceMedium, 10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderStyle: 'dotted',
    borderColor: designTokens.borderColorInkLight,
    borderTopWidth: parseInt(defaultTokens.borderWidthCard, 10),
  },
});

const layoutSelect = ({ layout }: LayoutContextState) => ({
  layout,
});

export default withLayoutContext(layoutSelect)(ItineraryCardWrapper);
