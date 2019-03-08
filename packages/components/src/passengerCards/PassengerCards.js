// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet } from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import type {
  PassengerCardType,
  PassengerCardActionType,
} from '../passengerCard/PassengerCardTypes';
import PassengerCard from '../passengerCard/PassengerCard';
import AddPassengerButton from './AddPassengerButton';

type Props = {|
  +onAddPassengerPress?: () => void,
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

  // @TODO tokens: we should use different color than colorTextButtonPrimary (it's not text, but color should be white)
  // @TODO tokens: there is no size 48px for button/icon
  // @TODO button should be rounded
  render() {
    const { onAddPassengerPress, passengerCards } = this.props;
    return (
      <View style={styles.container}>
        {passengerCards && passengerCards.map(this.renderPassengerCard)}

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
  container: {
    android: {
      paddingTop: parseFloat(defaultTokens.spaceSmall),
    },
  },
});
