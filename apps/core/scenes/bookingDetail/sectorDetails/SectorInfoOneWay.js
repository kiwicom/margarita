// @flow

import * as React from 'react';
import { createFragmentContainer, graphql } from '@kiwicom/margarita-relay';

import SectorInfo from './SectorInfo';
import type { SectorInfoOneWay as BookingType } from './__generated__/SectorInfoOneWay.graphql';

type Props = {|
  +data: ?BookingType,
|};

function SectorInfoOneWay(props: Props) {
  return <SectorInfo data={props.data?.sector} />;
}

export default createFragmentContainer(
  SectorInfoOneWay,
  graphql`
    fragment SectorInfoOneWay on BookingOneWay {
      sector {
        ...SectorInfo
      }
    }
  `,
);
