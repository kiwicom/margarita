// @flow

import * as React from 'react';
import { View } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { StyleSheet } from '@kiwicom/universal-components';

import SortTab from './SortTab';

export type SortIconTypes = 'thumb-up' | 'money' | 'clock';
type SortTabsDataType = $ReadOnlyArray<{|
  +label: string,
  +value: string,
  +icon: SortIconTypes,
|}>;

export type Props = {|
  +selectedValue: ?string,
  +onValueChange: (?string) => void,
|};

const SortTabsData: SortTabsDataType = [
  { label: 'Best', value: 'QUALITY', icon: 'thumb-up' },
  { label: 'Cheapest', value: 'PRICE', icon: 'money' },
  { label: 'Fastest', value: 'DURATION', icon: 'clock' },
];

const SortTabs = ({ selectedValue, onValueChange }: Props) => {
  const SortTabs = SortTabsData.map((SortTabData, index) => {
    const { value, label, icon } = SortTabData;
    return (
      <SortTab
        key={value}
        label={label}
        value={value}
        first={index === 0}
        icon={icon}
        last={index === SortTabsData.length - 1}
        active={value === selectedValue}
        onPress={onValueChange}
      />
    );
  });
  return <View style={styles.container}>{SortTabs}</View>;
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
