// @flow

import * as React from 'react';
import { View } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { StyleSheet } from '@kiwicom/universal-components';

import SortTab from './SortTab';

export type SortIconTypes = 'thumb-up' | 'money' | 'clock';
export type SortTypes = 'QUALITY' | 'PRICE' | 'DURATION';
type SortTabsDataType = $ReadOnlyArray<{|
  +label: string,
  +value: SortTypes,
  +icon: SortIconTypes,
|}>;

export type PriceDurationInfo = {|
  +price: ?string,
  +currency: ?string,
  +duration: ?string,
|};

export type Props = {|
  +selectedValue: ?SortTypes,
  +onValueChange: (?SortTypes) => void,
  +priceDurationParams?: {
    QUALITY: ?PriceDurationInfo,
    PRICE: ?PriceDurationInfo,
    DURATION: ?PriceDurationInfo,
  },
|};

export const SortTabsData: SortTabsDataType = [
  { label: 'Best', value: 'QUALITY', icon: 'thumb-up' },
  { label: 'Cheapest', value: 'PRICE', icon: 'money' },
  { label: 'Fastest', value: 'DURATION', icon: 'clock' },
];

const SortTabs = ({
  selectedValue,
  onValueChange,
  priceDurationParams,
}: Props) => {
  const SortTabsList = SortTabsData.map((SortTabData, index) => {
    const { value, label, icon } = SortTabData;
    return (
      <SortTab
        key={value}
        label={label}
        value={value}
        isFirst={index === 0}
        icon={icon}
        isLast={index === SortTabsData.length - 1}
        isActive={value === selectedValue}
        onPress={onValueChange}
        additionalInfo={priceDurationParams && priceDurationParams[value]}
      />
    );
  });
  return <View style={styles.container}>{SortTabsList}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: parseInt(defaultTokens.borderRadiusNormal, 10),
    backgroundColor: defaultTokens.backgroundButtonSecondary,
    paddingBottom: parseInt(defaultTokens.spaceXXXSmall, 10),
  },
});

export default SortTabs;
