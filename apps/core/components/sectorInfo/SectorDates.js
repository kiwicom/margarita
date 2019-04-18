// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/margarita-relay';
import { StyleSheet } from '@kiwicom/universal-components';
import { Duration } from '@kiwicom/margarita-components';
import { View } from 'react-native';

import SectorDate from './SectorDate';
import type { SectorDates_data as BookingType } from './__generated__/SectorDates_data.graphql';

type Props = {|
  +data: ?BookingType,
|};

const SectorDates = (props: Props) => {
  return (
    <>
      <View style={styles.row}>
        <SectorDate data={props.data?.departure} type="date" />
        <SectorDate data={props.data?.arrival} type="date" />
      </View>
      <View style={styles.row}>
        <SectorDate data={props.data?.departure} type="time" />
        <Duration duration={props.data?.duration} />
        <SectorDate data={props.data?.arrival} type="time" />
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

export default createFragmentContainer(SectorDates, {
  data: graphql`
    fragment SectorDates_data on Sector {
      departure {
        ...SectorDate_data
      }
      arrival {
        ...SectorDate_data
      }
      duration
    }
  `,
});
