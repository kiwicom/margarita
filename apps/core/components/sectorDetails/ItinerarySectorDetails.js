// @flow

import * as React from 'react';
import { Card, StyleSheet } from '@kiwicom/universal-components';
import { createFragmentContainer, graphql } from '@kiwicom/margarita-relay';
import {
  ItineraryTypeRenderer,
  SectorDetailsWrapper,
} from '@kiwicom/margarita-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import ItineraryOneWay from '../ItineraryCard/itineraryDetail/ItineraryOneWay';
import ItineraryReturn from '../ItineraryCard/itineraryDetail/ItineraryReturn';
import type { ItinerarySectorDetails_itinerary as ItineraryType } from './__generated__/ItinerarySectorDetails_itinerary.graphql';

type Props = {|
  +itinerary: ?ItineraryType,
|};

function ItinerarySectorDetails(props: Props) {
  return (
    <Card style={styles.container}>
      <SectorDetailsWrapper>
        <ItineraryTypeRenderer
          typename={props.itinerary?.__typename}
          oneWayComponent={<ItineraryOneWay itinerary={props.itinerary} />}
          returnComponent={<ItineraryReturn itinerary={props.itinerary} />}
        />
      </SectorDetailsWrapper>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: parseFloat(defaultTokens.spaceSmall),
  },
});

export default createFragmentContainer(ItinerarySectorDetails, {
  itinerary: graphql`
    fragment ItinerarySectorDetails_itinerary on ItineraryInterface {
      __typename
      ...ItineraryOneWay_itinerary
      ...ItineraryReturn_itinerary
    }
  `,
});
