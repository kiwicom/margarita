// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/margarita-relay';
import { SECTOR_COLOR_CODES } from '@kiwicom/margarita-config';
import { last } from 'ramda';

import DrawSegmentLine from './DrawSegmentLine';
import type { MulticitySegmentLines as SegmentType } from './__generated__/MulticitySegmentLines.graphql';

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

export default createFragmentContainer(
  MulticitySegmentLines,
  graphql`
    fragment MulticitySegmentLines on BookingMulticity {
      sectors {
        ...DrawSegmentLine
      }
    }
  `,
);
