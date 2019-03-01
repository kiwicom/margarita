// @flow

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet } from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { graphql, createFragmentContainer } from '@kiwicom/margarita-relay';

import Passenger from './Passenger';
import Bag from './Bag';
import type { PassengersList_data as PassengersType } from './__generated__/PassengersList_data.graphql';

type Props = {|
  +data: ?PassengersType,
|};

const PassengersList = (props: Props) => {
  const passengers = props.data?.passengers ?? [];
  const bagInfo = props.data?.bagInfo ?? [];
  return (
    <View style={styles.container}>
      {passengers.map(passenger => (
        <Passenger data={passenger} key={passenger?.id} />
      ))}
      {bagInfo.map(bag => (
        <Bag data={bag} key={bag?.type} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginStart: 48,
    paddingVertical: parseInt(defaultTokens.spaceXXSmall, 10),
  },
});

export default createFragmentContainer(PassengersList, {
  data: graphql`
    fragment PassengersList_data on BookingInterface {
      passengers {
        id
        ...Passenger_data
      }
      bagInfo {
        type
        ...Bag_data
      }
    }
  `,
});
