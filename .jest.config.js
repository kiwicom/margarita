module.exports = {
  "preset": "jest-expo",
  "testPathIgnorePatterns": [
    "<rootDir>/.next/",
    "<rootDir>/node_modules/",
    "<rootDir>/.expo/",
    "__tests__/__mocks__",
    "__tests__/__generated__",
    "<rootDir>/apps/landingPage/.cache/__tests__/"
  ],
  "setupFilesAfterEnv": ["<rootDir>/scripts/setupTests.js"],
  "transformIgnorePatterns": ["/node_modules/(?!@kiwicom)/"],
  "moduleNameMapper": {
    "^@kiwicom/universal-components$": "<rootDir>/packages/universal-components/src"
  }
}
