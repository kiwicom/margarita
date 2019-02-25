// @flow

import * as React from 'react';
import { shallow } from 'react-native-testing-library';

import Navbar from '../Navbar';

it('renders', () => {
  const { output } = shallow(<Navbar />);
  expect(output).toMatchInlineSnapshot(`
<Component
  style={
    Object {
      "alignItems": "center",
      "flexDirection": "row",
      "height": 50,
      "justifyContent": "space-between",
      "paddingHorizontal": 10,
      "shadowColor": "#000",
      "shadowOffset": Object {
        "height": 0,
        "width": 0,
      },
      "shadowOpacity": 0.25,
      "shadowRadius": 3,
      "zIndex": 100,
    }
  }
>
  <Component
    style={
      Object {
        "alignItems": "center",
        "flexDirection": "row",
      }
    }
  >
    <TouchableWithoutFeedback
      accessibilityComponentType="button"
      accessibilityTraits="button"
      onPress={[Function]}
    >
      <Component
        accessibilityLabel="Logo"
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
    </TouchableWithoutFeedback>
    <NavbarLink
      label="Travel"
      route="/"
    />
  </Component>
  <Component
    style={
      Object {
        "flexDirection": "row",
      }
    }
  >
    <NavbarLink
      label="Manage My Booking"
      route="/mmb"
    />
  </Component>
</Component>
`);
});
