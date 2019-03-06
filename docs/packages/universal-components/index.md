---
title: Introduction
sidebar_label: Introduction
---

_This page is a stub._

Component library compatible with Expo/React Native projects as well as React applications.

Relies on [react-native-web](https://github.com/necolas/react-native-web) to port components, written with a React Native first approach, to the web.

[📘 Storybook](https://kiwicom-universal-components.netlify.com) |
[📚 Documentation](https://kiwicom.github.io/margarita/docs/packages/universal-components/)

## Usage

```bash
yarn install @kiwicom/universal-components
# Only for React Native
react-native link @kiwicom/universal-components
```

### In Expo projects

Since `react-native link` is not available in Expo, we need to load the fonts at the root of the application. Your `App.js` should look like

```javascript
import React from "react";
import { View } from "react-native";
import { Icon, Text, PageLoader } from "@kiwicom/universal-components";
import { Font } from "expo";
import { Fonts } from "@kiwicom/universal-components";

export default class App extends React.Component {
  state = {
    fontLoaded: false
  };

  componentDidMount() {
    Font.loadAsync({
      "orbit-icons": Fonts.OrbitIcons,
      Roboto: Fonts.Roboto,
      RobotoItalic: Fonts.RobotoItalic,
      RobotoBold: Fonts.RobotoBold,
      RobotoBoldItalic: Fonts.RobotoBoldItalic
    }).then(() => {
      this.setState({ fontLoaded: true });
    });
  }

  render() {
    return this.state.fontLoaded ? (
      <View>
        <Text>Open up App.js to start working on your app!</Text>
        <Icon name="calendar" />
      </View>
    ) : (
      <PageLoader />
    );
  }
}
```

For more information, consult the documentation on [expo.io](https://docs.expo.io/versions/latest/guides/using-custom-fonts).

Note: For web projects, you need to ensure you support the `.web.js` extension. [create-react-app](https://github.com/facebook/create-react-app/blob/6364bbf6dc8244508398f934d0882f05e0cb5dcc/packages/react-scripts/config/paths.js#L52) already supports it by default.

# Contributing

See the [contributing](./contributing.md) section.

Forward your suggestions, issues and bugs [here](https://github.com/kiwicom/margarita/issues) (use the `universal-components` label).
