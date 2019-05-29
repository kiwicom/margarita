// @flow

import * as React from 'react';
import { View, ScrollView } from 'react-native';
import {
  StyleSheet,
  SegmentedButton,
  Picker,
  TextInput,
  Button,
  Modal,
} from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { US_DATE_FORMAT } from '@kiwicom/margarita-config';
import {
  DateInput,
  withAlertContext,
  type AlertContent,
  type AlertContextState,
} from '@kiwicom/margarita-components';
import { createFragmentContainer, graphql } from '@kiwicom/margarita-relay';

import { type PassengerType } from '../../contexts/bookingContext/BookingContext';
import BaggageBundles from './baggageBundles/BaggageBundles';
import type { PassengerForm_itinerary as PassengerFormType } from './__generated__/PassengerForm_itinerary.graphql';

type Props = {|
  +itinerary: ?PassengerFormType,
  +isVisible: boolean,
  +isEditing: boolean,
  +onRequestClose: () => void,
  +prefillData: ?PassengerType,
  +onRequestSave: PassengerType => void,
  +setAlertContent: (alertContent: AlertContent | null) => void,
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

const initialFormState = {
  gender: 'male',
  name: null,
  lastName: null,
  id: null,
  nationality: null,
  dateOfBirth: null,
  bags: null,
  passengerCount: 1,
};

type State = {
  ...PassengerType,
  lastName: ?string,
  hasPrefilledState: boolean,
};

class PassengerForm extends React.Component<Props, State> {
  state = {
    ...initialFormState,
    hasPrefilledState: false,
  };

  static getDerivedStateFromProps(props: Props, state: State) {
    // reset form into initial state when closing
    if (!props.isVisible) {
      return { ...initialFormState, hasPrefilledState: false };
    }
    const editModeOpened = props.isEditing && !state.hasPrefilledState;
    // If is in edit mode preload passenger data into the form state
    if (editModeOpened) {
      return { ...props.prefillData, hasPrefilledState: true };
    }

    return state;
  }

  handleGenderChange = (gender: any) => {
    this.setState({ gender });
  };

  handleNameChange = (name: string) => {
    this.setState({ name });
  };

  handleLastNameChange = (lastName: string) => {
    this.setState({ lastName });
  };

  handleBirthDateChange = (dateOfBirth: ?Date) => {
    this.setState({ dateOfBirth });
  };

  handleNationalityChange = (nationality: ?string) => {
    this.setState({ nationality });
  };

  handleIdChange = (id: ?string) => {
    this.setState({ id });
  };

  handleSavePress = () => {
    const {
      nationality,
      id,
      dateOfBirth,
      lastName,
      name,
      gender,
      bags,
    } = this.state;
    const newPassenger = {
      nationality,
      id,
      dateOfBirth,
      gender,
      name,
      lastName,
      bags,
    };
    this.props.onRequestSave(newPassenger);
  };

  requestClose = () => {
    this.props.onRequestClose();
  };

  handleSelectedBaggageBundle = bags => {
    this.setState({ bags: [bags] });
  };

  render() {
    return (
      <Modal
        style={styles.modal}
        isVisible={this.props.isVisible}
        onRequestClose={this.requestClose}
      >
        <ScrollView style={styles.formContainer}>
          <View style={[styles.form, styles.widthLimit]}>
            <SegmentedButton
              segmentsData={genderData}
              selectedValue={this.state.gender}
              onValueChange={this.handleGenderChange}
            />
            <TextInput
              onChangeText={this.handleNameChange}
              label="Given names"
              autoCorrect={false}
              type="text"
              value={this.state.name}
              formLabelContainerStyle={styles.inputLabel}
            />
            <TextInput
              onChangeText={this.handleLastNameChange}
              label="Last name"
              autoCorrect={false}
              value={this.state.lastName}
              type="text"
              formLabelContainerStyle={styles.inputLabel}
            />
            <TextInput
              onChangeText={this.handleIdChange}
              label="Passport or ID number"
              autoCorrect={false}
              type="text"
              value={this.state.id}
              formLabelContainerStyle={styles.inputLabel}
            />
            <DateInput
              date={this.state.dateOfBirth}
              defaultDate={new Date('1990-01-01')}
              dateFormat={US_DATE_FORMAT}
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
            <BaggageBundles
              onSelectedBaggageBundle={this.handleSelectedBaggageBundle}
              itinerary={this.props.itinerary}
            />
          </View>
        </ScrollView>
        <View style={[styles.menuRow, styles.widthLimit]}>
          <View style={styles.menuButtonWrap}>
            <Button
              block={true}
              label="Close"
              type="secondary"
              onPress={this.requestClose}
            />
          </View>
          <View style={styles.spacer} />
          <View style={styles.menuButtonWrap}>
            <Button block={true} label="Save" onPress={this.handleSavePress} />
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modal: {
    margin: 0,
  },
  formContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: defaultTokens.paletteWhite,
    web: {
      backgroundColor: 'transparent',
    },
  },
  form: {
    alignSelf: 'center',
    backgroundColor: defaultTokens.paletteWhite,
    paddingHorizontal: parseInt(defaultTokens.spaceMedium, 10),
    paddingTop: 72,
    paddingBottom: 120,
    web: {
      paddingTop: parseInt(defaultTokens.spaceMedium, 10),
      paddingBottom: 88,
      borderTopStartRadius: parseInt(defaultTokens.borderRadiusBadge, 10),
      borderTopEndRadius: parseInt(defaultTokens.borderRadiusBadge, 10),
      marginTop: parseInt(defaultTokens.spaceXXLarge, 10),
    },
  },
  widthLimit: {
    width: '100%',
    web: {
      maxWidth: 414,
    },
  },
  menuRow: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    backgroundColor: defaultTokens.paletteWhite,
    borderColor: defaultTokens.borderColorTableCell,
    borderTopWidth: parseInt(defaultTokens.borderWidthCard, 10),
    borderStartWidth: parseInt(defaultTokens.borderWidthCard, 10),
    borderEndWidth: parseInt(defaultTokens.borderWidthCard, 10),
    borderTopStartRadius: parseInt(defaultTokens.borderRadiusBadge, 10),
    borderTopEndRadius: parseInt(defaultTokens.borderRadiusBadge, 10),
    paddingHorizontal: parseInt(defaultTokens.spaceMedium, 10),
    paddingTop: parseInt(defaultTokens.spaceSmall, 10),
    paddingBottom: parseInt(defaultTokens.spaceXXLarge, 10),
    web: {
      paddingBottom: parseInt(defaultTokens.spaceMedium, 10),
    },
  },
  menuButtonWrap: {
    flex: 1,
  },
  spacer: {
    width: parseInt(defaultTokens.spaceXSmall, 10),
  },
  inputLabel: {
    marginTop: parseInt(defaultTokens.spaceSmall, 10),
  },
});

const selectAlertContextState = ({
  actions: { setAlertContent },
}: AlertContextState) => ({
  setAlertContent,
});

export default createFragmentContainer(
  withAlertContext(selectAlertContextState)(PassengerForm),
  {
    itinerary: graphql`
      fragment PassengerForm_itinerary on ItineraryInterface {
        ...BaggageBundles_itinerary
      }
    `,
  },
);
