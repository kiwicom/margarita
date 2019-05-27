---
title: Technical Overview
sidebar_label: Technical Overview
---

## Architecture

This project follows `react-native-web` philosophy of ["Write Once, Render Anywhere"](https://www.youtube.com/watch?v=HLWM2uhv2wI). The web version is using
[Next.js](https://github.com/zeit/next.js/) and the mobile version is powered by
[Expo](https://github.com/expo/expo).

## Technologies

- [React Native](https://facebook.github.io/react-native/) - JS framework for writing real, natively rendered mobile applications for iOS and Android.
- [React Native for Web](https://github.com/necolas/react-native-web) - Makes it possible to run [React Native](https://facebook.github.io/react-native/) components and APIs on the web using React DOM.
- [Next.js](https://nextjs.org/) - JS framework powering [web](./apps/web/) part.
- [Expo](https://expo.io/) - SDK and tools used for [mobile](./apps/mobile/) part.
- [Storybook](https://github.com/storybooks/storybook) - Development environment for UI components, used by [universal-components](./packages/universal-components/) and [margarita-components](./packages/margarita-components/).
- [GraphQL](https://graphql.org/) - Query language for API.
- [GraphQL Voyager](https://github.com/APIs-guru/graphql-voyager) - Enables GraphQL API representation as an [interactive graph](https://margarita-graphql-voyager.now.sh/).
- [Docusaurus](https://docusaurus.io/) - Open Source tool for making documentation websites.
- [Yarn Workspaces](https://yarnpkg.com/lang/en/docs/workspaces/) - Yarn functionality that ties all parts of the project together.
- [Relay](http://facebook.github.io/relay/) - JS framework for building data-driven React applications.
- [Flow](https://flow.org/) - Static type checker for JS.
- [Jest](https://jestjs.io/) - JS testing framework with a focus on simplicity.
- [React Native Testing Library](https://github.com/callstack/react-native-testing-library) - Lightweight React Native testing utilities.

### Kiwi.com packages

- [@kiwicom/orbit-design-tokens](https://orbit.kiwi/design-tokens/) - Design tokens store visual design attributes. They help us make UI more consistent. We use them instead of static values like HEX codes for color or sizing units.
- [@kiwicom/babel-preset-kiwicom](https://github.com/kiwicom/babel-preset-kiwicom) - Babel preset for JS used at Kiwi.com.
- [@kiwicom/eslint-config](https://github.com/kiwicom/eslint-config-kiwicom) - Eslint configuration for JS used at Kiwi.com.
- [@kiwicom/fetch](https://github.com/kiwicom/fetch) - Fetch function with advanced capabilities like retries with delay and request cancellation after timeout.
- [@kiwicom/graphql-global-id](https://github.com/kiwicom/graphql-global-id) - Utility to manage ID fields in GraphQL correctly.
- [@kiwicom/graphql-utils](https://www.npmjs.com/package/@kiwicom/graphql-utils) - Collection of generic GraphQL utilities. These functions are helpful to deal with some complicated situations in GraphQL ecosystem like for example proper pagination structure.
