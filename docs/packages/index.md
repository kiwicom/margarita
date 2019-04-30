---
title: List of Packages
sidebar_label: List of Packages
---

## Folder structure

```
packages/
├── components
├── config
├── device
├── localization
├── map
├── navigation
├── relay
├── universal-components
├── utils
```

## Packages description

### components 
[@kiwicom/margarita-components](https://github.com/kiwicom/margarita/tree/master/packages/components)
- Private package
- Contains Margarita related reusable components
- More info in separate [Margarita Components](./margarita-components) section

### config
[@kiwicom/margarita-config](https://github.com/kiwicom/margarita/tree/master/packages/config)
- Private package
- Reusable Margarita constants and types
- For example date format strings, color values, links and time values

### device
[@kiwicom/margarita-device](https://github.com/kiwicom/margarita/tree/master/packages/device)
- Private package
- Device related helpers
- For example to detect device `layout` or `locale`

### localization
[@kiwicom/margarita-localization](https://github.com/kiwicom/margarita/tree/master/packages/localization)
- Private package
- Localisation related helpers based on device locale
- For example currency formatter

### map
[@kiwicom/margarita-map](https://github.com/kiwicom/margarita/tree/master/packages/map)
- Private package 
- Margarita `MapView` implementation

### navigation
[@kiwicom/margarita-navigation](https://github.com/kiwicom/margarita/blob/master/packages/navigation/package.json)
- Private package 
- Screens navigation related helpers, which unifies how navigation is used on both platforms

### relay
[@kiwicom/margarita-relay](https://github.com/kiwicom/margarita/tree/master/packages/relay)
- Private package 
- Margarita `Relay` implementation, in most cases just exports `@kiwicom/relay` functions
- Contains margarita `QueryRenderer` implementation

### universal-components
[@kiwicom/universal-components](https://github.com/kiwicom/margarita/tree/master/packages/universal-components)
- Component Library for `React Native`, `Expo` and `React` applications
- More info in separate [Universal Components](./universal-components) section

### utils
[@kiwicom/margarita-utils](https://github.com/kiwicom/margarita/tree/master/packages/utils)
- Private package 
- Contains small reusable utils and helpers which can be used across platforms
- For example date and string formatting, debouncing or reusable `noop` function

