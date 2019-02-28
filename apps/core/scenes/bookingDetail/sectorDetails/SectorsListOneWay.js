// @flow

import * as React from 'react';
import { createFragmentContainer, graphql } from '@kiwicom/margarita-relay';

import type { SectorsListOneWay_data as BookingType } from './__generated__/SectorsListOneWay_data.graphql';
import SectorDetail from '../../../components/sectorDetail/SectorDetail';

type Props = {|
  +data: ?BookingType,
|};

function SectorsListOneWay(props: Props) {
  return <SectorDetail data={props.data?.sector} />;
}

export default createFragmentContainer(SectorsListOneWay, {
  data: graphql`
    fragment SectorsListOneWay_data on BookingOneWay {
      sector {
        ...SectorDetail_data
      }
    }
  `,
});
