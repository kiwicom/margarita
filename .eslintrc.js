const OFF = 0;
const WARNING = 1;
const ERROR = 2;

module.exports = {
  "extends": ["@callstack"],
  "plugins": [
    "prettier",
    "react-native",
    "flowtype"
  ],
  "rules": {
    "lines-between-class-members": [ERROR, "always", { exceptAfterSingleLine: true }],
    "no-lonely-if": ERROR,
    "no-else-return": ERROR,
    "prefer-const": ERROR,
    "no-duplicate-imports": ERROR,
    "curly": ERROR,
    "react-native/no-unused-styles": ERROR,
    "react/destructuring-assignment": ERROR,
    "prettier/prettier": ERROR,
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
    "flowtype/require-valid-file-annotation": [ERROR, "always"],
    "flowtype/newline-after-flow-annotation": [ERROR, "always"],
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
  },
}
