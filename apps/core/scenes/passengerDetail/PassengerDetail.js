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
  PassengerCardDetailItem,
  ShareIcon,
} from '@kiwicom/margarita-components';

const passengerCards = [
  {
    name: 'John',
    lastName: 'Doe',
    gender: 'male',
    nationality: 'Russian',
    dateOfBirth: new Date('22/04/1980'),
    id: 'DF45SV8',
    insurance: 'Travel Insurance Name',
    passengerCount: 1,
    bags: [
      {
        quantity: 1,
        dimensions: '28 x 52 x 78 cm',
        weight: '20 kg',
        price: {
          amount: 84,
          currency: 'EUR',
        },
      },
    ],
    visaRequired: true,
  },
  {
    name: 'Jana',
    lastName: 'Nováková',
    gender: 'female',
    nationality: 'Czech',
    dateOfBirth: new Date('1980-06-22'),
    id: 'DF45SV9',
    insurance: 'Travel Insurance Name',
    passengerCount: 1,
    bags: [
      {
        quantity: 1,
        dimensions: '11 x 32 x 70 cm',
        weight: '10 kg',
        price: {
          amount: 84,
          currency: 'EUR',
        },
      },
    ],
    visaRequired: false,
  },
  {
    name: 'Martin',
    lastName: 'Došek',
    gender: 'male',
    nationality: 'Czech',
    dateOfBirth: new Date('1984-06-12'),
    id: 'DF45SV3',
    insurance: 'Travel Insurance Name',
    passengerCount: 1,
    bags: [
      {
        quantity: 1,
        dimensions: '11 x 32 x 70 cm',
        weight: '10 kg',
        price: {
          amount: 84,
          currency: 'EUR',
        },
      },
      {
        quantity: 2,
        dimensions: '40 x 52 x 78 cm',
        weight: '10 kg',
        price: {
          amount: 84,
          currency: 'EUR',
        },
      },
    ],
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
        editIconName="edit"
        onEditPress={handleEditPassenger}
      />
      <MenuGroup title="Contact details">
        <View>
          <MenuItemWrapper>
            <PassengerCardDetailItem
              value="a@a.com"
              label="E-mail"
              style="normal"
            />
          </MenuItemWrapper>
          <MenuItemWrapper>
            <PassengerCardDetailItem
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
