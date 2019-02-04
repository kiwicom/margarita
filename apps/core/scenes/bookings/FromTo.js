// @flow

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet, Icon } from '@kiwicom/universal-components';
import { createFragmentContainer, graphql } from '@kiwicom/margarita-relay';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import type { FromTo as BookingType } from './__generated__/FromTo.graphql';
import CityName from './CityName';

type Props = {|
  +data: BookingType,
|};

const FromTo = (props: Props) => (
  <View style={styles.container}>
    <CityName data={props.data.departure} />
    <Icon name="flight-return" color={defaultTokens.paletteWhite} />
    <CityName data={props.data.arrival} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default createFragmentContainer(
  FromTo,
  graphql`
    fragment FromTo on CustomerBooking {
      departure {
        ...CityName
      }
      arrival {
        ...CityName
      }
    }
  `,
);
