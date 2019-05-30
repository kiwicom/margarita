// @flow

import * as React from 'react';
import { View } from 'react-native';
import { format } from 'date-fns';
import { StyleSheet } from '@kiwicom/universal-components';
import { US_DATE_FORMAT } from '@kiwicom/margarita-config';

import PassengerCardDetailItem from './PassengerCardDetailItem';

type Props = {|
  +id: ?string,
  +nationality: ?string,
  +dateOfBirth: ?Date,
|};

const defaultValue = '-';

const PassengerCardDetail = ({ nationality, dateOfBirth, id }: Props) => {
  return (
    <View style={styles.container}>
      <PassengerCardDetailItem
        value={nationality ?? defaultValue}
        label="Nationality"
        style="normal"
      />
      <PassengerCardDetailItem
        value={dateOfBirth ? format(dateOfBirth, US_DATE_FORMAT) : defaultValue}
        label="Date of birth"
        style="normal"
      />
      <PassengerCardDetailItem
        value={id ?? defaultValue}
        label="ID"
        style="id_row_wrapper"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60,
  },
});

export default PassengerCardDetail;
