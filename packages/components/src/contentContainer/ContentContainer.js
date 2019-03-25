// @flow

import * as React from 'react';
import { View, ScrollView } from 'react-native';
import {
  StyleSheet,
  designTokens,
  type StylePropType,
} from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

type Props = {|
  +children: React.Node | React.ChildrenArray<React.Node>,
  +style?: StylePropType,
  +isScroll?: boolean,
|};

const CenteredContent = ({ children }) => (
  <View style={styles.outerContainer}>
    <View style={styles.innerContainer}>{children}</View>
  </View>
);

export default function ContentContainer({ children, style, isScroll }: Props) {
  return isScroll ? (
    <ScrollView style={[styles.backgroundColor, style]}>
      <CenteredContent children={children} />
    </ScrollView>
  ) : (
    <View style={[styles.backgroundColor, style]}>
      <CenteredContent children={children} />
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundColor: {
    backgroundColor: defaultTokens.backgroundBody,
  },
  outerContainer: {
    backgroundColor: defaultTokens.backgroundBody,
    web: {
      alignItems: 'center',
      paddingVertical: parseFloat(defaultTokens.spaceMedium),
    },
    flex: 1,
  },
  innerContainer: {
    width: '100%',
    web: {
      maxWidth: designTokens.widthScreenNormal,
    },
  },
});
ContentContainer.defaultProps = {
  isScroll: true,
};
