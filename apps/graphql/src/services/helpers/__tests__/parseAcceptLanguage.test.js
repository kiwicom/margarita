// @flow

import parseAcceptLanguage from '../parseAcceptLanguage';

test.each([
  [undefined, 'en', 'US'], // undefined input (fallback to defaults)
  ['czech', 'en', 'US'], // invalid input
  ['cz+CZ', 'en', 'US'], // invalid input
  ['de', 'de', 'US'],
  ['de_DE', 'de', 'DE'],
  ['de_de', 'de', 'DE'],
  ['de-DE', 'de', 'DE'],
  ['de-DE,en;q=0.9,sl;q=0.8', 'de', 'DE'],
])(
  'parses input "%s" correctly to: %s-%s',
  (input, expectedLanguage, expectedTerritory) => {
    const [language, territory] = parseAcceptLanguage(input);
    expect(language).toBe(expectedLanguage);
    expect(territory).toBe(expectedTerritory);
  },
);
