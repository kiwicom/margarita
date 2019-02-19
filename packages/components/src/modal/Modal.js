// @flow

import * as React from 'react';
import { View, Platform } from 'react-native';
import {
  StyleSheet,
  Modal as UCModal,
  type StylePropType,
} from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { Device } from '@kiwicom/margarita-utils';

export type Props = {|
  +children: React.Node,
  +isVisible: boolean,
  +wrapperStyle?: StylePropType,
  +onClose?: () => void,
|};

export default function Modal({
  children,
  isVisible,
  wrapperStyle,
  onClose,
}: Props) {
  const centerContent = Platform.OS === 'web' || Device.isTablet();
  return (
    <UCModal
      isVisible={isVisible}
      onRequestClose={onClose}
      onBackdropPress={onClose}
      style={[styles.modal, centerContent && styles.modalCentered]}
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
    borderTopLeftRadius: parseInt(defaultTokens.borderRadiusLarge, 10),
    borderTopRightRadius: parseInt(defaultTokens.borderRadiusLarge, 10),
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
