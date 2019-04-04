// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/margarita-relay';

import RenderTripSectorItem from './RenderTripSectorItem';
import type { TripSectorReturn_itinerary as Itinierary } from './__generated__/TripSectorReturn_itinerary.graphql';

type Props = {|
  +itinerary: ?Itinierary,
|};

const TripSectorReturn = (props: Props) => {
  const inbound = props.itinerary?.inbound;
  const outbound = props.itinerary?.outbound;
  if (inbound == null || outbound == null) {
    return null;
  }
  return (
    <>
      <RenderTripSectorItem data={outbound} />
      <RenderTripSectorItem data={inbound} />
    </>
  );
};

export default createFragmentContainer(TripSectorReturn, {
  itinerary: graphql`
    fragment TripSectorReturn_itinerary on ItineraryReturn {
      inbound {
        ...RenderTripSectorItem_data
      }
      outbound {
        ...RenderTripSectorItem_data
      }
    }
  `,
});
