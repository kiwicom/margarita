// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { Text, StyleSheet, Icon, Card } from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import type { PassengerType, BaggageBundleType } from '@kiwicom/margarita-core';

import PassengerCardDetail from './PassengerCardDetail';
import PassengerAdditonalInformation from './PassengerAdditonalInformation';
import IconButton from './IconButton';
import Separator from '../separator/Separator';
import VisaInfo from '../visaInfo/VisaInfo';
import { getTitle } from './helpers';

type Props = {|
  ...PassengerType,
  +onEditPress?: (?string) => void,
  +onDeletePress?: (?string) => void,
|};

class PassengerCard extends React.Component<Props> {
  static defaultProps = {
    passengerCount: 1,
    name: '',
    lastName: '',
    gender: 'other',
    nationality: '',
    dateOfBirth: null,
    id: '',
    bags: null,
  };

  handleEditPress = () => {
    if (this.props.onEditPress) {
      this.props.onEditPress(this.props.id);
    }
  };

  handleDeletePress = () => {
    if (this.props.onDeletePress) {
      this.props.onDeletePress(this.props.id);
    }
  };

  render() {
    const {
      name,
      lastName,
      gender,
      nationality,
      dateOfBirth,
      id,
      insurance,
      passengerCount,
      bags,
      onEditPress,
      onDeletePress,
      visaRequired,
    } = this.props;
    const newPassenger = `${passengerCount}. Passenger`;
    const title = getTitle(gender);
    const passengerWithTitle = `${title} ${name ?? ''} ${lastName ?? ''}`;
    const passenger = name !== null ? passengerWithTitle : newPassenger;

    return (
      <View style={styles.container}>
        <Card>
          <View style={styles.header}>
            <Icon name="passenger" />
            <Text style={styles.passengerName} size="large">
              {passenger}
            </Text>
            {onEditPress && (
              <IconButton iconType="edit" onPress={this.handleEditPress} />
            )}
            {onDeletePress && (
              <IconButton iconType="close" onPress={this.handleDeletePress} />
            )}
          </View>
          <PassengerCardDetail
            nationality={nationality}
            id={id}
            dateOfBirth={dateOfBirth}
          />
          <Separator />
          <PassengerAdditonalInformation bags={bags} insurance={insurance} />
        </Card>
        {visaRequired != null && <VisaInfo visaRequired={visaRequired} />}
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
