// @flow strict

import * as React from 'react';
import { View, Platform } from 'react-native';
import { Icon, Button, StyleSheet } from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import type {
  PassengerCardType,
  PassengerCardActionType,
} from '../passengerCard/PassengerCardTypes';
import PassengerCard from '../passengerCard/PassengerCard';

type Props = {|
  +onPassengerAddPress?: () => void,
  +passengerCards: ?Array<?PassengerCardType>,
  ...PassengerCardActionType,
|};

const AddPassengerIos = ({ onPress }) => (
  <Button onPress={onPress} label="Add another passenger" block />
);

const AddPassengerAndroid = ({ onPress }) => (
  <Button
    onPress={onPress}
    width={parseFloat(defaultTokens.heightButtonNormal)}
    circled
  >
    <Icon name="passenger-add" color={defaultTokens.colorTextButtonPrimary} />
  </Button>
);

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
    const { onPassengerAddPress, passengerCards } = this.props;
    return (
      <View style={styles.container}>
        {passengerCards && passengerCards.map(this.renderPassengerCard)}

        {onPassengerAddPress && (
          <View style={styles.addButtonContainer}>
            {Platform.OS === 'ios' ? (
              <AddPassengerIos onPress={onPassengerAddPress} />
            ) : (
              <AddPassengerAndroid onPress={onPassengerAddPress} />
            )}
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
