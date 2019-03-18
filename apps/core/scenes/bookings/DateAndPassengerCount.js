// @flow

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet, Text, Icon } from '@kiwicom/universal-components';
import { createFragmentContainer, graphql } from '@kiwicom/margarita-relay';
import { format, parseISO } from 'date-fns';
import { DAY_MONTH_DATE_FORMAT } from '@kiwicom/margarita-config';

import type { DateAndPassengerCount_data as BookingType } from './__generated__/DateAndPassengerCount_data.graphql';

type Props = {|
  +data: BookingType,
|};

const DateAndPassengerCount = (props: Props) => {
  const date = props.data.departure?.time?.local ?? null;
  const formattedDate =
    date === null ? '' : format(parseISO(date), DAY_MONTH_DATE_FORMAT);
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

export default createFragmentContainer(DateAndPassengerCount, {
  data: graphql`
    fragment DateAndPassengerCount_data on BookingInterface {
      passengerCount
      departure {
        time {
          local
        }
      }
    }
  `,
});
