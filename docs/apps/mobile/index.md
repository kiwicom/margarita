---
title: Mobile
sidebar_label: Mobile
---

The mobile application is written in React Native and is powered by [Expo](https://expo.io/). To open it, from the root of margarita, run

```
yarn mobile
```

This will open the Metro Bundler started by Expo and you will be able to [launch the application](https://docs.expo.io/versions/latest/workflow/up-and-running/). To access the GraphQL server, you will also need to run 

````
yarn server
````

## Folder structure


```
apps/mobile/
├── index.js 
├── app.json                    #Expo app configuration such as name, entry point, description, etc...
├── App.js 
├── src
│   ├── navigation              #Creates the stack navigators for the different parts of the app, 
│   │    │                      as well as the bottom Tab Navigator
│   │    ├── TabNavigator.js  
│   │    ├── ExampleStack.js           
│   ├── screens                 #All the screens that our app implements. The components with the screen logic are 
│   │   │                       obtained from @kiwicom/margarita-core as they are reused on the web app
│   │   ├── index.js
│   │   ├── ExampleScreen.js
├── assets 
├── scripts 
│   ├── configureApplication.js #Post-install script necessary to patch the intl library for it to work correctly
│   ├── linkWorkspaces.js       #Pre-start script to be able to share code between create react app and create react native app                               
```

## Navigation

For the mobile version, we use the de facto standard `react-navigation`. The structure of the app relies on creating an [App Container](https://reactnavigation.org/docs/en/app-containers.html) to which we pass a [BottomTabNavigator](https://reactnavigation.org/docs/en/bottom-tab-navigator.html).

This tab navigator allows you to access different stacks of screens (using [createStackNavigator](https://reactnavigation.org/docs/en/stack-navigator.html)), so you can go back on the stack. This stacks are domain based, that is `Search`, `MMB`, and `Profile`.

We then just wrap the components that use navigation with the included [withNavigation](https://reactnavigation.org/docs/en/with-navigation.html) HOC from `react-navigation`, which injects the `navigation` prop, and then we can navigate to a given screen (known to the current stack navigator).