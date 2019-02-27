// @flow strict

import * as React from 'react';
import { ScrollView } from 'react-native';
import { IconNameTypes } from '@kiwicom/universal-components';

import { PassengerCardTypes } from '../passengerCard/PassengerCardTypes';
import PassengerCard from '../passengerCard/PassengerCard';

type Props = {|
  +passengerCards: ?Array<?PassengerCardTypes>,
  +onActionPress?: number => void,
  +actionIconName?: IconNameTypes,
|};

export default class PassengerCards extends React.Component<Props> {
  renderPassengerCard = passengerCard => {
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

  render() {
    return (
      <ScrollView>
        {this.props.passengerCards &&
          this.props.passengerCards.map(this.renderPassengerCard)}
      </ScrollView>
    );
  }
}
