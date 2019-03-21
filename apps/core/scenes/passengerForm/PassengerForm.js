// @flow

import * as React from 'react';
import { View, ScrollView } from 'react-native';
import {
  StyleSheet,
  SegmentedButton,
  Picker,
  TextInput,
} from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { margaritaTokens } from '@kiwicom/margarita-design-tokens';
import { DateInput } from '@kiwicom/margarita-components';

import BaggageBundles from './BaggageBundles';

type Props = {||};

type State = {|
  gender: ?string,
  givenName: ?string,
  lastName: ?string,
  nationality: ?string,
  birthDate: ?Date,
|};

const genderData = [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' },
];

const nationalityData = [
  {
    label: 'Czechia',
    value: 'CZ',
  },
  {
    label: 'Croatia',
    value: 'HR',
  },
];

export default class PassengerForm extends React.Component<Props, State> {
  state = {
    gender: null,
    givenName: null,
    lastName: null,
    nationality: null,
    birthDate: null,
  };

  handleGenderChange = (gender: ?string) => {
    this.setState({ gender });
  };

  handleGivenNameChange = (givenName: string) => {
    this.setState({ givenName });
  };

  handleLastNameChange = (lastName: string) => {
    this.setState({ lastName });
  };

  handleBirthDateChange = (birthDate: ?Date) => {
    this.setState({ birthDate });
  };

  handleNationalityChange = (nationality: ?string) => {
    this.setState({ nationality });
  };

  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.containerContent}
      >
        <View style={styles.form}>
          <SegmentedButton
            segmentsData={genderData}
            selectedValue={this.state.gender}
            onValueChange={this.handleGenderChange}
          />
          <TextInput
            onChangeText={this.handleGivenNameChange}
            label="Given names"
            autoCorrect={false}
            type="text"
            formLabelContainerStyle={styles.inputLabel}
          />
          <TextInput
            onChangeText={this.handleLastNameChange}
            label="Last name"
            autoCorrect={false}
            type="text"
            formLabelContainerStyle={styles.inputLabel}
          />
          <DateInput
            date={this.state.birthDate}
            defaultDate={new Date('1990-01-01')}
            dateFormat={'MM/DD/YYYY'}
            onDateChange={this.handleBirthDateChange}
            placeholder="Select"
            label="Date of birth"
            formLabelContainerStyle={styles.inputLabel}
            confirmLabel="OK"
            cancelLabel="CANCEL"
          />
          <Picker
            selectedValue={this.state.nationality}
            optionsData={nationalityData}
            onValueChange={this.handleNationalityChange}
            placeholder="Select"
            confirmLabel="OK"
            label="Nationality"
            formLabelContainerStyle={styles.inputLabel}
          />
          <BaggageBundles />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: defaultTokens.backgroundBody,
  },
  containerContent: {
    flex: 1,
    alignItems: 'center',
  },
  form: {
    padding: parseInt(defaultTokens.spaceMedium, 10),
    backgroundColor: defaultTokens.paletteWhite,
    width: '100%',
    web: {
      maxWidth: margaritaTokens.widthScreenNormal,
    },
  },
  inputLabel: {
    marginTop: parseInt(defaultTokens.spaceSmall, 10),
  },
});
