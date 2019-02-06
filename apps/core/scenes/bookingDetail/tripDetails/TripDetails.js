// @flow

import * as React from 'react';
import { Card, StyleSheet } from '@kiwicom/universal-components';
import { Separator } from '@kiwicom/margarita-components';
import { createFragmentContainer, graphql } from '@kiwicom/margarita-relay';

import Header from './Header';
import TripInfo from './TripInfo';
import type { TripDetails as BookingType } from './__generated__/TripDetails.graphql';

type Props = {|
  +data: ?BookingType,
|};

function TripDetails(props: Props) {
  return (
    <Card style={styles.card}>
      <Header data={props.data} />
      <Separator style={styles.separator} />
      <TripInfo data={props.data} />
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    paddingHorizontal: 18,
  },
  separator: {
    marginTop: 7,
    marginBottom: 17.5,
  },
});

export default createFragmentContainer(
  TripDetails,
  graphql`
    fragment TripDetails on CustomerBooking {
      ...Header
      ...TripInfo
    }
  `,
);
