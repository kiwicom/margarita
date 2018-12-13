// @flow

import * as React from 'react';
import { render } from 'react-native-testing-library';

import Navbar from '../Navbar';

it('renders', () => {
  expect(render(<Navbar />)).toMatchInlineSnapshot(`
<View
  style={
    Object {
      "alignItems": "center",
      "flexDirection": "row",
      "height": 50,
      "justifyContent": "flex-start",
      "paddingHorizontal": 10,
      "shadowColor": "#000",
      "shadowOffset": Object {
        "height": 0,
        "width": 0,
      },
      "shadowOpacity": 0.25,
      "shadowRadius": 3,
    }
  }
>
  <Image
    accessibilityComponentType="button"
    accessibilityTraits="button"
    accessible={true}
    onResponderGrant={[Function]}
    onResponderMove={[Function]}
    onResponderRelease={[Function]}
    onResponderTerminate={[Function]}
    onResponderTerminationRequest={[Function]}
    onStartShouldSetResponder={[Function]}
    source={
      Object {
        "uri": "https://go.kiwi.com/logo.jpg",
      }
    }
    style={
      Object {
        "height": 50,
        "marginEnd": 20,
        "width": 80,
      }
    }
  />
</View>
`);
});
