// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/margarita-relay';

import type { ItineraryOneWay_itinerary as ItineraryType } from './__generated__/ItineraryOneWay_itinerary.graphql';
import SectorDetail from '../../sectorDetail/SectorDetail';

type Props = {|
  +itinerary: ?ItineraryType,
|};

function ItineraryOneWay(props: Props) {
  const sector = props.itinerary?.sector;
  if (sector == null) {
    return null;
  }
  return <SectorDetail data={sector} />;
}

export default createFragmentContainer(ItineraryOneWay, {
  itinerary: graphql`
    fragment ItineraryOneWay_itinerary on ItineraryOneWay {
      sector {
        ...SectorDetail_data
      }
    }
  `,
});
