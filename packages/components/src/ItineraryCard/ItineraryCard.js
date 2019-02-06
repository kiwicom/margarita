// @flow

import * as React from 'react';
import { View, FlatList } from 'react-native';
import shortid from 'shortid';
import { LocalizedPrice, StyleSheet } from '@kiwicom/universal-components';
import { formatPrice } from '@kiwicom/margarita-utils';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { graphql, createFragmentContainer } from '@kiwicom/margarita-relay';

import ItineraryCardRow from './ItineraryCardRow';
import BadgesContainer from './BadgesContainer';
import HorizontalDash from './HorizontalDash';
import TripSegment from './TripSegment';
import type { TripSegment as TripSegmentType } from './__generated__/TripSegment.graphql';
import type { ItineraryCard as ItineraryCardType } from './__generated__/ItineraryCard.graphql';

type Props = {|
  +data: ItineraryCardType,
|};

type SectorItem = {|
  item: ?TripSegmentType,
|};

class ItineraryCard extends React.Component<Props> {
  renderSectorItem = ({ item }: SectorItem) => {
    if (item) {
      return (
        <ItineraryCardRow>
          <TripSegment data={item} />
        </ItineraryCardRow>
      );
    }
    return null;
  };

  keyExtractor = () => shortid.generate();

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
        <View>
          <FlatList
            data={data.sectors}
            keyExtractor={this.keyExtractor}
            renderItem={this.renderSectorItem}
          />
          <HorizontalDash />
          <ItineraryCardRow style={styles.lastRow}>
            <BadgesContainer badges={badges} />
            <LocalizedPrice localizedPrice={formatPrice(priceObject)} />
          </ItineraryCardRow>
        </View>
      </View>
    );
  }
}

export default createFragmentContainer(
  ItineraryCard,
  graphql`
    fragment ItineraryCard on Itinerary {
      sectors {
        ...TripSegment
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
  },
});
