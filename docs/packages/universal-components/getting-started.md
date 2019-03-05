---
title: Getting Started
sidebar_label: Getting Started
---

To install the component library in your React/React Native project, run the following command:

```
yarn add @kiwicom/universal-components
# Only for React Native
react-native link @kiwicom/universal-components
```

## Loading the icon font

For the `Icon` component to work correctly, you will need to import the `orbit-icon` font family in your project.

### In a fresh `create-react-app`

You could add the following snippet in `App.css`:

```
@font-face {
  font-family: "orbit-icons";
  src: url(../node_modules/@kiwicom/universal-components/lib/fonts/orbit-icons.ttf);
}
```

> Two working examples on GitHub:

- [in the example folder](https://github.com/kiwicom/universal-components/tree/master/examples/create-react-app-icon-font) of the @kiwicom/universal-component repository,
- in the web app of [Margarita](https://github.com/kiwicom/margarita/tree/master/apps/web) (Next.js based web-app)

### In an Expo app

You would need to load the font on your first screen; for example:

```
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Expo from 'expo';
import { Fonts, Icon } from '@kiwicom/universal-components';

export default class App extends React.Component {
  state = {
    fontsLoaded: false,
  };

  async componentDidMount() {
    await Expo.Font.loadAsync({
      'orbit-icons': Fonts.OrbitIcons,
    });
    this.setState({ fontsLoaded: true });
  }

  render() {
    if (this.state.fontsLoaded) {
      return (
        <View style={styles.container}>
            <Icon name="airplane" color="#40A798" size="large"/>
            <Text>Open up App.js to start working on your app!</Text>
        </View>
      );
    }
    return null;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```

> Two working examples on GitHub:

- [in the example folder](https://github.com/kiwicom/universal-components/tree/master/examples/expo-icon-font) of the @kiwicom/universal-component repository,
- in the mobile app of [Margarita](https://github.com/kiwicom/margarita/tree/master/apps/mobile)
