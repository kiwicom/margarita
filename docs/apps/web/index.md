---
title: Web
sidebar_label: Web
---

The web application is written in React and React Native (which is transpiled to React using [React Native Web](https://github.com/necolas/react-native-web)) and is powered by [Next.js](https://nextjs.org/). To open it, from the root of margarita, run

```
yarn dev
```

This will open the GraphQL server and open a development server on http://localhost:3000 . The app uses a typical Next.js structure where all the routes are defined under `pages`. 

You can also open the client by running `yarn web`, but you will also need to call `yarn server` to start the GraphQL server. `yarn dev` is the shorthand for those two commands.

It also has an `_app.js` and `_document.js` files that define the structure of the initial HTML document and each one of the pages (to pass the context to each page or define some global styles or head information).

For rendering the same pages as the mobile version, available on `@kiwicom/margarita-core`, we use React Native Web which transforms the react native components to React ones.

## Folder structure


```
apps/web/
├── babel.config.js 
├── next.config.js          #Next configuration with modules to be transpiled, server port 
│                           and import aliasing (e.g 'react-native' for 'react-native-web') 
│
├── pages 
│   ├── _app.js             #Component that wraps each one of the pages, useful for adding context 
│   │                       information or HOCs to the page components
│   │
│   ├── _document.js        #Overrides the top html document that is initially rendered, useful for 
│   │                       adding head information and global styles for the body
│   │
│   ├── index.js            #Initially rendered page 
│   ├── example-page.js     #Page available at /example-page
│  
├── static                  #Fonts and images
│
├── components              #Web specific components such as the Navbar or the Layout              
```

## Navigation

For the web version, in order for the navigation to work the same as the mobile version, with `react-navigation`, we have to implement a `withNavigation` HOC that wraps the `next/router`which is what is used for navigation in the web version, and exposes an API which is similar to the `react-navigation` one.

Then, whenever we want to have access to the routing in any page, we just use the `withPageRouter` HOC which injects all the router properties. To allow navigation in the app, we initially wrap the index component with `withRouter`.