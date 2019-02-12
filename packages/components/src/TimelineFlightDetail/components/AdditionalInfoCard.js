// @flow

import * as React from 'react';
import { View } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import {
  Icon,
  StyleSheet,
  type IconNameType,
} from '@kiwicom/universal-components';

import Text from '../../text/Text';

type Info = {|
  +icon: IconNameType,
  +label: string,
  +value: string,
|};

export type Props = {|
  +title: string,
  +information: Array<Info>,
|};

export default function AdditionalInfoCard({ title, information }: Props) {
  return (
    <View style={styles.container}>
      <Text type="secondary" size="small">
        {title}
      </Text>
      {information.map(({ icon, label, value }: Info) => (
        <View style={[styles.infoRow, styles.row]} key={label}>
          <View style={[styles.section, styles.row]}>
            <Icon name={icon} size="small" style={styles.infoRowIcon} />
            <Text type="primary" size="small">
              {label}
            </Text>
          </View>
          <View style={styles.section}>
            <Text type="secondary" size="small">
              {value}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: defaultTokens.paletteCloudLight,
  },
  row: {
    flexDirection: 'row',
  },
  section: {
    alignItems: 'center',
  },
  infoRow: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 7,
  },
  infoRowIcon: {
    marginEnd: 10,
  },
});
