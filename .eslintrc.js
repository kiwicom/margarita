const OFF = 0;
const WARNING = 1;
const ERROR = 2;

module.exports = {
  "extends": ["@callstack"],
  "plugins": [
    "prettier",
    "react-native"
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
  },
}
