// @flow

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet, Text, Icon } from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

type Props = {|
  +visaRequired: ?boolean,
|};

export default function VisaInfo({ visaRequired }: Props) {
  const color = visaRequired
    ? defaultTokens.colorIconCritical
    : defaultTokens.colorIconSuccess;
  const textType = visaRequired ? 'critical' : 'success';
  const text = visaRequired ? 'Visa is required' : 'Visa is not required';
  const wrapperStyle = [
    styles.wrapperVisa,
    visaRequired ? styles.critical : styles.success,
  ];

  return (
    <View style={wrapperStyle}>
      <Icon name="information-circle" color={color} />
      <Text type={textType} size="small" style={styles.paddingTextLeft}>
        {text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapperVisa: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingStart: parseInt(defaultTokens.spaceSmall, 10),
    paddingVertical: parseInt(defaultTokens.spaceXXSmall, 10),
  },
  paddingTextLeft: {
    paddingStart: parseInt(defaultTokens.spaceXXSmall, 10),
  },
  success: {
    backgroundColor: defaultTokens.backgroundBadgeSuccess,
  },
  critical: {
    backgroundColor: defaultTokens.backgroundBadgeCritical,
  },
});
