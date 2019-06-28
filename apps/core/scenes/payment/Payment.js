// @flow

import * as React from 'react';
import {
  TableRow,
  TableRowDivider,
  CreditCardPaymentForm,
  ContentContainer,
  Notification,
} from '@kiwicom/margarita-components';
import {
  withNavigation,
  type Navigation,
  Routes,
} from '@kiwicom/margarita-navigation';

import { PriceSummary } from '../../components/priceSummary';

type Props = {|
  +navigation: Navigation,
|};

type State = {|
  +cardholdersName: ?string,
  +creditCardNumber: ?string,
  +email: ?string,
  +isCreditCardSaved: boolean,
  +isSecurityCodeHelpShowed: boolean,
  +monthOfExpiry: ?string,
  +phoneCountryCode: ?string,
  +phoneNumber: ?string,
  +securityCode: ?string,
  +yearOfExpiry: ?string,
|};

class Payment extends React.Component<Props, State> {
  state = {
    cardholdersName: null,
    creditCardNumber: null,
    email: null,
    isCreditCardSaved: false,
    isSecurityCodeHelpShowed: false,
    monthOfExpiry: null,
    phoneCountryCode: null,
    phoneNumber: null,
    securityCode: null,
    yearOfExpiry: null,
  };

  handleReview = () => {
    this.props.navigation.navigate(Routes.BOOKING_COMPLETED);
  };

  handleCreditCardNumberChange = creditCardNumber => {
    this.setState({ creditCardNumber });
  };

  handleMonthOfExpiryChange = monthOfExpiry => {
    this.setState({ monthOfExpiry });
  };

  handleYearOfExpiryChange = yearOfExpiry => {
    this.setState({ yearOfExpiry });
  };

  handleSecurityCodeChange = securityCode => {
    this.setState({ securityCode });
  };

  handleCardholdersNameChange = cardholdersName => {
    this.setState({ cardholdersName });
  };

  handleChangeCreditCardSave = () => {
    this.setState(state => ({ isCreditCardSaved: !state.isCreditCardSaved }));
  };

  handleSecurityCodeHelpPress = () => {
    this.setState(state => ({
      isSecurityCodeHelpShowed: !state.isSecurityCodeHelpShowed,
    }));
  };

  render() {
    const {
      cardholdersName,
      isCreditCardSaved,
      creditCardNumber,
      monthOfExpiry,
      yearOfExpiry,
      securityCode,
    } = this.state;
    return (
      <>
        <ContentContainer>
          <Notification message="Please don't provide real card information, this is just an experimental application!" />
          <CreditCardPaymentForm
            cardholdersName={cardholdersName}
            creditCardNumber={creditCardNumber}
            isCreditCardSaved={isCreditCardSaved}
            monthOfExpiry={monthOfExpiry}
            onChangeCardholdersName={this.handleCardholdersNameChange}
            onChangeCreditCardNumber={this.handleCreditCardNumberChange}
            onChangeCreditCardSaveSwitch={this.handleChangeCreditCardSave}
            onChangeMonthOfExpiry={this.handleMonthOfExpiryChange}
            onChangeSecurityCode={this.handleSecurityCodeChange}
            onChangeYearOfExpiry={this.handleYearOfExpiryChange}
            securityCode={securityCode}
            yearOfExpiry={yearOfExpiry}
            onSecurityCodeHelpPress={this.handleSecurityCodeHelpPress}
          />
        </ContentContainer>

        <PriceSummary
          buttonLabel="Review & Pay"
          onButtonPress={this.handleReview}
          renderCollapseContent={
            <>
              <TableRow label="1x Passenger" value="€100" />
              <TableRow label="1x Cabin bag" value="€100" />
              <TableRow label="1x Personal item" value="€100" />
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

export default withNavigation(Payment);
