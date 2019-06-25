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

// @TODO replace with real data
import mockedPassengers from './mockedPassengers';

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
        passengerCards={mockedPassengers}
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
