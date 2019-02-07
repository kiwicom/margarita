// @flow

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet, Text, Icon } from '@kiwicom/universal-components';
import { createFragmentContainer, graphql } from '@kiwicom/margarita-relay';
import format from 'date-fns/format';

import type { DateAndPassengerCount as BookingType } from './__generated__/DateAndPassengerCount.graphql';

type Props = {|
  +data: BookingType,
|};

const DateAndPassengerCount = (props: Props) => {
  const date = props.data.departure?.time?.local ?? null;
  const formattedDate = date === null ? '' : format(date, 'ddd MM/DD');
  return (
    <View style={[styles.row, styles.container]}>
      <Text type="white" size="small">
        {formattedDate}
      </Text>
      <View style={[styles.row, styles.passengerCount]}>
        <Text type="white" size="small" style={styles.passengerCountText}>
          {props.data.passengerCount}
        </Text>
        <Icon name="passengers" color="white" size="small" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  container: {
    justifyContent: 'space-between',
  },
  passengerCount: {
    alignItems: 'center',
  },
  passengerCountText: {
    marginEnd: 6,
  },
});

export default createFragmentContainer(
  DateAndPassengerCount,
  graphql`
    fragment DateAndPassengerCount on BookingInterface {
      passengerCount
      departure {
        time {
          local
        }
      }
    }
  `,
);
