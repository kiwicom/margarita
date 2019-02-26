// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/margarita-relay';

import type { SectorsList as SectorType } from './__generated__/SectorsList.graphql';
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

export default createFragmentContainer(
  SectorsList,
  graphql`
    fragment SectorsList on Itinerary {
      sectors {
        ...SectorDetail
      }
    }
  `,
);
