// @flow

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet, Text, Icon } from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { graphql, createFragmentContainer } from '@kiwicom/margarita-relay';

import type { VisaDetail as VisaDetailType } from './__generated__/VisaDetail.graphql';

type Props = {|
  +data: ?VisaDetailType,
|};

type VisaRequiredType = {
  +visaRequired: ?boolean,
};

const isVisaRequired = (
  passengers: $ReadOnlyArray<?VisaRequiredType>,
): boolean => passengers.some(passenger => passenger?.visaRequired);

const VisaDetail = (props: Props) => {
  const passengers = props.data?.passengers;
  const visaRequired = passengers && isVisaRequired(passengers);
  const color = visaRequired
    ? defaultTokens.colorIconCritical
    : defaultTokens.colorIconSuccess;
  const textType = visaRequired ? 'critical' : 'success';
  const text = visaRequired ? 'Visa is required' : 'Visa is not required';

  return (
    <View
      style={[
        styles.wrapperVisa,
        visaRequired ? styles.critical : styles.success,
      ]}
    >
      <Icon name="information-circle" color={color} />
      <Text type={textType} size="small" style={styles.paddingTextLeft}>
        {text}
      </Text>
    </View>
  );
};

export default createFragmentContainer(
  VisaDetail,
  graphql`
    fragment VisaDetail on BookingInterface {
      passengers {
        visaRequired
      }
    }
  `,
);

const styles = StyleSheet.create({
  wrapperVisa: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: parseInt(defaultTokens.spaceSmall, 10),
    paddingVertical: parseInt(defaultTokens.spaceXXSmall, 10),
  },
  paddingTextLeft: {
    paddingLeft: parseInt(defaultTokens.spaceXXSmall, 10),
  },
  success: {
    backgroundColor: defaultTokens.backgroundBadgeSuccess,
  },
  critical: {
    backgroundColor: defaultTokens.backgroundBadgeCritical,
  },
});
