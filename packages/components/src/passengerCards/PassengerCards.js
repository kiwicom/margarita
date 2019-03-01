// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { Icon, Button, StyleSheet } from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import type {
  PassengerCardType,
  PassengerCardActionType,
} from '../passengerCard/PassengerCardTypes';
import PassengerCard from '../passengerCard/PassengerCard';

type Props = {|
  +passengerCards: ?Array<?PassengerCardType>,
  ...PassengerCardActionType,
|};

export default class PassengerCards extends React.Component<Props> {
  renderPassengerCard = (passengerCard: ?PassengerCardType) => {
    if (!passengerCard) return null;
    return (
      <PassengerCard
        key={passengerCard.id}
        actionIconName={this.props.actionIconName}
        onActionPress={this.props.onActionPress}
        {...passengerCard}
      />
    );
  };

  handleAddPassenger = () => {
    // @TODO
  };

  // @TODO tokens: we should use different color than colorTextButtonPrimary (it's not text, but color should be white)
  // @TODO tokens: there is no size 48px for button/icon
  // @TODO button should be rounded
  render() {
    return (
      <View style={styles.container}>
        {this.props.passengerCards &&
          this.props.passengerCards.map(this.renderPassengerCard)}

        <View style={styles.addButtonContainer}>
          <Button onPress={this.handleAddPassenger} width={48}>
            <Icon
              name="passenger-add"
              color={defaultTokens.colorTextButtonPrimary}
            />
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  addButtonContainer: {
    alignItems: 'center',
  },
  container: {
    android: {
      paddingTop: parseFloat(defaultTokens.spaceSmall),
    },
  },
});
