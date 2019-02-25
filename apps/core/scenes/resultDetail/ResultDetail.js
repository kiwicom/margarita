// @flow

import * as React from 'react';
import { View, ScrollView } from 'react-native';
import {
  StyleSheet,
  Card,
  TextInput,
  Picker,
} from '@kiwicom/universal-components';
import { HeaderWithIcon, PassengerCards } from '@kiwicom/margarita-components';
import {
  withNavigation,
  Routes,
  type Navigation,
} from '@kiwicom/margarita-navigation';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

type Props = {|
  +detailId: ?string,
  +navigation: Navigation,
|};

type State = {|
  +email: ?string,
  +phoneNumber: ?string,
  +phoneCountryCode: ?string,
|};

class ResultDetail extends React.Component<Props, State> {
  state = {
    email: null,
    phoneNumber: null,
    phoneCountryCode: null,
  };

  handlePassengerEditPress = id => {
    if (id) {
      this.props.navigation.navigate(Routes.PASSENGER_FORM, {
        id,
      });
    }
  };

  handleChangeEmail = email => {
    this.setState({ email });
  };

  handleChangePhoneNumber = phoneNumber => {
    this.setState({ phoneNumber });
  };

  handleChangePhoneCountryCode = phoneCountryCode => {
    this.setState({ phoneCountryCode });
  };

  render() {
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
      },
    ];

    const phoneCountryCodeData = [
      {
        label: '+420',
        value: '+420',
      },
      {
        label: '+421',
        value: '+421',
      },
    ];

    return (
      <View style={styles.container}>
        <ScrollView>
          <PassengerCards
            passengerCards={passengerCards}
            onActionPress={this.handlePassengerEditPress}
            actionIconName="edit"
          />
          <Card>
            <HeaderWithIcon label="Contact details" iconName="contact-email" />
            <View style={styles.line}>
              <TextInput
                onChangeText={this.handleChangeEmail}
                label="E-mail"
                type="email"
                autoCorrect={false}
              />
            </View>
            <View style={[styles.line, styles.row]}>
              <View style={styles.countryCode}>
                <Picker
                  selectedValue={this.state.phoneCountryCode}
                  optionsData={phoneCountryCodeData}
                  onValueChange={this.handleChangePhoneCountryCode}
                  placeholder="Select"
                  confirmLabel="OK"
                  label="Country code"
                  iconName="show-more"
                />
              </View>

              <View style={styles.phoneNumber}>
                <TextInput
                  onChangeText={this.handleChangeEmail}
                  label="Phone number"
                  autoCorrect={false}
                  type="number"
                />
              </View>
            </View>
          </Card>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: defaultTokens.backgroundBody,
  },
  line: {
    marginTop: parseFloat(defaultTokens.spaceMedium),
  },
  row: {
    flexDirection: 'row',
  },
  countryCode: {
    minWidth: 112,
  },
  phoneNumber: {
    flex: 1,
    marginLeft: parseFloat(defaultTokens.spaceSmall),
  },
});

export default withNavigation(ResultDetail);
