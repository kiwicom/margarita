// @flow

import * as React from 'react';
import {
  StyleSheet,
  Icon,
  type IconNameType,
} from '@kiwicom/universal-components';
import { Separator } from '@kiwicom/margarita-components';
import { View } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

type Props = {|
  +children: React.Node,
  +iconName: IconNameType,
|};

const InformationSection = (props: Props) => {
  return (
    <View style={styles.informationCardOuter}>
      <Icon
        size="large"
        name={props.iconName}
        color={defaultTokens.paletteInkLight}
      />
      <View style={styles.informationCardInner}>
        {props.children}
        <Separator style={styles.marginVerticalMedium} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  informationCardOuter: {
    flexDirection: 'row',
  },
  informationCardInner: {
    flex: 1,
    marginStart: parseInt(defaultTokens.spaceMedium, 10),
  },
  marginVerticalMedium: {
    marginVertical: parseInt(defaultTokens.spaceMedium, 10),
  },
});

export default InformationSection;
