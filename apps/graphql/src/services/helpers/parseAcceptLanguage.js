// @flow

export default function parseAcceptLanguage(acceptLanguage: ?string) {
  let [language, territory] = ['en', 'US'];

  // valid acceptLanguage: en || en_us || en_US || en-US || en-US,en;q=0.9,sl;q=0.8
  const localeRegex = /^([a-z]{2})(?:[-_]([A-Za-z]{2}))?(,|;|$)/;

  if (acceptLanguage) {
    const match = localeRegex.exec(acceptLanguage);
    if (match !== null) {
      [, language, territory = 'US'] = match;
    }
  }

  return [language, territory.toUpperCase()];
}
