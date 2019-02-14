// @flow

import * as React from 'react';
import { FlatList } from 'react-native';
import { formatPrice } from '@kiwicom/margarita-utils';
import { graphql, createFragmentContainer } from '@kiwicom/margarita-relay';

import RenderTripSectorItem from './RenderTripSectorItem';
import ItineraryCardWrapper from './ItineraryCardWrapper';
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

    const priceObject = {
      amount: parseFloat(data.price?.amount) ?? 0,
      currency: data.price?.currency ?? 'CZK',
    };

    return (
      <ItineraryCardWrapper localizedPrice={formatPrice(priceObject)}>
        <FlatList
          data={data.sectors}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderSectorItem}
        />
      </ItineraryCardWrapper>
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
