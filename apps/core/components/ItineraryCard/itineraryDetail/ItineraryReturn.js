// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/margarita-relay';

import type { ItineraryReturn_itinerary as ItineraryType } from './__generated__/ItineraryReturn_itinerary.graphql';
import SectorDetail from '../../sectorDetail/SectorDetail';

type Props = {|
  +itinerary: ?ItineraryType,
|};

function ItineraryReturn(props: Props) {
  const inbound = props.itinerary?.inbound;
  const outbound = props.itinerary?.outbound;
  if (inbound == null || outbound == null) {
    return null;
  }
  return (
    <>
      <SectorDetail data={outbound} />
      <SectorDetail data={inbound} />
    </>
  );
}

export default createFragmentContainer(ItineraryReturn, {
  itinerary: graphql`
    fragment ItineraryReturn_itinerary on ItineraryReturn {
      inbound {
        ...SectorDetail_data
      }
      outbound {
        ...SectorDetail_data
      }
    }
  `,
});
