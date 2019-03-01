// @flow

import * as React from 'react';
import { Platform } from 'react-native';

import { Text } from '../Text';
import { StyleSheet, type StyleObjectType } from '../PlatformStyleSheet';
import Separator from './Separator';

type Props = {|
  +title?: React.Node,
  +style?: StyleObjectType,
|};

export default function MenuGroupTitle({ title, style }: Props) {
  if (title == null) {
    return null;
  }

  const size: 'small' | 'normal' | 'large' = Platform.select({
    ios: 'small',
    android: 'normal',
  });
  return (
    <>
      <Text type="secondary" size={size} style={[styles.title, style]}>
        {title}
      </Text>
      {Platform.OS !== 'ios' && <Separator style={styles.separator} />}
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    ios: {
      marginStart: 16,
      marginBottom: 8,
      textTransform: 'uppercase',
      lineHeight: 17,
    },
    lineHeight: 19,
    marginStart: 13,
    marginTop: 8,
    marginBottom: 5,
  },
  separator: {
    marginHorizontal: -10,
  },
});
