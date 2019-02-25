// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/margarita-relay';
import { SECTOR_COLOR_CODES } from '@kiwicom/margarita-config';

import DrawSegmentLine from './DrawSegmentLine';
import type { ReturnSegmentLines as SegmentType } from './__generated__/ReturnSegmentLines.graphql';

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

export default createFragmentContainer(
  ReturnSegmentLines,
  graphql`
    fragment ReturnSegmentLines on BookingInterface {
      ... on BookingReturn {
        inbound {
          ...DrawSegmentLine
        }
        outbound {
          ...DrawSegmentLine
        }
      }
    }
  `,
);
