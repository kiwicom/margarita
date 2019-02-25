// @flow

import * as React from 'react';
import { BookingTypeRenderer } from '@kiwicom/margarita-components';
import { graphql, createFragmentContainer } from '@kiwicom/margarita-relay';

import OneWaySegmentLines from './OneWaySegmentLines';
import ReturnSegmentLines from './ReturnSegmentLines';
import MulticitySegmentLines from './MulticitySegmentLines';
import type { MapLines as SegmentType } from './__generated__/MapLines.graphql';

type Props = {|
  +data: ?SegmentType,
|};

const MapLines = (props: Props) => {
  return (
    <BookingTypeRenderer
      type={props.data?.type}
      oneWayComponent={<OneWaySegmentLines data={props.data} />}
      returnComponent={<ReturnSegmentLines data={props.data} />}
      multicityComponent={<MulticitySegmentLines data={props.data} />}
    />
  );
};
export default createFragmentContainer(
  MapLines,
  graphql`
    fragment MapLines on BookingInterface {
      type
      ...OneWaySegmentLines
      ...ReturnSegmentLines
      ...MulticitySegmentLines
    }
  `,
);
