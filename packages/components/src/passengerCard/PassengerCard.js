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
import type { PassengerType, BaggageBundleType } from '@kiwicom/margarita-core';

import PassengerCardDetail from './PassengerCardDetail';
import PassengerCardDetailItem from './PassengerCardDetailItem';
import BagInformation from './BagInformation';
import Separator from '../separator/Separator';
import VisaInfo from '../visaInfo/VisaInfo';
import { type PassengerCardActionType } from './PassengerCardTypes';
import { getTitle } from './helpers';

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
          <PassengerCardDetail
            nationality={nationality}
            id={id}
            dateOfBirth={dateOfBirth}
          />
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
              <PassengerCardDetailItem
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
