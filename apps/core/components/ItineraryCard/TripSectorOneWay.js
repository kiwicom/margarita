// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/margarita-relay';

import RenderTripSectorItem from './RenderTripSectorItem';
import type { TripSectorOneWay_itinerary as Itinierary } from './__generated__/TripSectorOneWay_itinerary.graphql';

type Props = {|
  +itinerary: ?Itinierary,
|};

const TripSectorOneWay = (props: Props) => {
  const sector = props.itinerary?.sector;
  if (sector == null) {
    return null;
  }
  return <RenderTripSectorItem data={sector} />;
};

export default createFragmentContainer(TripSectorOneWay, {
  itinerary: graphql`
    fragment TripSectorOneWay_itinerary on ItineraryOneWay {
      sector {
        ...RenderTripSectorItem_data
      }
    }
  `,
});
