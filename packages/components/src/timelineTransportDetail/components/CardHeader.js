// @flow

import * as React from 'react';
import { View } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { Icon, CarrierLogo, StyleSheet } from '@kiwicom/universal-components';
import { capitalize } from '@kiwicom/margarita-utils';

import Text from '../../text/Text';
import Duration from '../../duration/Duration';

type Props = {|
  +expanded: boolean,
  +carrier: {|
    code: ?string,
    name: ?string,
    type?: 'airline' | 'bus' | 'train',
  |},
  +duration: ?number,
|};

export default function CardHeader({ expanded, carrier, duration }: Props) {
  const iconName = expanded ? 'show-less' : 'show-more';

  const modeOfTransport =
    expanded || carrier.type == null ? null : (
      <Text type="secondary" size="small">
        {capitalize(carrier.type)}
      </Text>
    );

  return (
    <View style={[styles.container, styles.row]}>
      <View style={[styles.section, styles.row]}>
        <View style={styles.carrierLogo}>
          <CarrierLogo size="small" carriers={[carrier]} />
        </View>
        <View>
          <Text type="primary">{carrier.name}</Text>
          {modeOfTransport}
        </View>
      </View>
      <View style={[styles.section, styles.row]}>
        <View style={styles.duration}>
          <Duration showIcon={false} duration={duration} />
        </View>
        <Icon name={iconName} color={defaultTokens.paletteInkNormal} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  container: {
    minHeight: parseFloat(defaultTokens.heightButtonNormal),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  section: {
    alignItems: 'center',
  },
  carrierLogo: {
    padding: 8,
  },
  duration: {
    paddingEnd: 8,
  },
});
