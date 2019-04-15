// @flow

import * as React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import ReactDOM from 'react-dom';

import { StyleSheet } from '../PlatformStyleSheet';
import type { Props } from './ModalTypes';

export default class Modal extends React.Component<Props> {
  componentDidMount() {
    if (!this.modalElement) {
      this.modalElement = document.createElement('div');
    }
    if (document.body) {
      document.body.appendChild(this.modalElement);
      this.forceUpdate();
    }
  }

  componentWillUnmount() {
    if (this.modalElement && document.body) {
      document.body.removeChild(this.modalElement);
    }
  }

  modalElement: ?HTMLDivElement = null;

  render() {
    const {
      children,
      isVisible,
      style,
      backdropColor,
      backdropOpacity,
      onBackdropPress,
    } = this.props;
    if (!isVisible) {
      return null;
    }

    const dynamicStyle = StyleSheet.create({
      backdrop: {
        opacity: backdropOpacity ?? 0.5,
        backgroundColor: backdropColor ?? defaultTokens.paletteInkDark,
      },
    });

    if (this.modalElement) {
      return ReactDOM.createPortal(
        <View style={[styles.overlay, style]}>
          <TouchableWithoutFeedback onPress={onBackdropPress} testID="backdrop">
            <View style={[styles.backdrop, dynamicStyle.backdrop]} />
          </TouchableWithoutFeedback>
          {children}
        </View>,
        this.modalElement,
      );
    }
    return null;
  }
}

const styles = StyleSheet.create({
  overlay: {
    web: {
      position: 'fixed',
      overflowY: 'auto',
    },
    width: '100%',
    height: '100%',
    top: 0,
    start: 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: parseInt(defaultTokens.zIndexModal, 10),
  },
  backdrop: {
    height: '100%',
    width: '100%',
    web: {
      position: 'fixed',
    },
  },
});
