// @flow

import React from 'react';
import renderer from 'react-test-renderer';

import Text from '../Text';

describe('Test', () => {
  test('render', () => {
    const comp = renderer.create(<Text>Dummy Text</Text>).toJSON();
    expect(comp).toMatchInlineSnapshot(`
<Text
  style={
    Object {
      "alignItems": "center",
      "fontSize": 24,
    }
  }
>
  Dummy Text
</Text>
`);
  });
});
