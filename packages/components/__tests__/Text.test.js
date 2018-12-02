// @flow

import * as React from 'react';
import { render } from 'react-native-testing-library';

import Text from '../Text';

describe('Text', () => {
  const children = 'Lorem ipsum';
  const component = render(<Text>{children}</Text>);

  it('render', () => {
    expect(component).toMatchInlineSnapshot(`
<Text
  style={
    Object {
      "alignItems": "center",
      "fontSize": 24,
    }
  }
>
  Lorem ipsum
</Text>
`);
  });

  it('should have defined children text', () => {
    expect(component.getByText(children)).toBeDefined();
  });
});
