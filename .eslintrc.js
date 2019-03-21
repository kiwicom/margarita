const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  root: true, // stop ESLint from looking for a configuration file in parent folders
  extends: ['@kiwicom/eslint-config'],
  parser: 'babel-eslint',
  env: {
    es6: true,
    jest: true,
    node: true,
    browser: true,
  },
  rules: {
    'react/sort-comp': ERROR,
    'no-unused-vars': [ERROR, { args: 'after-used' }],
    'no-restricted-imports': [
      ERROR,
      {
        paths: [
          {
            name: 'react-relay',
            message: 'Please use @kiwicom/margarita-relay package instead.',
          },
          {
            name: 'graphql-relay',
            importNames: [
              'connectionArgs',
              'connectionDefinitions',
              'connectionFromArray',
              'connectionFromArraySlice',
              'connectionFromPromisedArray',
              'connectionFromPromisedArraySlice',
            ],
            message:
              "please import { connectionFromArray } from '@kiwicom/graphql-utiles' instead",
          },
          {
            name: 'react-native',
            importNames: [
              'StyleSheet',
              'Text',
              'TouchableHighlight',
              'TouchableNativeFeedback',
              'TouchableOpacity',
              'TouchableWithoutFeedback',
              'Button',
            ],
            message:
              'Please use @kiwicom/universal-components instead, and @kiwicom/margarita-components for TouchableWithoutFeedback and Text',
          },
          {
            name: 'react-navigation',
            importNames: ['withNavigation'],
            message: 'Please use @kiwicom/margarita-navigation',
          },
          {
            name: 'react-native-shimmer-placeholder',
            message: 'Please use Shimmer from @kiwicom/margarita-components',
          },
        ],
      },
    ],
  },

  // set each global variable name equal to true to allow the variable to be overwritten or
  // false to disallow overwriting
  globals: {
    fetch: false, // already by default in RN
    FormData: false, // already by default in RN
    __DEV__: false, // already by default in RN
  },
};
