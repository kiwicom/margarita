// @flow

import * as React from 'react';
import { render, fireEvent } from 'react-native-testing-library';

import { Text } from '../..';
import ModalNative from '../Modal.native';
import ModalWeb from '../Modal.web';

const placeholder = 'Modal test content';

describe('Modal - web', () => {
  const onBackdropPress = jest.fn();
  const { getByText, getByTestId } = render(
    <ModalWeb isVisible onBackdropPress={onBackdropPress}>
      <Text>{placeholder}</Text>
    </ModalWeb>,
  );

  it('should contain passed children', () => {
    expect(getByText(placeholder)).toBeDefined();
  });

  it('should execute onBackdropPress method', () => {
    fireEvent(getByTestId('backdrop'), 'press');
    expect(onBackdropPress).toHaveBeenCalled();
  });

  it('should match snapshot', () => {
    const component = render(
      <ModalWeb isVisible onBackdropPress={jest.fn()}>
        <Text>{placeholder}</Text>
      </ModalWeb>,
    );

    expect(component).toMatchSnapshot();
  });
});

describe('Modal - native', () => {
  it('should match snapshot', () => {
    const component = render(
      <ModalNative isVisible={false} onBackdropPress={jest.fn()}>
        <Text>{placeholder}</Text>
      </ModalNative>,
    );

    expect(component).toMatchSnapshot();
  });
});
