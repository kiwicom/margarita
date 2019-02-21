// @flow

import * as React from 'react';
import { FlatList, View } from 'react-native';
import { formatPrice } from '@kiwicom/margarita-utils';
import { graphql, createFragmentContainer } from '@kiwicom/margarita-relay';
import { TouchableWithoutFeedback } from '@kiwicom/margarita-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { StyleSheet, Hoverable, Card } from '@kiwicom/universal-components';

import RenderTripSectorItem from './RenderTripSectorItem';
import ItineraryCardWrapper from './ItineraryCardWrapper';
import ItineraryDetail from './itineraryDetail/ItineraryDetail';
import type { ItineraryCard as ItineraryCardType } from './__generated__/ItineraryCard.graphql';
import type { RenderTripSectorItem as RenderTripSectorItemType } from './__generated__/RenderTripSectorItem.graphql';

type Props = {|
  +data: ItineraryCardType,
  +onBookPress: () => void,
|};

type State = {|
  detailOpened: boolean,
  hovered: boolean,
|};

type SectorItem = {|
  item: ?RenderTripSectorItemType,
|};

class ItineraryCard extends React.Component<Props, State> {
  state = {
    detailOpened: false,
    hovered: false,
  };

  handleOnMouseEnter = () => {
    this.setState({ hovered: true });
  };

  handleOnMouseLeave = () => {
    this.setState({ hovered: false });
  };

  handlePress = () => {
    this.setState(state => ({
      detailOpened: !state.detailOpened,
    }));
  };

  handleDetailClose = () => {
    this.setState({ detailOpened: false });
  };

  renderSectorItem = ({ item }: SectorItem) => {
    if (item) {
      return <RenderTripSectorItem data={item} />;
    }
    return null;
  };

  keyExtractor = (_, index) => `${index}`;

  render() {
    const { detailOpened, hovered } = this.state;
    const { data, onBookPress } = this.props;
    if (data == null) {
      return null;
    }

    const priceObject = {
      amount: parseFloat(data.price?.amount) ?? 0,
      currency: data.price?.currency ?? 'CZK',
    };
    const localizedPrice = formatPrice(priceObject);

    return (
      <Card
        style={[
          styles.container,
          (hovered || detailOpened) && styles.containerElevated,
        ]}
      >
        <Hoverable
          onMouseEnter={this.handleOnMouseEnter}
          onMouseLeave={this.handleOnMouseLeave}
        >
          <TouchableWithoutFeedback onPress={this.handlePress}>
            <View>
              <ItineraryCardWrapper
                localizedPrice={localizedPrice}
                detailOpened={detailOpened}
              >
                <FlatList
                  data={data.sectors}
                  keyExtractor={this.keyExtractor}
                  renderItem={this.renderSectorItem}
                />
              </ItineraryCardWrapper>
            </View>
          </TouchableWithoutFeedback>
        </Hoverable>
        {detailOpened && (
          <ItineraryDetail
            localizedPrice={localizedPrice}
            onClose={this.handleDetailClose}
            onBookPress={onBookPress}
          />
        )}
      </Card>
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
  container: {
    padding: 0,
    ios: {
      marginBottom: 8,
    },
    android: {
      marginVertical: 4,
    },
    web: {
      alignSelf: 'center',
      width: '100%',
      maxWidth: 720,
      marginBottom: parseInt(defaultTokens.spaceMedium, 10),
      borderRadius: parseInt(defaultTokens.borderRadiusNormal, 10),
      boxShadow: '0 2px 4px 0 rgba(23,27,30,.1)',
      transitionDuration: '0.3s',
      transitionProperty: 'box-shadow',
      transitionTimingFunction: 'ease-out',
    },
  },
  containerElevated: {
    web: {
      boxShadow: '0 4px 12px 0 rgba(23,27,30,.3)',
    },
  },
});
