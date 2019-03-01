// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/margarita-relay';
import { SECTOR_COLOR_CODES } from '@kiwicom/margarita-config';

import DrawSegmentLine from './DrawSegmentLine';
import type { OneWaySegmentLines_data as SegmentType } from './__generated__/OneWaySegmentLines_data.graphql';

type Props = {|
  +data: ?SegmentType,
|};

const OneWaySegmentLines = (props: Props) => (
  <DrawSegmentLine data={props.data?.sector} color={SECTOR_COLOR_CODES[0]} />
);

export default createFragmentContainer(OneWaySegmentLines, {
  data: graphql`
    fragment OneWaySegmentLines_data on BookingOneWay {
      sector {
        ...DrawSegmentLine_data
      }
    }
  `,
});
