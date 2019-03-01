// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/margarita-relay';
import { SECTOR_COLOR_CODES } from '@kiwicom/margarita-config';
import { last } from 'ramda';

import DrawSegmentLine from './DrawSegmentLine';
import type { MulticitySegmentLines_data as SegmentType } from './__generated__/MulticitySegmentLines_data.graphql';

type Props = {|
  +data: ?SegmentType,
|};

const MulticitySegmentLines = (props: Props) => {
  const sectors = props.data?.sectors ?? [];
  return sectors.map((sector, sectorIndex) => {
    return (
      <DrawSegmentLine
        key={sectorIndex}
        data={sector}
        color={SECTOR_COLOR_CODES[sectorIndex] ?? last(SECTOR_COLOR_CODES)}
      />
    );
  });
};

export default createFragmentContainer(MulticitySegmentLines, {
  data: graphql`
    fragment MulticitySegmentLines_data on BookingMulticity {
      sectors {
        ...DrawSegmentLine_data
      }
    }
  `,
});
