// @flow

import * as React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import { StyleSheet } from '../PlatformStyleSheet';
import { Text } from '../Text';
import { Button } from '../Button';

import { Modal } from '.';

type Props = {|
  +isVisible?: boolean,
|};

type State = {
  modalVisible: boolean,
};

class SampleModal extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      modalVisible: props.isVisible ?? false,
    };
  }

  openModal = () => {
    this.setState({ modalVisible: true });
  };

  closeModal = () => {
    this.setState({ modalVisible: false });
  };

  render() {
    const { modalVisible } = this.state;

    return (
      <>
        <Button onPress={this.openModal} label="Open Modal" />
        <Modal
          isVisible={modalVisible}
          onRequestClose={this.closeModal}
          onBackdropPress={this.closeModal}
        >
          <View style={styles.sampleContainer}>
            <Text style={styles.sampleTitle}>Sample content</Text>
            <Button onPress={this.closeModal} label="Close" />
          </View>
        </Modal>
      </>
    );
  }
}

storiesOf('Modal', module)
  .add('Playground', () => <SampleModal />)
  .add('Default', () => <SampleModal isVisible />);

const styles = StyleSheet.create({
  sampleContainer: {
    padding: parseInt(defaultTokens.spaceMedium, 10),
    backgroundColor: defaultTokens.backgroundButtonSecondary,
  },
  sampleTitle: {
    marginBottom: parseInt(defaultTokens.spaceMedium, 10),
  },
});
