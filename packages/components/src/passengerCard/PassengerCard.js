// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { Text, StyleSheet, Icon, Card } from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import type { PassengerType } from '@kiwicom/margarita-core';

import PassengerCardDetail from './PassengerCardDetail';
import PassengerAdditonalInformation from './PassengerAdditonalInformation';
import IconButton from './IconButton';
import Separator from '../separator/Separator';
import VisaInfo from '../visaInfo/VisaInfo';
import { getPassengerTitle } from './helpers';

type Props = {|
  +passenger: ?PassengerType,
  +passengerIndex: number,
  +onEditPress?: (?string) => void,
  +onDeletePress?: (?string) => void,
|};

class PassengerCard extends React.Component<Props> {
  handleEditPress = () => {
    if (this.props.onEditPress) {
      this.props.onEditPress(this.props.passenger?.id);
    }
  };

  handleDeletePress = () => {
    if (this.props.onDeletePress) {
      this.props.onDeletePress(this.props.passenger?.id);
    }
  };

  getCardTitle = () => {
    const { passenger, passengerIndex } = this.props;

    const passengerType = passenger?.type === 'infant' ? ' (infant)' : '';

    if (passenger?.name || passenger?.lastName) {
      const passengerTitle = getPassengerTitle(passenger?.gender);
      return `${passengerTitle} ${passenger?.name ||
        ''} ${passenger?.lastName || ''}${passengerType}`;
    }
    return `${passengerIndex}. Passenger${passengerType}`;
  };

  render() {
    const { passenger, onEditPress, onDeletePress } = this.props;
    return (
      <View style={styles.container}>
        <Card>
          <View style={styles.header}>
            <Icon name="passenger" />
            <Text style={styles.passengerName} size="large">
              {this.getCardTitle()}
            </Text>
            {onEditPress && (
              <IconButton iconType="edit" onPress={this.handleEditPress} />
            )}
            {onDeletePress && (
              <IconButton iconType="close" onPress={this.handleDeletePress} />
            )}
          </View>
          <PassengerCardDetail
            nationality={passenger?.nationality}
            passportId={passenger?.passportId}
            dateOfBirth={passenger?.dateOfBirth}
          />
          <Separator />
          <PassengerAdditonalInformation
            bags={passenger?.bags}
            insurance={passenger?.insurance}
          />
        </Card>
        {passenger?.visaRequired != null && (
          <VisaInfo visaRequired={passenger?.visaRequired} />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: parseInt(defaultTokens.spaceSmall, 10),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: parseInt(defaultTokens.spaceSmall, 10),
    paddingBottom: parseInt(defaultTokens.spaceMedium, 10),
  },
  passengerName: {
    flex: 1,
  },
});

export default PassengerCard;
