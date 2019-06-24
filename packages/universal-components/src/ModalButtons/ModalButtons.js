// @flow

import * as React from 'react';
import { View } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import { Button } from '../Button';
import { StyleSheet } from '../PlatformStyleSheet';

type Props = {|
  +onConfirmPress: () => any,
  +onCancelPress: () => void,
  +labelConfirm: string,
  +labelCancel: string,
|};

export default function ModalButtons({
  labelConfirm,
  labelCancel,
  onConfirmPress,
  onCancelPress,
}: Props) {
  return (
    <View style={styles.row}>
      <View style={styles.buttonWrapper}>
        <Button label={labelCancel} onPress={onCancelPress} type="secondary" />
      </View>
      <View style={styles.buttonWrapper}>
        <Button
          label={labelConfirm}
          onPress={onConfirmPress}
          style={styles.confirmButton}
        />
      </View>
    </View>
  );
}

ModalButtons.defaultProps = {
  labelConfirm: 'OK',
  labelCancel: 'Cancel',
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  buttonWrapper: {
    flex: 1,
    ios: {
      // @TODO bottom margin needs to be currently set for iOS because of the persisting bug related to `SafeAreaView` and `Modal` on iPhone X https://github.com/facebook/react-native/issues/18177
      marginBottom: parseFloat(defaultTokens.spaceMedium),
    },
  },
  confirmButton: {
    marginStart: parseFloat(defaultTokens.spaceXSmall),
  },
});
