// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/margarita-relay';
import { SECTOR_COLOR_CODES } from '@kiwicom/margarita-config';

import DrawSegmentLine from './DrawSegmentLine';
import type { ReturnSegmentLines_data as SegmentType } from './__generated__/ReturnSegmentLines_data.graphql';

type Props = {|
  +data: ?SegmentType,
|};

const ReturnSegmentLines = (props: Props) => {
  return (
    <>
      <DrawSegmentLine
        data={props.data?.outbound}
        color={SECTOR_COLOR_CODES[0]}
      />
      <DrawSegmentLine
        data={props.data?.inbound}
        color={SECTOR_COLOR_CODES[1]}
      />
    </>
  );
};

export default createFragmentContainer(ReturnSegmentLines, {
  data: graphql`
    fragment ReturnSegmentLines_data on BookingReturn {
      inbound {
        ...DrawSegmentLine_data
      }
      outbound {
        ...DrawSegmentLine_data
      }
    }
  `,
});
