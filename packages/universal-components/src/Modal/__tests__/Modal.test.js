// @flow

import * as React from 'react';
import { render } from 'react-native-testing-library';

import { Text } from '../..';
import ModalNative from '../Modal.native';

const placeholder = 'Modal test content';

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
