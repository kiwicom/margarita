// @flow

import * as React from 'react';
import { View, Platform } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { StyleSheet, Text, designTokens } from '@kiwicom/universal-components';
import { graphql, createFragmentContainer } from '@kiwicom/margarita-relay';

import type { FlightTimes_data as FlightTimesType } from './__generated__/FlightTimes_data.graphql';
import LocalTime from './LocalTime';

type Props = {|
  +data: ?FlightTimesType,
|};

const FlightTimes = (props: Props) => (
  <View style={styles.container}>
    <LocalTime data={props.data?.departure} style={styles.text} />
    {Platform.OS === 'web' && <Text style={styles.text}> - </Text>}
    <LocalTime data={props.data?.arrival} style={styles.text} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    minWidth: 55,
    web: {
      flexDirection: 'row',
    },
  },
  text: {
    fontWeight: 'bold',
    fontSize: parseFloat(defaultTokens.fontSizeTextNormal),
    color: defaultTokens.colorTextAttention,
    padding: 5,
    web: {
      fontWeight: designTokens.fontWeightMedium,
      color: designTokens.paletteBlueDark,
      padding: 0,
      lineHeight: 17,
    },
  },
});

export default createFragmentContainer(FlightTimes, {
  data: graphql`
    fragment FlightTimes_data on Sector {
      arrival {
        ...LocalTime_data
      }
      departure {
        ...LocalTime_data
      }
    }
  `,
});
