// @flow

import * as React from 'react';
import { FlatList, View } from 'react-native';
import { formatPrice } from '@kiwicom/margarita-utils';
import { graphql, createFragmentContainer } from '@kiwicom/margarita-relay';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import {
  StyleSheet,
  Hoverable,
  Card,
  designTokens,
  TouchableWithoutFeedback,
} from '@kiwicom/universal-components';

import RenderTripSectorItem from './RenderTripSectorItem';
import ItineraryCardWrapper from './ItineraryCardWrapper';
import ItineraryDetail from './itineraryDetail/ItineraryDetail';
import type { ItineraryCard_data as ItineraryCardType } from './__generated__/ItineraryCard_data.graphql';
import type { RenderTripSectorItem_data as RenderTripSectorItemType } from './__generated__/RenderTripSectorItem_data.graphql';

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

    // Temporary fix: TODO: Improve in next PR
    const sectors = [];

    const sector = data.sector;
    const inbound = data.inbound;
    const outbound = data.outbound;

    if (sector != null) {
      sectors.push(sector);
    }

    if (inbound != null && outbound != null) {
      sectors.push(outbound);
      sectors.push(inbound);
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
                  data={sectors}
                  keyExtractor={this.keyExtractor}
                  renderItem={this.renderSectorItem}
                />
              </ItineraryCardWrapper>
            </View>
          </TouchableWithoutFeedback>
        </Hoverable>
        {detailOpened && (
          <ItineraryDetail
            data={data}
            localizedPrice={localizedPrice}
            onClose={this.handleDetailClose}
            onBookPress={onBookPress}
          />
        )}
      </Card>
    );
  }
}

export default createFragmentContainer(ItineraryCard, {
  data: graphql`
    fragment ItineraryCard_data on ItineraryInterface {
      ... on ItineraryOneWay {
        sector {
          ...RenderTripSectorItem_data
        }
      }
      ... on ItineraryReturn {
        inbound {
          ...RenderTripSectorItem_data
        }
        outbound {
          ...RenderTripSectorItem_data
        }
      }
      price {
        currency
        amount
      }
      ...ItineraryDetail_data
    }
  `,
});

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
      maxWidth: designTokens.widthScreenNormal,
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
