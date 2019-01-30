// @flow

import * as React from 'react';
import { Platform } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import { Card } from '../Card';
import { StyleSheet, type StyleObjectType } from '../PlatformStyleSheet';
import MenuGroupTitle from './MenuGroupTitle';
import MenuItem from './MenuItem';

type Props = {|
  +children:
    | React.Element<typeof MenuItem>
    | React.ChildrenArray<React.Element<typeof MenuItem>>,
  +title?: React.Node,
  +titleStyle?: StyleObjectType,
  +footer?: React.Node,
|};

export default function MenuGroup({
  title,
  titleStyle,
  children,
  footer,
}: Props) {
  const menuGroupTitle = <MenuGroupTitle title={title} style={titleStyle} />;

  return (
    <>
      {Platform.OS === 'ios' && menuGroupTitle}
      <Card style={styles.card}>
        {Platform.OS === 'android' && menuGroupTitle}
        {children}
        {footer}
      </Card>
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 0,
    ios: {
      borderTopWidth: 0.5,
      borderBottomWidth: 0.5,
      borderColor: defaultTokens.paletteInkLighter,
    },
  },
});
