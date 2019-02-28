// @flow

import * as React from 'react';
import { BookingTypeRenderer } from '@kiwicom/margarita-components';
import { graphql, createFragmentContainer } from '@kiwicom/margarita-relay';

import OneWaySegmentLines from './OneWaySegmentLines';
import ReturnSegmentLines from './ReturnSegmentLines';
import MulticitySegmentLines from './MulticitySegmentLines';
import type { MapLines_data as SegmentType } from './__generated__/MapLines_data.graphql';

type Props = {|
  +data: ?SegmentType,
|};

const MapLines = (props: Props) => {
  return (
    <BookingTypeRenderer
      type={props.data?.__typename}
      oneWayComponent={<OneWaySegmentLines data={props.data} />}
      returnComponent={<ReturnSegmentLines data={props.data} />}
      multicityComponent={<MulticitySegmentLines data={props.data} />}
    />
  );
};
export default createFragmentContainer(MapLines, {
  data: graphql`
    fragment MapLines_data on BookingInterface {
      __typename
      ...OneWaySegmentLines_data
      ...ReturnSegmentLines_data
      ...MulticitySegmentLines_data
    }
  `,
});
