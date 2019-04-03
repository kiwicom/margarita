// @flow

import fc from 'fast-check';

import { capitalize } from '../Capitalize';

describe('capitalize', () => {
  it('returns a string with its first letter capitalized', () => {
    expect(capitalize('margarita')).toBe('Margarita');
    expect(capitalize(capitalize('margarita'))).toBe('Margarita');
    expect(capitalize('Margarita')).toBe('Margarita');
  });

  it('returns a string of the same length', () => {
    fc.assert(
      fc.property(fc.string(), text => {
        expect(typeof capitalize(text)).toBe('string');
        expect(capitalize(text)).toHaveLength(text.length);
      }),
    );
  });

  it('returns the same result if applied twice', () => {
    fc.assert(
      fc.property(fc.string(), text => {
        expect(capitalize(capitalize(text))).toBe(capitalize(text));
      }),
    );
  });

  it('handles null and undefined values without crashing', () => {
    expect(capitalize(null)).toBeNull();
    expect(capitalize(undefined)).toBeNull();
  });
});
