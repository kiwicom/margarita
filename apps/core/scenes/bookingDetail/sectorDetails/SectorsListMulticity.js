// @flow

import * as React from 'react';
import { createFragmentContainer, graphql } from '@kiwicom/margarita-relay';

import type { SectorsListMulticity as BookingType } from './__generated__/SectorsListMulticity.graphql';
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

export default createFragmentContainer(
  SectorsListMulticity,
  graphql`
    fragment SectorsListMulticity on BookingInterface {
      ... on BookingMulticity {
        sectors {
          ...SectorDetail
        }
      }
    }
  `,
);
