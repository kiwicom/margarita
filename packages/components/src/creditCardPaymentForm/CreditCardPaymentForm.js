// @flow

import * as React from 'react';
import { View, Switch } from 'react-native';
import {
  StyleSheet,
  Card,
  TextInput,
  Touchable,
  Icon,
} from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import Text from '../text/Text';
import HeaderWithIcon from '../headerWithIcon/HeaderWithIcon';

type Props = {|
  +cardholdersName: ?string,
  +creditCardNumber: ?string,
  +isCreditCardSaved: boolean,
  +monthOfExpiry: ?string,
  +onChangeCardholdersName: string => void,
  +onChangeCreditCardNumber: string => void,
  +onChangeCreditCardSaveSwitch: () => void,
  +onChangeMonthOfExpiry: string => void,
  +onChangeSecurityCode: string => void,
  +onChangeYearOfExpiry: string => void,
  +onSecurityCodeHelpPress: () => void,
  +securityCode: ?string,
  +yearOfExpiry: ?string,
|};

export default function CreditCardPaymentForm({
  cardholdersName,
  creditCardNumber,
  isCreditCardSaved,
  monthOfExpiry,
  onChangeCardholdersName,
  onChangeCreditCardNumber,
  onChangeCreditCardSaveSwitch,
  onChangeMonthOfExpiry,
  onChangeSecurityCode,
  onChangeYearOfExpiry,
  securityCode,
  yearOfExpiry,
  onSecurityCodeHelpPress,
}: Props) {
  return (
    <Card style={styles.card}>
      <View style={styles.form}>
        <HeaderWithIcon label="Payment" iconName="credit-card" />

        <View style={[styles.line, styles.creditCardNumber]}>
          <TextInput
            autoCorrect={false}
            label="Credit card number"
            maxLength={16}
            onChangeText={onChangeCreditCardNumber}
            type="number"
            value={creditCardNumber}
          />
        </View>
        <View style={[styles.line, styles.row]}>
          <View style={styles.expiryDate}>
            <TextInput
              autoCorrect={false}
              label="Expiry date"
              maxLength={2}
              onChangeText={onChangeMonthOfExpiry}
              placeholder="MM"
              type="number"
              value={monthOfExpiry}
            />
          </View>
          <View style={styles.expiryDate}>
            <TextInput
              autoCorrect={false}
              label=" "
              maxLength={2}
              onChangeText={onChangeYearOfExpiry}
              placeholder="YY"
              type="number"
              value={yearOfExpiry}
            />
          </View>
          <View style={styles.securityCode}>
            <TextInput
              autoCorrect={false}
              label="Security code"
              maxLength={3}
              onChangeText={onChangeSecurityCode}
              type="number"
              value={securityCode}
              suffix={
                <Touchable onPress={onSecurityCodeHelpPress}>
                  <Icon
                    name="question-circle"
                    color={defaultTokens.colorTextButtonLinkPrimary}
                  />
                </Touchable>
              }
            />
          </View>
        </View>
        <View style={[styles.line, styles.cardholdersName]}>
          <TextInput
            onChangeText={onChangeCardholdersName}
            label="Cardholder's name"
            autoCorrect={false}
            value={cardholdersName}
          />
        </View>
        <View style={[styles.line, styles.row, styles.creditCardSaveSwitch]}>
          <Text>Save card for next time </Text>
          <Switch
            onValueChange={onChangeCreditCardSaveSwitch}
            value={isCreditCardSaved}
          />
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  form: {
    width: '100%',
  },
  line: {
    marginTop: parseFloat(defaultTokens.spaceMedium),
  },
  row: {
    flexDirection: 'row',
  },
  expiryDate: {
    marginEnd: parseFloat(defaultTokens.spaceMedium),
    minWidth: 64,
    flex: 1,
    web: {
      minWidth: 100,
    },
  },

  securityCode: {
    flex: 5,
  },

  creditCardSaveSwitch: {
    justifyContent: 'space-between',
    marginStart: parseFloat(defaultTokens.spaceSmall),
  },
});
