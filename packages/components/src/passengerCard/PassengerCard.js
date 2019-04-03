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

import BagInformation from './BagInformation';
import PassengerCardDetail from './PassengerCardDetail';
import Separator from '../separator/Separator';
import VisaInfo from '../visaInfo/VisaInfo';
import {
  type PassengerCardType,
  type PassengerCardActionType,
} from './PassengerCardTypes';

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
  ...PassengerCardType,
  ...PassengerCardActionType,
|};

class PassengerCard extends React.Component<Props> {
  static defaultProps = {
    passengerCount: 1,
    name: '',
    gender: 'other',
    nationality: '',
    dateOfBirth: '',
    id: '',
    insurance: '',
    bags: null,
  };

  handleActionPress = () => {
    if (this.props.onActionPress) {
      this.props.onActionPress(this.props.id);
    }
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
      visaRequired,
    } = this.props;
    const newPassenger = `${passengerCount}. Passenger`;
    const title = getTitle(gender);
    const passengerWithTitle = `${title} ${name}`;
    const passenger = name ? passengerWithTitle : newPassenger;

    return (
      <View style={styles.container}>
        <Card>
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
