# Universal Components
Proof of concept for universal components.
Based on [react-native-web](https://github.com/necolas/react-native-web).

## Usage

```bash
yarn install @kiwicom/universal-components
# Only for React Native
react-native link @kiwicom/universal-components
```

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
