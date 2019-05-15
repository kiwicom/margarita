// @flow

import * as React from 'react';
import { View } from 'react-native';
import { Button, StyleSheet } from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import Modal from '../modal/Modal';
import Text from '../text/Text';
import {
  withAlertContext,
  type AlertContextState,
  type AlertContent,
} from './AlertContext';

type Props = {|
  +alertContent: AlertContent | null,
  +setAlertContent: (message: AlertContent | null) => void,
|};

class Alert extends React.Component<Props> {
  onClose = () => {
    this.props.setAlertContent(null);
  };

  render() {
    const isVisible = this.props.alertContent != null;

    return (
      <Modal
        modalStyle={styles.modal}
        isVisible={isVisible}
        onClose={this.onClose}
      >
        <View style={styles.container}>
          <Text style={styles.title} weight="bold" size="large" align="center">
            {this.props.alertContent?.title}
          </Text>
          <Text style={styles.message}>{this.props.alertContent?.message}</Text>
          <View style={styles.buttonContainer}>
            <Button label="OK" onPress={this.onClose} width={60} />
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
  modal: {
    zIndex: parseInt(defaultTokens.zIndexOnTheTop, 10),
  },
  title: {
    marginVertical: 8,
  },
  message: {
    marginTop: 8,
    marginBottom: 16,
  },
  buttonContainer: {
    alignSelf: 'flex-end',
  },
});

const select = ({
  alertContent,
  actions: { setAlertContent },
}: AlertContextState) => ({
  alertContent,
  setAlertContent,
});

export default withAlertContext(select)(Alert);
