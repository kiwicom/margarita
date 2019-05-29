// @flow

import { getTitle } from '../helpers';

describe('PassengerCard: getTitle helper', () => {
  it('should handle male gender', () => {
    expect(getTitle('male')).toBe('Mr.');
  });
  it('should handle female gender', () => {
    expect(getTitle('female')).toBe('Ms.');
  });
  it('should handle others', () => {
    expect(getTitle('other')).toBe('');
  });
});
