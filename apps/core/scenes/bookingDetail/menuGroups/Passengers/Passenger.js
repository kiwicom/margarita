// @flow

import * as React from 'react';
import { StyleSheet, Text } from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { View } from 'react-native';
import { graphql, createFragmentContainer } from '@kiwicom/margarita-relay';

import type { Passenger as PassengerType } from './__generated__/Passenger.graphql';

type Props = {|
  +data: ?PassengerType,
|};

const Passenger = (props: Props) => {
  const title = props.data?.title || '';
  const firstname = props.data?.firstname || '';
  const lastname = props.data?.lastname || '';
  const birthday = props.data?.birthday || '';

  const passengerWithTitle = `${title}. ${firstname} ${lastname}`;
  return (
    <View style={styles.container}>
      <Text type="primary" size="small">
        {passengerWithTitle}
      </Text>
      <Text type="primary" size="small">
        {birthday}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: parseInt(defaultTokens.spaceSmall, 10),
    paddingVertical: parseInt(defaultTokens.spaceXXSmall, 10),
  },
});

export default createFragmentContainer(
  Passenger,
  graphql`
    fragment Passenger on Passenger {
      title
      firstname
      lastname
      birthday
    }
  `,
);
