// @flow

import * as React from 'react';
import { View } from 'react-native';
import { formatPrice } from '@kiwicom/margarita-localization';
import { graphql, createFragmentContainer } from '@kiwicom/margarita-relay';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import {
  StyleSheet,
  Hoverable,
  Card,
  designTokens,
  TouchableWithoutFeedback,
} from '@kiwicom/universal-components';
import { ItineraryTypeRenderer } from '@kiwicom/margarita-components';

import ItineraryCardWrapper from './ItineraryCardWrapper';
import ItineraryDetail from './itineraryDetail/ItineraryDetail';
import type { ItineraryCard_data as ItineraryCardType } from './__generated__/ItineraryCard_data.graphql';
import TripSectorOneWay from './TripSectorOneWay';
import TripSectorReturn from './TripSectorReturn';

type Props = {|
  +data: ItineraryCardType,
  +onBookPress: (?string) => void,
|};

type State = {|
  detailOpened: boolean,
  hovered: boolean,
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

  render() {
    const { detailOpened, hovered } = this.state;
    const { data, onBookPress } = this.props;
    if (data == null) {
      return null;
    }
    const typename = data.__typename;
    const localizedPrice = formatPrice(
      data.price?.amount,
      data.price?.currency,
    );

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
                <ItineraryTypeRenderer
                  typename={typename}
                  oneWayComponent={<TripSectorOneWay itinerary={data} />}
                  returnComponent={<TripSectorReturn itinerary={data} />}
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
      __typename
      ... on ItineraryOneWay {
        ...TripSectorOneWay_itinerary
      }
      ... on ItineraryReturn {
        ...TripSectorReturn_itinerary
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
