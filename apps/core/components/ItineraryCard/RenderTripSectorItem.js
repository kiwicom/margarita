// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/margarita-relay';

import StopoverDuration from './StopoverDuration';
import TripSector from './TripSector';
import ItineraryCardRow from './ItineraryCardRow';
import type { RenderTripSectorItem as RenderTripSectorItemType } from './__generated__/RenderTripSectorItem.graphql';

type Props = {|
  +data: ?RenderTripSectorItemType,
|};

function RenderTripSectorItem({ data }: Props) {
  return (
    <>
      <StopoverDuration
        stopoverDuration={data?.stopoverDuration}
        locationName={data?.departure?.stop?.city?.name}
      />
      <ItineraryCardRow>
        <TripSector data={data} />
      </ItineraryCardRow>
    </>
  );
}

export default createFragmentContainer(
  RenderTripSectorItem,
  graphql`
    fragment RenderTripSectorItem on Sector {
      departure {
        stop {
          city {
            name
          }
        }
      }
      stopoverDuration
      ...TripSector
    }
  `,
);
