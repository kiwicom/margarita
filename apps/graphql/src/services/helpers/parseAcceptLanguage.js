// @flow

export default function parseAcceptLanguage(acceptLanguage: ?string) {
  let [language, territory] = ['en', 'US'];

  // valid acceptLanguage: en || en_us || en_US || en-US || en-US,en;q=0.9,sl;q=0.8
  const localeRegex = /^(?<language>[a-z]{2})(?:[-_](?<territory>[a-z]{2}))?(?:,|;|$)/i;

  if (acceptLanguage) {
    const match = localeRegex.exec(acceptLanguage);
    if (match !== null) {
      language = match.groups?.language ?? 'en';
      territory = match.groups?.territory ?? 'US';
    }
  }

  return [language, territory.toUpperCase()];
}
