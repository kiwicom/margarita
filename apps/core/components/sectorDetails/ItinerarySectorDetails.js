// @flow

import * as React from 'react';
import { Card, StyleSheet } from '@kiwicom/universal-components';
import { createFragmentContainer, graphql } from '@kiwicom/margarita-relay';
import {
  ItineraryTypeRenderer,
  SectorDetailsWrapper,
  Separator,
} from '@kiwicom/margarita-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { View } from 'react-native';

import SectorInfoOneWay from '../sectorInfo/SectorInfoOneWay';
import SectorInfoReturn from '../sectorInfo/SectorInfoReturn';
import ItineraryOneWay from '../ItineraryCard/itineraryDetail/ItineraryOneWay';
import ItineraryReturn from '../ItineraryCard/itineraryDetail/ItineraryReturn';
import type { ItinerarySectorDetails_itinerary as ItineraryType } from './__generated__/ItinerarySectorDetails_itinerary.graphql';

type Props = {|
  +itinerary: ?ItineraryType,
|};

function ItinerarySectorDetails(props: Props) {
  const type = props.itinerary?.__typename;
  return (
    <Card style={styles.card}>
      <View style={styles.cardPaddingContainer}>
        <ItineraryTypeRenderer
          typename={type}
          oneWayComponent={<SectorInfoOneWay data={props.itinerary} />}
          returnComponent={<SectorInfoReturn data={props.itinerary} />}
        />
      </View>
      <Separator style={styles.bottomSeparator} />
      <SectorDetailsWrapper>
        <ItineraryTypeRenderer
          typename={type}
          oneWayComponent={<ItineraryOneWay itinerary={props.itinerary} />}
          returnComponent={<ItineraryReturn itinerary={props.itinerary} />}
        />
      </SectorDetailsWrapper>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    paddingHorizontal: 0,
    marginBottom: parseInt(defaultTokens.spaceSmall, 10),
  },
  cardPaddingContainer: {
    paddingHorizontal: parseInt(defaultTokens.spaceMedium, 10),
  },
  bottomSeparator: {
    marginTop: parseInt(defaultTokens.spaceMedium, 10),
  },
});

export default createFragmentContainer(ItinerarySectorDetails, {
  itinerary: graphql`
    fragment ItinerarySectorDetails_itinerary on ItineraryInterface {
      __typename
      ...ItineraryOneWay_itinerary
      ...ItineraryReturn_itinerary
      ...SectorInfoOneWay_data
      ...SectorInfoReturn_data
    }
  `,
});
