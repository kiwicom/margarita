// @flow

import * as React from 'react';
import { Portal } from 'react-native-paper';

import { Modal as UCModal } from '../../Modal';
import type { Props } from '../../Modal/ModalTypes';
import { designTokens } from '../../DesignTokens';
import { StyleSheet } from '../../PlatformStyleSheet';

export default function Modal(props: Props) {
  return (
    <Portal>
      <UCModal style={styles.statusBar} {...props} />
    </Portal>
  );
}

const styles = StyleSheet.create({
  statusBar: {
    marginTop: designTokens.heightStatusBar,
  },
});
