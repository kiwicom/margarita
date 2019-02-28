// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/margarita-relay';
import { StopoverDuration } from '@kiwicom/margarita-components';

import TripSector from './TripSector';
import ItineraryCardRow from './ItineraryCardRow';
import type { RenderTripSectorItem_data as RenderTripSectorItemType } from './__generated__/RenderTripSectorItem_data.graphql';
import StopoverDurationWrapper from './StopoverDurationWrapper';

type Props = {|
  +data: ?RenderTripSectorItemType,
|};

function RenderTripSectorItem({ data }: Props) {
  const stopoverDuration = data?.stopoverDuration;
  return (
    <>
      {stopoverDuration && (
        <StopoverDurationWrapper>
          <StopoverDuration
            stopoverDuration={stopoverDuration}
            locationName={data?.departure?.stop?.city?.name}
          />
        </StopoverDurationWrapper>
      )}
      <ItineraryCardRow>
        <TripSector data={data} />
      </ItineraryCardRow>
    </>
  );
}

export default createFragmentContainer(RenderTripSectorItem, {
  data: graphql`
    fragment RenderTripSectorItem_data on Sector {
      departure {
        stop {
          city {
            name
          }
        }
      }
      stopoverDuration
      ...TripSector_data
    }
  `,
});
