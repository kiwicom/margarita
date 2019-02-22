// @flow

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet } from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { graphql, createFragmentContainer } from '@kiwicom/margarita-relay';

import Passenger from './Passenger';
import Bag from './Bag';
import type { PassengersList as PassengersType } from './__generated__/PassengersList.graphql';

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

export default createFragmentContainer(
  PassengersList,
  graphql`
    fragment PassengersList on BookingInterface {
      passengers {
        id
        ...Passenger
      }
      bagInfo {
        type
        ...Bag
      }
    }
  `,
);
