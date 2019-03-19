// @flow

import * as React from 'react';
import {
  PassengerCards,
  ContactDetailsForm,
  TableRow,
  TableRowDivider,
  ContentContainer,
} from '@kiwicom/margarita-components';
import {
  withNavigation,
  Routes,
  type Navigation,
} from '@kiwicom/margarita-navigation';

import { PriceSummary } from '../../components/priceSummary';

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

  handleAddPromoCode = () => {
    // @TODO
  };

  handleContinue = () => {
    this.props.navigation.navigate(Routes.PAYMENT);
  };

  handleAddPassenger = () => {
    // @TODO
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

    return (
      <>
        <ContentContainer>
          <PassengerCards
            passengerCards={passengerCards}
            onActionPress={this.handlePassengerEditPress}
            actionIconName="edit"
            onAddPassengerPress={this.handleAddPassenger}
          />
          <ContactDetailsForm
            onChangeEmail={this.handleChangeEmail}
            onChangePhoneNumber={this.handleChangePhoneNumber}
            onChangeCountryCode={this.handleChangePhoneCountryCode}
          />
        </ContentContainer>
        <PriceSummary
          onButtonPress={this.handleContinue}
          renderCollapseContent={
            <>
              <TableRow label="1x Passenger" value="123 Kč" />
              <TableRow label="1x Cabin bag" value="123 Kč" />
              <TableRow label="1x Personal item" value="123 Kč" />
              <TableRowDivider />
              <TableRow label="Price" value="123 Kč" />
              <TableRow label="Service fee" value="123 Kč" />
              <TableRow label="Other fees" value="123 Kč" />
              <TableRow
                label="Add a promo code"
                onPress={this.handleAddPromoCode}
                highlightedLabel
              />
              <TableRowDivider />
            </>
          }
          renderVisibleContent={
            <TableRow
              label="Subtotal"
              value="123 Kč"
              highlightedLabel
              highlightedValue
            />
          }
        />
      </>
    );
  }
}

export default withNavigation(ResultDetail);
