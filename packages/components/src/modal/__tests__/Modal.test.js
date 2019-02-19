// @flow

import * as React from 'react';
import { shallow } from 'react-native-testing-library';

import Text from '../../text/Text';
import Modal from '../Modal';

it('renders', () => {
  expect(
    shallow(
      <Modal isVisible={true} onClose={jest.fn()}>
        <Text>Modal test content</Text>
      </Modal>,
    ),
  ).toMatchSnapshot();
});
