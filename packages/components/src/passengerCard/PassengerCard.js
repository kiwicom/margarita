// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import {
  Text,
  StyleSheet,
  Icon,
  Card,
  ExtendedTouchable,
} from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { format } from 'date-fns';
import { US_DATE_FORMAT } from '@kiwicom/margarita-config';
import type { PassengerType, BaggageBundleType } from '@kiwicom/margarita-core';

import BagInformation from './BagInformation';
import PassengerCardDetail from './PassengerCardDetail';
import Separator from '../separator/Separator';
import VisaInfo from '../visaInfo/VisaInfo';
import { type PassengerCardActionType } from './PassengerCardTypes';

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

type Props = {|
  ...PassengerType,
  ...PassengerCardActionType,
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

  handleActionPress = () => {
    if (this.props.onEditPress) {
      this.props.onEditPress(this.props.id);
    }
  };

  handleSecondaryActionPress = () => {
    if (this.props.onDeletePress) {
      this.props.onDeletePress(this.props.id);
    }
  };

  parseBagType = (bag: BaggageBundleType) =>
    `${bag.dimensions ? `${bag.dimensions},` : ''} ${bag.weight ?? ''}`;

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
      editIconName,
      deleteIconName,
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
          <View style={styles.containerName}>
            <Icon name="passenger" />
            <Text style={styles.passengerName} size="large">
              {passenger}
            </Text>
            {onEditPress && editIconName && (
              <View style={styles.actionIcon}>
                <ExtendedTouchable onPress={this.handleActionPress}>
                  <Icon
                    name={editIconName}
                    color={defaultTokens.backgroundButtonPrimary}
                  />
                </ExtendedTouchable>
              </View>
            )}
            {onDeletePress && deleteIconName && (
              <ExtendedTouchable onPress={this.handleSecondaryActionPress}>
                <Icon
                  name={deleteIconName}
                  color={defaultTokens.backgroundButtonPrimary}
                />
              </ExtendedTouchable>
            )}
          </View>

          <View style={styles.containerTop}>
            <PassengerCardDetail
              value={nationality ?? '-'}
              label="Nationality"
              style="normal"
            />
            <PassengerCardDetail
              value={dateOfBirth ? format(dateOfBirth, US_DATE_FORMAT) : '-'}
              label="Date of birth"
              style="normal"
            />
            <PassengerCardDetail
              value={id ?? ''}
              label="ID"
              style="id_row_wrapper"
            />
          </View>
          <Separator />
          <View style={styles.containerBottom}>
            <View style={styles.bagsRowWrapper}>
              <Text type="secondary" style={styles.textPadding}>
                Bags
              </Text>
              <View>
                {bags &&
                  bags.map((bag, idx) => (
                    <BagInformation
                      key={idx}
                      count={bag.quantity}
                      type={this.parseBagType(bag)}
                    />
                  ))}
              </View>
            </View>
            {insurance != null && (
              <PassengerCardDetail
                value={insurance}
                label="Travel Insurance"
                style="normal"
              />
            )}
          </View>
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
  containerName: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: parseInt(defaultTokens.spaceSmall, 10),
    paddingBottom: parseInt(defaultTokens.spaceMedium, 10),
  },
  passengerName: {
    flex: 1,
  },
  containerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60,
  },
  actionIcon: {
    paddingEnd: parseInt(defaultTokens.spaceLarge, 10),
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
    paddingBottom: parseInt(defaultTokens.spaceXSmall, 10),
  },
});

export default PassengerCard;
