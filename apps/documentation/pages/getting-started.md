import yarnAnalyse from '../../../assets/yarn-analyze.png';

# Getting Started

To get started, clone the repository, change directory and install the dependencies:

```shell
git clone https://github.com/kiwicom/margarita
cd margarita/
yarn
```

To launch the GraphQL server:

- `yarn server`

To launch the client app, you have different options:

- `yarn web` to launch the _development_ web version;
- `yarn export; yarn build; yarn start` to launch the _production_ web version;
- `yarn mobile` to start the mobile version.

**Note**: If `yarn server` is running and you get Network errors on Android, you need to forward your localhost:4000 to the emulator; this is achieved by running `adb reverse tcp:4000 tcp:4000`.

The other available scripts are:

- `yarn analyze` to get an analysis of the bundle size to get the following
  <img src={yarnAnalyse} alt="yarn analyze" title="yarn analyze" />
- `yarn dev` to run concurrently `yarn server` and `yarn web`;
- `yarn lint` to ensure your code is properly formatted;
- `yarn flow` to ensure your code is respecting the types given to your vaiables;
- `yarn test-ci` to ensure your code should pass the Continuous Integration (CI) tests;
- `yarn relay` to get the latest schema of the [graphql server](packages/graphql)
  and compile your queries and fragments to generate Flow types, among other things;
- `yarn landing-page` to run the landing page of the app;
- `storybook:web` to run the web Storybook for our components in `packages/components`;
- `storybook:mobile` to run the mobile Storybook for our components in `packages/components`.

### Initial Configuration

1. Copy and rename following sample files:

   - .env-sample &rightarrow; **.env**
   - apps/graphql/.env-sample &rightarrow; **apps/graphql/.env**

2. Set environment variables in files:

   **.env**:

   - `GRAPHQL_URL`
     - URL of GraphQL server
     - E. g.: `'http://127.0.0.1:4000'`
   - `STORYBOOK`
     - Decides if storybook or the app should be loaded
     - E. g.: `'false'`

   **apps/graphql/.env**:

   - `API_KEY`
     - Get your API key here: https://tequila.kiwi.com
   - `BASE_URL`
     - URL of REST server
     - E. g.: `'https://kiwicom-test.apigee.net/'`
   - `NODE_ENV`
     - Type of NodeJS environment.
     - E. g.: `'development'`
