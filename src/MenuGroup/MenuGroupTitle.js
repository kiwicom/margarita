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

  return (
    <>
      <Text
        type="secondary"
        size={Platform.select({ ios: 'small', android: 'normal' })}
        style={[styles.title, style]}
      >
        {title}
      </Text>
      {Platform.OS === 'android' && <Separator style={styles.separator} />}
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
    android: {
      lineHeight: 19,
      marginStart: 13,
      marginTop: 8,
      marginBottom: 5,
    },
  },
  separator: {
    marginHorizontal: -10,
  },
});
