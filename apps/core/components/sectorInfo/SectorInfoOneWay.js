// @flow

import * as React from 'react';
import { createFragmentContainer, graphql } from '@kiwicom/margarita-relay';

import SectorInfo from './SectorInfo';
import type { SectorInfoOneWay_data as BookingType } from './__generated__/SectorInfoOneWay_data.graphql';

type Props = {|
  +data: ?BookingType,
|};

function SectorInfoOneWay(props: Props) {
  return <SectorInfo data={props.data?.sector} />;
}

export default createFragmentContainer(SectorInfoOneWay, {
  data: graphql`
    fragment SectorInfoOneWay_data on OneWayInterface {
      sector {
        ...SectorInfo_data
      }
    }
  `,
});
