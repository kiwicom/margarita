// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/margarita-relay';

import type { SectorsList_data as SectorType } from './__generated__/SectorsList_data.graphql';
import SectorDetail from '../../sectorDetail/SectorDetail';

type Props = {|
  +data: ?SectorType,
|};

function SectorsList(props: Props) {
  const sectors = props.data?.sectors ?? [];
  return sectors.map((sector, sectorIndex) => {
    return <SectorDetail key={sectorIndex} data={sector} />;
  });
}

export default createFragmentContainer(SectorsList, {
  data: graphql`
    fragment SectorsList_data on Itinerary {
      sectors {
        ...SectorDetail_data
      }
    }
  `,
});
