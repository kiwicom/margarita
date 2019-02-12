// @flow

import * as React from 'react';
import { Card, StyleSheet } from '@kiwicom/universal-components';
import { Separator, BookingTypeRenderer } from '@kiwicom/margarita-components';
import { createFragmentContainer, graphql } from '@kiwicom/margarita-relay';

import Header from './Header';
import TripInfoOneWay from './TripInfoOneWay';
import TripInfoMulticity from './TripInfoMulticity';
import TripInfoReturn from './TripInfoReturn';
import type { TripDetails as BookingType } from './__generated__/TripDetails.graphql';

type Props = {|
  +data: ?BookingType,
|};

function TripDetails(props: Props) {
  const type = props.data?.type;
  return (
    <Card style={styles.card}>
      <Header data={props.data} />
      <Separator style={styles.separator} />
      <BookingTypeRenderer
        type={type}
        oneWayComponent={<TripInfoOneWay data={props.data} />}
        returnComponent={<TripInfoReturn data={props.data} />}
        multicityComponent={<TripInfoMulticity data={props.data} />}
      />
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
    fragment TripDetails on BookingInterface {
      ...Header
      ...TripInfoOneWay
      ...TripInfoMulticity
      ...TripInfoReturn
      type
    }
  `,
);
