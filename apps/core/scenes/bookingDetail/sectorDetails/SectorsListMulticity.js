// @flow

import * as React from 'react';
import { createFragmentContainer, graphql } from '@kiwicom/margarita-relay';

import type { SectorsListMulticity_data as BookingType } from './__generated__/SectorsListMulticity_data.graphql';
import SectorDetail from '../../../components/sectorDetail/SectorDetail';

type Props = {|
  +data: ?BookingType,
|};

function SectorsListMulticity(props: Props) {
  const sectors = props.data?.sectors ?? [];
  return sectors.map((sector, sectorIndex) => {
    return <SectorDetail key={sectorIndex} data={sector} />;
  });
}

export default createFragmentContainer(SectorsListMulticity, {
  data: graphql`
    fragment SectorsListMulticity_data on BookingMulticity {
      sectors {
        ...SectorDetail_data
      }
    }
  `,
});
