// @flow

import { getPassengerTitle } from '../helpers';

describe('PassengerCard: getPassengerTitle helper', () => {
  it('should handle male gender', () => {
    expect(getPassengerTitle('male')).toBe('Mr.');
  });
  it('should handle female gender', () => {
    expect(getPassengerTitle('female')).toBe('Ms.');
  });
  it('should handle others', () => {
    expect(getPassengerTitle('other')).toBe('');
  });
});
