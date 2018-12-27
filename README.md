# Universal Components

Proof of concept for universal components. Based on [react-native-web](https://github.com/necolas/react-native-web).

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
import OrbitIcons from "@kiwicom/universal-components/lib/fonts/orbit-icons.ttf";
import Roboto from "@kiwicom/universal-components/lib/fonts/Roboto/Roboto-Regular.ttf";

export default class App extends React.Component {
  state = {
    fontLoaded: false
  };

  componentDidMount() {
    Font.loadAsync({
      "orbit-icons": OrbitIcons,
      Roboto
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

## Development

### Desktop

```bash
yarn storybook
```

### Mobile

After running `yarn`, you also need to link assets using:

```bash
react-native link
```

#### iOS

```bash
yarn ios
```

#### Android

```bash
yarn android
```

### Updating Icons

If you need to update the icon list (`Icon/icons.json`), make sure to run

```bash
node scripts/generateTypes.js
```

to update `src/types/_generated-types/index.js`. This ensures flow types are accurate.
