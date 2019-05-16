// @flow

import * as React from 'react';
import { View, Platform } from 'react-native';
import {
  StyleSheet,
  Modal as UCModal,
  type StylePropType,
} from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { Device } from '@kiwicom/margarita-device';

export type Props = {|
  +children: React.Node,
  +isVisible: boolean,
  +wrapperStyle?: StylePropType,
  +modalStyle?: StylePropType,
  +onClose?: () => void,
|};

export default function Modal({
  children,
  isVisible,
  wrapperStyle,
  modalStyle,
  onClose,
}: Props) {
  const centerContent = Platform.OS === 'web' || Device.isTablet();
  return (
    <UCModal
      isVisible={isVisible}
      onRequestClose={onClose}
      onBackdropPress={onClose}
      style={[styles.modal, centerContent && styles.modalCentered, modalStyle]}
    >
      <View
        style={[
          styles.content,
          centerContent && styles.contentCentered,
          wrapperStyle,
        ]}
      >
        {children}
      </View>
    </UCModal>
  );
}

const styles = StyleSheet.create({
  modal: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  modalCentered: {
    justifyContent: 'center',
  },
  content: {
    width: '100%',
    backgroundColor: defaultTokens.backgroundModal,
    borderTopStartRadius: parseInt(defaultTokens.borderRadiusLarge, 10),
    borderTopEndRadius: parseInt(defaultTokens.borderRadiusLarge, 10),
    paddingTop: parseInt(defaultTokens.spaceXXSmall, 10),
    paddingBottom: parseInt(defaultTokens.spaceXXLarge, 10),
  },
  contentCentered: {
    maxWidth: 420,
    borderRadius: parseInt(defaultTokens.borderRadiusLarge, 10),
    paddingTop: 0,
    paddingBottom: 0,
  },
});
