// @flow

import * as React from 'react';
import { View } from 'react-native';
import {
  StyleSheet,
  Card,
  TextInput,
  Picker,
} from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import HeaderWithIcon from '../headerWithIcon/HeaderWithIcon';

type Props = {|
  onChangeEmail: string => void,
  onChangePhoneNumber: string => void,
  onChangeCountryCode: (?string) => void,
|};

export default function ContactDetailsForm({
  onChangeEmail,
  onChangePhoneNumber,
  onChangeCountryCode,
}: Props) {
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
    <Card>
      <HeaderWithIcon label="Contact details" iconName="contact-email" />
      <View style={styles.line}>
        <TextInput
          onChangeText={onChangeEmail}
          label="E-mail"
          type="email"
          autoCorrect={false}
        />
      </View>
      <View style={[styles.line, styles.row]}>
        <View style={styles.countryCode}>
          <Picker
            selectedValue={null}
            optionsData={phoneCountryCodeData}
            onValueChange={onChangeCountryCode}
            placeholder="Select"
            confirmLabel="OK"
            label="Country code"
            iconName="show-more"
          />
        </View>

        <View style={styles.phoneNumber}>
          <TextInput
            onChangeText={onChangePhoneNumber}
            label="Phone number"
            autoCorrect={false}
            type="number"
          />
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
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
    marginStart: parseFloat(defaultTokens.spaceSmall),
  },
});
