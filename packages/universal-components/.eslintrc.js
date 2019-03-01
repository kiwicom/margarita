const OFF = 0;
const WARNING = 1;
const ERROR = 2;

module.exports = {
  root: true,
  extends: ["@kiwicom/eslint-config"],
  parser: "babel-eslint",
  env: {
    es6: true,
    jest: true,
    node: true,
    browser: true
  },
  rules: {
    "react/sort-comp": ERROR,
    "no-unused-vars": [ERROR, { args: "after-used" }],
    "no-restricted-imports": [
      ERROR,
      {
        paths: [
          {
            name: "react-native",
            importNames: ["StyleSheet"],
            message: "Please use PlatformStyleSheet instead"
          }
        ]
      }
    ]
  }
};
