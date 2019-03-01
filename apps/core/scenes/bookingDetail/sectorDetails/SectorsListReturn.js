// @flow

import * as React from 'react';
import { createFragmentContainer, graphql } from '@kiwicom/margarita-relay';

import type { SectorsListReturn_data as BookingType } from './__generated__/SectorsListReturn_data.graphql';
import SectorDetail from '../../../components/sectorDetail/SectorDetail';

type Props = {|
  +data: ?BookingType,
|};

function SectorsListReturn(props: Props) {
  return (
    <>
      <SectorDetail data={props.data?.outbound} />
      <SectorDetail data={props.data?.inbound} />
    </>
  );
}

export default createFragmentContainer(SectorsListReturn, {
  data: graphql`
    fragment SectorsListReturn_data on BookingReturn {
      inbound {
        ...SectorDetail_data
      }
      outbound {
        ...SectorDetail_data
      }
    }
  `,
});
