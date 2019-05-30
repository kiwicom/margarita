// @flow

import * as React from 'react';
import { View } from 'react-native';
import { formatPrice } from '@kiwicom/margarita-localization';
import { graphql, createFragmentContainer } from '@kiwicom/margarita-relay';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import {
  StyleSheet,
  withHover,
  Card,
  designTokens,
  TouchableWithoutFeedback,
} from '@kiwicom/universal-components';
import { ItineraryTypeRenderer } from '@kiwicom/margarita-components';

import {
  withSearchContext,
  type SearchContextState,
} from '../../contexts/searchContext';
import ItineraryCardWrapper from './ItineraryCardWrapper';
import ItineraryDetail from './itineraryDetail/ItineraryDetail';
import type { ItineraryCard_data as ItineraryCardType } from './__generated__/ItineraryCard_data.graphql';
import TripSectorOneWay from './TripSectorOneWay';
import TripSectorReturn from './TripSectorReturn';

type Props = {|
  +data: ItineraryCardType,
  +onBookPress: (?string) => void,
  +isHovered: boolean,
  +adults: number,
  +infants: number,
  +onMouseLeave: () => void,
  +onMouseEnter: () => void,
|};

type State = {|
  detailOpened: boolean,
|};

class ItineraryCard extends React.Component<Props, State> {
  state = {
    detailOpened: false,
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
    const { detailOpened } = this.state;
    const {
      data,
      onBookPress,
      infants,
      adults,
      isHovered,
      ...rest
    } = this.props;
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
          (isHovered || detailOpened) && styles.containerElevated,
        ]}
      >
        <TouchableWithoutFeedback onPress={this.handlePress} {...rest}>
          <View>
            <ItineraryCardWrapper
              localizedPrice={localizedPrice}
              detailOpened={detailOpened}
              infants={infants}
              adults={adults}
            >
              <ItineraryTypeRenderer
                typename={typename}
                oneWayComponent={<TripSectorOneWay itinerary={data} />}
                returnComponent={<TripSectorReturn itinerary={data} />}
              />
            </ItineraryCardWrapper>
          </View>
        </TouchableWithoutFeedback>
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

const selectSearchContext = ({ infants, adults }: SearchContextState) => ({
  infants,
  adults,
});

export default createFragmentContainer(
  withSearchContext(selectSearchContext)(withHover(ItineraryCard)),
  {
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
  },
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
