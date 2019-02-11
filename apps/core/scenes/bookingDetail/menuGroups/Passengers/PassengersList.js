// @flow

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet } from '@kiwicom/universal-components';
import { graphql, createFragmentContainer } from '@kiwicom/margarita-relay';

import Passenger from './Passenger';
import type { PassengersList as PassengersType } from './__generated__/PassengersList.graphql';

type Props = {|
  +data: ?PassengersType,
|};

const PassengersList = (props: Props) => {
  const passengers = props.data?.passengers ?? [];
  return (
    <View style={styles.container}>
      {passengers.map(passenger => (
        <Passenger data={passenger} key={passenger?.id} />
      ))}
    </View>
  );
};

export default createFragmentContainer(
  PassengersList,
  graphql`
    fragment PassengersList on BookingInterface {
      passengers {
        id
        ...Passenger
      }
    }
  `,
);

const styles = StyleSheet.create({
  container: {
    marginStart: 48,
    paddingVertical: 6,
  },
});
