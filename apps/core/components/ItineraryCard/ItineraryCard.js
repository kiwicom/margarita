// @flow

import * as React from 'react';
import { View, FlatList, Platform } from 'react-native';
import {
  LocalizedPrice,
  StyleSheet,
  Icon,
} from '@kiwicom/universal-components';
import { formatPrice } from '@kiwicom/margarita-utils';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { graphql, createFragmentContainer } from '@kiwicom/margarita-relay';

import ItineraryCardRow from './ItineraryCardRow';
import BadgesContainer from './BadgesContainer';
import HorizontalDash from './HorizontalDash';
import RenderTripSectorItem from './RenderTripSectorItem';
import type { ItineraryCard as ItineraryCardType } from './__generated__/ItineraryCard.graphql';
import type { RenderTripSectorItem as RenderTripSectorItemType } from './__generated__/RenderTripSectorItem.graphql';

type Props = {|
  +data: ItineraryCardType,
|};

type SectorItem = {|
  item: ?RenderTripSectorItemType,
|};

class ItineraryCard extends React.Component<Props> {
  renderSectorItem = ({ item }: SectorItem) => {
    if (item) {
      return <RenderTripSectorItem data={item} />;
    }
    return null;
  };

  keyExtractor = (_, index) => `${index}`;

  render() {
    const { data } = this.props;
    if (data == null) {
      return null;
    }

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
    const priceObject = {
      amount: parseFloat(data.price?.amount) ?? 0,
      currency: data.price?.currency ?? 'CZK',
    };
    return (
      <View style={styles.card}>
        {Platform.OS === 'web' && (
          <LocalizedPrice localizedPrice={formatPrice(priceObject)} />
        )}
        <View style={styles.sectors}>
          <FlatList
            data={data.sectors}
            keyExtractor={this.keyExtractor}
            renderItem={this.renderSectorItem}
          />
        </View>
        {Platform.OS === 'web' ? (
          <Icon name="chevron-down" color={defaultTokens.paletteInkLighter} />
        ) : (
          <>
            <HorizontalDash />
            <ItineraryCardRow style={styles.lastRow}>
              <BadgesContainer badges={badges} />
              <LocalizedPrice localizedPrice={formatPrice(priceObject)} />
            </ItineraryCardRow>
          </>
        )}
      </View>
    );
  }
}

export default createFragmentContainer(
  ItineraryCard,
  graphql`
    fragment ItineraryCard on Itinerary {
      sectors {
        ...RenderTripSectorItem
      }
      price {
        currency
        amount
      }
    }
  `,
);
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
    borderBottomWidth: 1,
    borderTopWidth: 1,
    web: {
      alignSelf: 'center',
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      maxWidth: 720,
      padding: parseInt(defaultTokens.spaceMedium, 10),
      marginBottom: parseInt(defaultTokens.spaceMedium, 10),
      borderBottomWidth: 0,
      borderTopWidth: 0,
      borderRadius: parseInt(defaultTokens.borderRadiusNormal, 10),
      boxShadow: '0 2px 4px 0 rgba(23,27,30,.1)',
      transitionDuration: '0.3s',
      transitionProperty: 'box-shadow',
      transitionTimingFunction: 'ease-out',
    },
  },
  sectors: {
    web: {
      flex: 1,
      marginStart: 10,
    },
  },
});
