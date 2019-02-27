// @flow

import * as React from 'react';
import { createFragmentContainer, graphql } from '@kiwicom/margarita-relay';

import type { SectorsListReturn as BookingType } from './__generated__/SectorsListReturn.graphql';
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

export default createFragmentContainer(
  SectorsListReturn,
  graphql`
    fragment SectorsListReturn on BookingReturn {
      inbound {
        ...SectorDetail
      }
      outbound {
        ...SectorDetail
      }
    }
  `,
);
