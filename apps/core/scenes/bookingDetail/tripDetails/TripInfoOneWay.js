// @flow

import * as React from 'react';
import { createFragmentContainer, graphql } from '@kiwicom/margarita-relay';

import TripInfo from './TripInfo';
import type { TripInfoOneWay as BookingType } from './__generated__/TripInfoOneWay.graphql';

type Props = {|
  +data: ?BookingType,
|};

function TripInfoOneWay(props: Props) {
  return <TripInfo data={props.data?.trip} />;
}

export default createFragmentContainer(
  TripInfoOneWay,
  graphql`
    fragment TripInfoOneWay on BookingInterface {
      ... on BookingOneWay {
        trip {
          ...TripInfo
        }
      }
    }
  `,
);
