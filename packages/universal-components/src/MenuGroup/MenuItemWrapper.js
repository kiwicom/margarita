// @flow

import * as React from 'react';
import { View } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import Separator from './Separator';
import { StyleSheet } from '../PlatformStyleSheet';

type Props = {|
  +children: React.Node,
  +iconRendered?: boolean,
|};

export default function MenuItemWrapper({ children, iconRendered }: Props) {
  return (
    <View>
      <View style={styles.wrapper}>{children}</View>
      <Separator style={iconRendered ? styles.iconSeparator : styles.noIcon} />
    </View>
  );
}

const wrapperPaddingStart = parseFloat(defaultTokens.spaceSmall);
const iconMargin = parseFloat(defaultTokens.spaceSmall);

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: defaultTokens.paletteWhite,
    ios: {
      paddingTop: 8.5,
      paddingBottom: 11.5,
    },
    paddingTop: 6,
    paddingBottom: 8.5,

    paddingStart: wrapperPaddingStart,
    paddingEnd: 16,
  },
  noIcon: {
    ios: {
      marginStart: 12,
    },
  },
  iconSeparator: {
    ios: {
      marginStart:
        wrapperPaddingStart +
        parseFloat(defaultTokens.widthIconMedium) +
        iconMargin,
    },
  },
});

MenuItemWrapper.defaultProps = {
  iconRendered: false,
};
