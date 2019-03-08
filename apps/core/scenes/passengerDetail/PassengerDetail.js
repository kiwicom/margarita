// @flow

import * as React from 'react';
import { ScrollView, View } from 'react-native';
import {
  MenuGroup,
  MenuItem,
  MenuItemWrapper,
  MenuDescription,
} from '@kiwicom/universal-components';
import {
  PassengerCards,
  PassengerCardDetail,
  ShareIcon,
} from '@kiwicom/margarita-components';

const passengerCards = [
  {
    name: 'John Doe',
    gender: 'male',
    nationality: 'Russian',
    dateOfBirth: '22/04/1980',
    id: 'DF45SV8',
    insurance: 'Travel Insurance Name',
    passengerCount: 1,
    bags: [
      { count: 2, type: '40x15x30cm, 3kg' },
      { count: 1, type: '55x20x40cm, 8kg' },
    ],
    visaRequired: true,
  },
  {
    name: 'Jana Nováková',
    gender: 'female',
    nationality: 'Czech',
    dateOfBirth: '22/04/1984',
    id: 'DF45SV9',
    insurance: 'Travel Insurance Name',
    passengerCount: 1,
    bags: [{ count: 1, type: '40x15x30cm, 3kg' }],
    visaRequired: false,
  },
  {
    name: 'Jana Nováková',
    gender: 'female',
    nationality: 'Czech',
    dateOfBirth: '22/04/1984',
    id: 'DF45SV3',
    insurance: 'Travel Insurance Name',
    passengerCount: 1,
    bags: [{ count: 1, type: '40x15x30cm, 3kg' }],
  },
];

const handleEditPassenger = () => {
  // @TODO
};

const onPressInvite = () => {
  // @TODO
};

export default function PassengerDetail() {
  return (
    <ScrollView>
      <PassengerCards
        passengerCards={passengerCards}
        actionIconName="edit"
        onActionPress={handleEditPassenger}
      />
      <MenuGroup title="Contact details">
        <View>
          <MenuItemWrapper>
            <PassengerCardDetail
              value="a@a.com"
              label="E-mail"
              style="normal"
            />
          </MenuItemWrapper>
          <MenuItemWrapper>
            <PassengerCardDetail
              value="+420 776 665 544"
              label="Phone"
              style="normal"
            />
          </MenuItemWrapper>
        </View>
      </MenuGroup>
      <MenuGroup title="Manage">
        <MenuItem
          icon={
            // $FlowExpectedError clashing with class RNW$Text extends React$Component<RNW$Text$Props> from react-native-web flow-typed definitions
            <ShareIcon />
          }
          title="Invite co-traveller"
          onPress={onPressInvite}
        />
      </MenuGroup>
      <MenuDescription
        text="Kiwi.com is not responsible for any visa issue including airport transit
      visas. Contact the embassy or your foreign ministry to ensure that you
      will be able to complete your journey. Detailed visa information is also
      available from the IATA Travel Centre."
      />
    </ScrollView>
  );
}
