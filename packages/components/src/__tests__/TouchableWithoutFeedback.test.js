// @flow

import * as React from 'react';
import { shallow } from 'react-native-testing-library';
import { View } from 'react-native';
import { TouchableWithoutFeedback } from '@kiwicom/universal-components';

it('renders', () => {
  expect(
    shallow(
      <TouchableWithoutFeedback onPress={jest.fn()}>
        <View />
      </TouchableWithoutFeedback>,
    ),
  ).toMatchInlineSnapshot(`
Object {
  "output": <TouchableWithoutFeedback
    accessibilityComponentType="button"
    accessibilityTraits="button"
    onPress={[MockFunction]}
  >
    <Component />
  </TouchableWithoutFeedback>,
}
`);
});
