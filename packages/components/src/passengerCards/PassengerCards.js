// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet, Text } from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { type PassengerType } from '@kiwicom/margarita-core';

import PassengerCard from '../passengerCard/PassengerCard';
import AddPassengerButton from './AddPassengerButton';

type Props = {|
  +onAddPassengerPress?: () => void,
  +onEditPress?: (?string) => void,
  +onDeletePress?: (?string) => void,
  +passengerCards: ?Array<PassengerType>,
|};

export default class PassengerCards extends React.Component<Props> {
  renderPassengerCard = (passengerCard: ?PassengerType, index: number) => {
    if (!passengerCard) return null;
    return (
      <PassengerCard
        passengerIndex={index + 1}
        key={passengerCard.id}
        onEditPress={this.props.onEditPress}
        onDeletePress={this.props.onDeletePress}
        passenger={passengerCard}
      />
    );
  };

  // @TODO tokens: we should use different color than colorTextButtonPrimary (it's not text, but color should be white)
  // @TODO tokens: there is no size 48px for button/icon
  // @TODO button should be rounded
  render() {
    const { onAddPassengerPress, passengerCards } = this.props;

    return (
      <View style={styles.container}>
        {passengerCards && passengerCards.length ? (
          passengerCards.map(this.renderPassengerCard)
        ) : (
          <Text
            align="center"
            size="large"
            type="info"
            style={styles.noPassengersText}
          >
            There are currently no passengers
          </Text>
        )}

        {onAddPassengerPress && (
          <View style={styles.addButtonContainer}>
            <AddPassengerButton onPress={onAddPassengerPress} />
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  addButtonContainer: {
    alignItems: 'center',
    marginBottom: parseFloat(defaultTokens.spaceSmall),
  },
  noPassengersText: {
    padding: parseInt(defaultTokens.spaceMedium, 10),
  },
  container: {
    android: {
      paddingTop: parseFloat(defaultTokens.spaceSmall),
    },
  },
});
