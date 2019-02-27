// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import {
  Text,
  StyleSheet,
  Icon,
  Card,
  type IconNameType,
} from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import BagInformation from './BagInformation';
import PassengerCardDetail from './PassengerCardDetail';
import Separator from '../separator/Separator';
import ExtendedTouchable from '../ExtendedTouchable';

type Bag = {|
  +count: number,
  +type: string,
|};

type Props = {|
  +name: string,
  +gender: 'female' | 'male' | 'other',
  +nationality: string,
  +dateOfBirth: string,
  +id: string,
  +insurance: string,
  +bags: null | Array<Bag>,
  +passengerCount: number,
  +actionIconName?: IconNameType,
  +onActionPress?: () => void,
|};

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

export default function PassengerCard(props: Props) {
  const newPassenger = `${props.passengerCount}. Passenger`;
  const title = getTitle(props.gender);
  const passengerWithTitle = `${title} ${props.name}`;
  const passenger = props.name ? passengerWithTitle : newPassenger;

  const { nationality, dateOfBirth, id, insurance, bags } = props;

  return (
    <Card style={styles.container}>
      <View style={styles.containerName}>
        <Icon name="passenger" />
        <Text style={styles.passengerName} size="large">
          {passenger}
        </Text>
        {props.onActionPress && props.actionIconName && (
          <ExtendedTouchable onPress={props.onActionPress}>
            <Icon
              name={props.actionIconName}
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
    paddingHorizontal: parseInt(defaultTokens.spaceMedium, 10),
    ios: {
      marginHorizontal: parseInt(defaultTokens.spaceXSmall, 10),
    },
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
