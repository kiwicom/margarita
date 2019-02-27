// @flow

import * as React from 'react';
import { createFragmentContainer, graphql } from '@kiwicom/margarita-relay';

import type { SectorsListOneWay as BookingType } from './__generated__/SectorsListOneWay.graphql';
import SectorDetail from '../../../components/sectorDetail/SectorDetail';

type Props = {|
  +data: ?BookingType,
|};

function SectorsListOneWay(props: Props) {
  return <SectorDetail data={props.data?.sector} />;
}

export default createFragmentContainer(
  SectorsListOneWay,
  graphql`
    fragment SectorsListOneWay on BookingOneWay {
      sector {
        ...SectorDetail
      }
    }
  `,
);
