const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    },
  },
  root: true, // stop ESLint from looking for a configuration file in parent folders
  env: {
    es6: true,
    jest: true,
    node: true,
  },
  rules: {
    'prettier/prettier': [
      ERROR,
      { singleQuote: true, trailingComma: 'all', jsxBracketSameLine: false },
    ],
  },

  // set each global variable name equal to true to allow the variable to be overwritten or
  // false to disallow overwriting
  globals: {
    fetch: false, // already by default in RN
    FormData: false, // already by default in RN
    __DEV__: false, // already by default in RN
  },
  plugins: ['prettier'],

  extends: [
    'prettier',
    'prettier/react',
    'prettier/flowtype',
    '@kiwicom/eslint-config',
  ],
};
