// @flow

import * as React from 'react';
import { View, ScrollView } from 'react-native';
import { StyleSheet } from '@kiwicom/universal-components';
import {
  TableRow,
  TableRowDivider,
  CreditCardPaymentForm,
  ExtendedTouchable,
  Text,
} from '@kiwicom/margarita-components';
import { withNavigation, type Navigation } from '@kiwicom/margarita-navigation';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

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
    // @TODO
  };

  handleCreditCardNumberChange = creditCardNumber => {
    this.setState({ creditCardNumber });
  };

  handleMonthOfExpiryChange = monthOfExpiry => {
    this.setState({ monthOfExpiry });
  };

  handleYearOfExpiryChange = monthOfExpiry => {
    this.setState({ monthOfExpiry });
  };

  handleSecurityCodeChange = securityCode => {
    this.setState({ securityCode });
  };

  handleCardholdersNameChange = cardholdersName => {
    this.setState({ cardholdersName });
  };

  handleRedeemPromoCodePress = () => {
    // @TODO
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
      <View style={styles.container}>
        <ScrollView>
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
          <View style={styles.centeredContainer}>
            <ExtendedTouchable onPress={this.handleRedeemPromoCodePress}>
              <Text style={styles.redeemPromoCode} weight="bold">
                Redeem promo code
              </Text>
            </ExtendedTouchable>
          </View>
        </ScrollView>
        <PriceSummary
          buttonLabel="Review & Pay"
          onButtonPress={this.handleReview}
          renderCollapseContent={
            <>
              <TableRow label="1x Passenger" value="123 Kč" />
              <TableRow label="1x Cabin bag" value="123 Kč" />
              <TableRow label="1x Personal item" value="123 Kč" />
              <TableRowDivider />
              <TableRow label="Price" value="123 Kč" />
              <TableRow label="Service fee" value="123 Kč" />
              <TableRow label="Other fees" value="123 Kč" />
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: defaultTokens.backgroundBody,
  },
  centeredContainer: {
    web: {
      alignSelf: 'center',
      maxWidth: 720, // @TODO repeating value, should be added to design-tokens
      alignItems: 'flex-start',
    },
  },
  redeemPromoCode: {
    color: defaultTokens.colorTextButtonLinkPrimary,
    marginTop: parseFloat(defaultTokens.spaceMedium),
    marginHorizontal: parseFloat(defaultTokens.spaceLarge),
  },
});

export default withNavigation(Payment);
