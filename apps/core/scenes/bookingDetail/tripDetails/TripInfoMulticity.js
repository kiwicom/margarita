// @flow

import * as React from 'react';
import { createFragmentContainer, graphql } from '@kiwicom/margarita-relay';
import { Separator } from '@kiwicom/margarita-components';
import { StyleSheet } from '@kiwicom/universal-components';

import TripInfo from './TripInfo';
import type { TripInfoMulticity as BookingType } from './__generated__/TripInfoMulticity.graphql';

type Props = {|
  +data: ?BookingType,
|};

function TripInfoMulticity(props: Props) {
  const trips = props.data?.trips ?? [];
  return trips.map((trip, index) => (
    <React.Fragment key={index}>
      <TripInfo data={trip} />
      <Separator style={styles.separator} />
    </React.Fragment>
  ));
}

const styles = StyleSheet.create({
  separator: {
    marginHorizontal: -18,
    marginVertical: 8,
  },
});

export default createFragmentContainer(
  TripInfoMulticity,
  graphql`
    fragment TripInfoMulticity on BookingInterface {
      ... on BookingMulticity {
        trips {
          ...TripInfo
        }
      }
    }
  `,
);
