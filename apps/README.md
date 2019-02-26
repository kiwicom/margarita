# Folder structure and Navigation

Here is the folder structure:

- `core` folder, aka `@kiwicom/margarita-core` package  
  shared logic written in React Native (ported to the web through `react-native-web`),
- `mobile` folder, aka `@kiwicom/margarita-mobile` package  
  mobile application written in React Native, powered by Expo,
- `web` folder, aka `@kiwicom/margarita-web` package  
  web application written in React, powered by Next.js,
- `graphql` folder, aka `@kiwicom/margarita-graphql` package
  graphql server, written in GraphQL.js, powered by Node,
- `landingPage` folder, aka `@kiwicom/margarita-landing-page` package web page, powered by Gatsby.js.

Next.js and React Native have different navigations: Next.js is filename based by default, when React Native has the _de facto_ standard `react-navigation`. That library relies on injecting a `navigation` prop to the different screens and it is possible to connect any component to that navigation by using a HoC `withNavigation`.

Since we would like to reuse the same logic for navigation in `core`, we need to provide a similar HoC which will depend on the plaftorm; for `mobile`, it should be just a dumb wrapper of `react-navigation`. However, for `web`, we need to map the `Router` provided by `next/router` into a similar API as `react-navigation` provides.

# Miscellaneous/Oddities

Note that to make such an hybrid app, with technologies not originally designed to work together, some hacks are necessary.

### Why `App.js` at the root

Expo does not play well with Yarn workspaces; despite it being present only in one workspace, it is looking for an `App.js` at the root of the Yarn workspaces. The hack is to create a dumb `App.js` at the root, which basically redirects to the `index.js` in `@kiwicom/margarita-mobile` package.

### Why `link-workspaces.js`, `rn-cli.config.js` and packages `crna-make-symlinks-for-yarn-workspaces` and `metro-bundler-config-yarn-workspaces`

Expo does not like Yarn workspaces and most likely Metro bundler under the hood, as Metro does not play well with symlinks. That means `node_modules` are not resolved correctly. The solution to this problem is exposed in a [Medium article](https://medium.com/viewstools/how-to-use-yarn-workspaces-with-create-react-app-and-create-react-native-app-expo-to-share-common-ea27bc4bad62) from Dec, 2017. Some updates and fixes to the article are provided in a [YouTube Video](https://www.youtube.com/watch?v=iM4NRM2diPc).

### Why `babel.config.js` everywhere

A repo should only contain one `babel.config.js`, and workspaces should use `.babelrc`, however there is currently a 🐛 https://github.com/martpie/next-plugin-transpile-modules/issues/1#issuecomment-425651334, so `.babelrc` files would not be loaded.
