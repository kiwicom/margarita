// @flow

import * as React from 'react';
import { Modal } from '@kiwicom/margarita-components';
import { StyleSheet } from '@kiwicom/universal-components';

import type { Props } from './ItineraryDetailWrapperTypes';

export default function ItineraryDetailWrapper({ children, onClose }: Props) {
  return (
    <Modal isVisible wrapperStyle={styles.wrapperStyle} onClose={onClose}>
      {children}
    </Modal>
  );
}

const styles = StyleSheet.create({
  wrapperStyle: {
    height: '90%',
  },
});
