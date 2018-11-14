const OFF = 0;
const WARNING = 1;
const ERROR = 2;

module.exports = {
  "extends": ["@callstack"],
  "rules": {
    "react/destructuring-assignment": ERROR,
    "prettier/prettier": ERROR,
    "import/no-extraneous-dependencies": [
      ERROR,
      {
        "devDependencies": [
          "**/*.test.js",
          "**/*.spec.js",
          "**/*.stories.js",
        ]
      }
    ],
  },
}
