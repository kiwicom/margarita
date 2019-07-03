// @flow

import * as React from 'react';
import { View, ScrollView, Platform } from 'react-native';
import { generateId } from '@kiwicom/margarita-utils';
import {
  StyleSheet,
  SegmentedButton,
  Picker,
  TextInput,
  Button,
  Modal,
} from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import {
  withAlertContext,
  type AlertContent,
  type AlertContextState,
  DateInput,
} from '@kiwicom/margarita-components';
import { createFragmentContainer, graphql } from '@kiwicom/margarita-relay';

import { type PassengerType } from '../../contexts/searchContext/SearchContextTypes';
import BaggageBundles from './baggageBundles/BaggageBundles';
import type { PassengerForm_itinerary as PassengerFormType } from './__generated__/PassengerForm_itinerary.graphql';
import { type BaggageBundleType } from './baggageBundles/__generated__/BaggageBundle_bagOption.graphql';

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
  id: null,
  gender: 'male',
  name: null,
  lastName: null,
  passportId: null,
  nationality: null,
  dateOfBirth: null,
  bags: null,
  passengerCount: 1,
};

type State = {
  +id: ?string,
  +name: ?string,
  +lastName: ?string,
  +gender: 'female' | 'male' | 'other',
  +nationality: ?string,
  +passportId: ?string,
  +insurance?: ?string,
  +bags: null | Array<BaggageBundleType>,
  +visaRequired?: ?boolean,
  +dateOfBirth: ?Date,
  hasPrefilledState: boolean,
};

class PassengerForm extends React.Component<Props, State> {
  state = {
    ...initialFormState,
    hasPrefilledState: false,
  };

  static getDerivedStateFromProps(props: Props, state: State) {
    const { prefillData, isVisible, isEditing } = props;
    const { hasPrefilledState } = state;
    // reset form into initial state when closing
    if (!isVisible) {
      return { ...initialFormState, hasPrefilledState: false };
    }
    const editModeOpened = isEditing && !hasPrefilledState;
    // If is in edit mode preload passenger data into the form state
    if (editModeOpened) {
      if (prefillData) {
        const dateOfBirth =
          Platform.OS === 'ios' && !prefillData.dateOfBirth
            ? new Date()
            : prefillData.dateOfBirth;
        return {
          ...prefillData,
          dateOfBirth,
          hasPrefilledState: true,
        };
      }
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

  handleNationalityChange = (nationality: ?string) => {
    this.setState({ nationality });
  };

  handlePassportIdChange = (passportId: ?string) => {
    this.setState({ passportId });
  };

  handleBirthDateSubmit = (dateOfBirth: Date) => {
    this.setState({ dateOfBirth });
  };

  handleSave = () => {
    const {
      nationality,
      passportId,
      lastName,
      name,
      gender,
      bags,
      id,
      dateOfBirth,
    } = this.state;
    const newPassenger = {
      nationality,
      passportId,
      dateOfBirth,
      gender,
      name,
      lastName,
      bags,
      id: id || generateId(),
      type: 'adult', // @TODO get type base on dateOfBirth
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
              label="First name"
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
              onChangeText={this.handlePassportIdChange}
              label="Passport or ID number"
              autoCorrect={false}
              type="text"
              value={this.state.passportId}
              formLabelContainerStyle={styles.inputLabel}
            />
            <DateInput
              onDateChange={this.handleBirthDateSubmit}
              date={this.state.dateOfBirth}
              isEditModeEnabled={this.props.isEditing}
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
            <Button block={true} label="Save" onPress={this.handleSave} />
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
    borderTopWidth: parseInt(defaultTokens.borderWidthCard, 10),
    borderColor: defaultTokens.borderColorTableCell,
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
