const OFF = 0;
const WARNING = 1;
const ERROR = 2;

module.exports = {
  "root": true,
  "extends": ["@kiwicom/eslint-config"],
  "parser": "babel-eslint",
  "env": {
    "es6": true,
    "jest": true,
    "node": true,
  },
  "plugins": [
    "prettier",
    "react-native",
    "flowtype"
  ],
  "rules": {
    'react/sort-comp': ERROR,
    'no-unused-vars': ERROR,
    "import/no-extraneous-dependencies": [
      ERROR,
      {
        "devDependencies": [
          "**/*.test.js",
          "**/*.spec.js",
          "**/*.stories.js",
          "./storybook.native/**/*.js",
        ]
      }
    ],
    "no-restricted-imports": [
      ERROR,
      {
        "paths": [
          {
            "name": "react-native",
            "importNames": ["StyleSheet"],
            "message": "Please use PlatformStyleSheet instead"
          }
        ]
      }
    ],
  },
};
