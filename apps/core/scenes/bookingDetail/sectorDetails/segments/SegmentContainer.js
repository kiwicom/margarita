// @flow

import * as React from 'react';
import { Platform } from 'react-native';
import { graphql, createFragmentContainer } from '@kiwicom/margarita-relay';
import {
  BookingTypeRenderer,
  SectorDetailsWrapper,
} from '@kiwicom/margarita-components';

import SegmentMap from './SegmentMap';
import type { SegmentContainer_data as BookingType } from './__generated__/SegmentContainer_data.graphql';
import SectorsListOneWay from '../SectorsListOneWay';
import SectorsListReturn from '../SectorsListReturn';
import SectorsListMulticity from '../SectorsListMulticity';

type Props = {|
  +data: ?BookingType,
|};

export function SegmentContainer(props: Props) {
  return (
    <SectorDetailsWrapper>
      <BookingTypeRenderer
        type={props.data?.__typename}
        oneWayComponent={<SectorsListOneWay data={props.data} />}
        returnComponent={<SectorsListReturn data={props.data} />}
        multicityComponent={<SectorsListMulticity data={props.data} />}
      />
      {Platform.OS !== 'web' && <SegmentMap data={props.data} />}
    </SectorDetailsWrapper>
  );
}

export default createFragmentContainer(SegmentContainer, {
  data: graphql`
    fragment SegmentContainer_data on BookingInterface {
      __typename
      ...SectorsListOneWay_data
      ...SectorsListReturn_data
      ...SectorsListMulticity_data
      ...SegmentMap_data
    }
  `,
});
