// @flow

import * as React from 'react';
import { Text } from '@kiwicom/universal-components';
import { shallow } from 'react-native-testing-library';

import Modal from '../Modal';

it('renders', () => {
  expect(
    shallow(
      <Modal visible={true} onClose={jest.fn()}>
        <Text>Modal test content</Text>
      </Modal>,
    ),
  ).toMatchSnapshot();
});
