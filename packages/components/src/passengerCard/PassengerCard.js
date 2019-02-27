// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { Text, StyleSheet, Icon, Card } from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import BagInformation from './BagInformation';
import PassengerCardDetail from './PassengerCardDetail';
import Separator from '../separator/Separator';
import ExtendedTouchable from '../ExtendedTouchable';
import { type PassengerCardProps } from './PassengerCardTypes';

function getTitle(gender) {
  switch (gender) {
    case 'male':
      return 'Mr.';
    case 'female':
      return 'Ms.';
    default:
      return '';
  }
}

class PassengerCard extends React.Component<PassengerCardProps> {
  handleActionPress = () => {
    this.props.onActionPress(this.props.id);
  };

  render() {
    const {
      name,
      gender,
      nationality,
      dateOfBirth,
      id,
      insurance,
      passengerCount,
      bags,
      actionIconName,
      onActionPress,
    } = this.props;
    const newPassenger = `${passengerCount}. Passenger`;
    const title = getTitle(gender);
    const passengerWithTitle = `${title} ${name}`;
    const passenger = name ? passengerWithTitle : newPassenger;

    return (
      <Card style={styles.container}>
        <View style={styles.containerName}>
          <Icon name="passenger" />
          <Text style={styles.passengerName} size="large">
            {passenger}
          </Text>
          {onActionPress && actionIconName && (
            <ExtendedTouchable onPress={this.handleActionPress}>
              <Icon
                name={actionIconName}
                color={defaultTokens.backgroundButtonPrimary}
              />
            </ExtendedTouchable>
          )}
        </View>

        <View style={styles.containerTop}>
          <PassengerCardDetail
            value={nationality}
            label="Nationality"
            style="normal"
          />
          <PassengerCardDetail
            value={dateOfBirth}
            label="Date of birth"
            style="normal"
          />
          <PassengerCardDetail value={id} label="ID" style="id_row_wrapper" />
        </View>
        <Separator />
        <View style={styles.containerBottom}>
          <PassengerCardDetail
            value={insurance}
            label="Travel Insurance"
            style="normal"
          />
          <View style={styles.bagsRowWrapper}>
            <Text type="secondary" style={styles.textPadding}>
              Bags
            </Text>
            <View>
              {bags &&
                bags.map(bag => (
                  <BagInformation
                    key={bag.type}
                    count={bag.count}
                    type={bag.type}
                  />
                ))}
            </View>
          </View>
        </View>
      </Card>
    );
  }
}

PassengerCard.defaultProps = {
  passengerCount: 1,
  name: '',
  gender: 'other',
  nationality: '',
  dateOfBirth: '',
  id: '',
  insurance: '',
  bags: null,
};

const styles = StyleSheet.create({
  container: {
    marginBottom: parseFloat(defaultTokens.spaceSmall),
  },
  containerName: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: parseFloat(defaultTokens.spaceSmall),
    paddingBottom: parseFloat(defaultTokens.spaceMedium),
  },
  passengerName: {
    flex: 1,
  },
  containerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60,
  },
  containerBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12,
    height: 120,
  },
  bagsRowWrapper: {
    flexGrow: 3,
  },
  textPadding: {
    paddingBottom: parseFloat(defaultTokens.spaceXSmall),
  },
});

export default PassengerCard;
