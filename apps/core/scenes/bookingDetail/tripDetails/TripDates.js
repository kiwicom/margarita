// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/margarita-relay';
import { StyleSheet } from '@kiwicom/universal-components';
import { Duration } from '@kiwicom/margarita-components';
import { View } from 'react-native';

import TripDate from './TripDate';
import type { TripDates as BookingType } from './__generated__/TripDates.graphql';

type Props = {|
  +data: ?BookingType,
|};

const TripDates = (props: Props) => {
  return (
    <>
      <View style={styles.row}>
        <TripDate data={props.data?.departure} type="date" />
        <TripDate data={props.data?.arrival} type="date" />
      </View>
      <View style={styles.row}>
        <TripDate data={props.data?.departure} type="time" />
        <Duration duration={props.data?.duration} />
        <TripDate data={props.data?.arrival} type="time" />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default createFragmentContainer(
  TripDates,
  graphql`
    fragment TripDates on Sector {
      departure {
        ...TripDate
      }
      arrival {
        ...TripDate
      }
      duration
    }
  `,
);
