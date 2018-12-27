# Contributing Guidelines

_Note: These guidelines assume you have an existing React Native setup on your machine and that your simulator/emulator is properly functionning. If not, have a look at [Getting Started • React Native](https://facebook.github.io/react-native/docs/getting-started.html), and go to "Building Projects with Native Code"._

To run the storybook and start developing, clone the repository

```bash
git clone https://github.com/kiwicom/universal-components.git
```

and enter the directory to install the node modules:

```bash
cd universal-components
yarn
```

## Desktop

If you want to see the web version, run

```bash
yarn storybook
```

and you should go to <http://localhost:9009> to see

![](./docs/assets/storybook-web.png)

## Mobile

After running `yarn`, you also need to link assets using:

```bash
react-native link
```

### iOS

To run the storybook on iOS, execute

```bash
yarn ios
```

to see ![](./docs/assets/storybook-ios.png)

### Android

To run the storybook on Android, execute

```bash
yarn android
```

### Easier navigation

Although it is possible to navigate using the menu inside the mobile storybook, there is a navigator inside the browser available at <http://localhost:7007> after you run

```bash
yarn storybook-native
```

You should see something similar to ![](./docs/assets/storybook-native.png)

and it is then easier to test the interactions with the action logger, and play with the knobs inside the Playground.

## Troubleshooting

- **I added `MyComponent.stories.js` and it is not available on iOS or Android in the storybook, but I can see it on the web version.**<br>
  This is sometimes due to the fact that `react-native-story-loader` did not run. To fix it, execute

  ```bash
  yarn rnstl
  ```

- **I started the web UI for the mobile storybook but no stories are displayed.**<br>
  Make sure that the packager is running (`yarn ios` or `yarn android`), and refresh the application by pressing `CMD+R` on iOS or by pressing `R` twice on `Android`.

## Before submitting a PR: a checklist

- I tested my component at least on iOS or on Android;
- I wrote tests for my component and all tests are passing;
- I ran `yarn test-ci` and there were no errors;
- I squashed all my commits into one (unless having several really makes sense);
- I chose a descriptive message for all my commit messages;
- I created my PR and added reviewers.

## Updating Icons

If you need to update the icon list (`Icon/icons.json`), make sure to run

```bash
node scripts/generateTypes.js
```

to update `src/types/_generated-types/index.js`. This ensures flow types are accurate.
