// @flow

import * as React from 'react';
import { Platform } from 'react-native';

import { Text } from '../Text';
import { StyleSheet, type StylePropType } from '../PlatformStyleSheet';
import Separator from './Separator';

type Props = {|
  +title?: React.Node,
  +style?: StylePropType,
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
      {Platform.OS !== 'ios' && <Separator style={styles.separator} />}
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    ios: {
      marginStart: 16,
      marginBottom: 8,
      lineHeight: 17,
    },
    lineHeight: 19,
    marginStart: 13,
    marginTop: 8,
    marginBottom: 5,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  separator: {
    marginHorizontal: -10,
  },
});
