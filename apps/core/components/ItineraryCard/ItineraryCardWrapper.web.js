// @flow

import * as React from 'react';
import { View } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import {
  StyleSheet,
  Icon,
  LocalizedPrice,
  Button,
} from '@kiwicom/universal-components';
import {
  withLayoutContext,
  LAYOUT,
  type LayoutContextState,
} from '@kiwicom/margarita-utils';

type Props = {|
  +localizedPrice: string,
  +children: React.Node,
  +layout: number,
|};

const noop = () => {}; // @TODO

const ItineraryCardWrapper = ({ localizedPrice, children, layout }: Props) => {
  const mobileLayout = layout < LAYOUT.largeMobile;

  return (
    <View style={styles.card}>
      <View style={styles.row}>
        {!mobileLayout && (
          <View style={styles.price}>
            <LocalizedPrice localizedPrice={localizedPrice} />
          </View>
        )}
        <View style={styles.sectors}>{children}</View>
        {!mobileLayout && (
          <Icon name="chevron-down" color={defaultTokens.paletteInkLighter} />
        )}
      </View>
      {mobileLayout && (
        <View style={styles.footer}>
          <LocalizedPrice localizedPrice={localizedPrice} />
          <Button
            label="Show Detail"
            type="secondary"
            rightIcon={<Icon name="chevron-down" />}
            onPress={noop}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: defaultTokens.backgroundCard,
    alignSelf: 'center',
    width: '100%',
    maxWidth: 720,
    padding: parseInt(defaultTokens.spaceMedium, 10),
    marginBottom: parseInt(defaultTokens.spaceMedium, 10),
    borderRadius: parseInt(defaultTokens.borderRadiusNormal, 10),
    boxShadow: '0 2px 4px 0 rgba(23,27,30,.1)',
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
    borderColor: '#d2d9e0', // @TODO should be added to design-tokens
    borderTopWidth: parseInt(defaultTokens.borderWidthCard, 10),
  },
});

const layoutSelect = ({ layout }: LayoutContextState) => ({
  layout,
});

export default withLayoutContext(layoutSelect)(ItineraryCardWrapper);
