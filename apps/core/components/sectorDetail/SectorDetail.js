// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/margarita-relay';

import SectorHeader from './SectorHeader';
import SectorStopoverDuration from './SectorStopoverDuration';
import type { SectorDetail as SectorType } from './__generated__/SectorDetail.graphql';

type Props = {|
  +data: ?SectorType,
|};

const SectorDetail = (props: Props) => {
  return (
    <>
      <SectorStopoverDuration data={props.data} />
      <SectorHeader data={props.data} />
      {/** @TODO segments + layover info */}
    </>
  );
};

export default createFragmentContainer(
  SectorDetail,
  graphql`
    fragment SectorDetail on Sector {
      ...SectorStopoverDuration
      ...SectorHeader
    }
  `,
);
