// @flow

import { getOptionsIds, areSelectedOptionsChanged } from '../helpers';
import mockedPlaces from '../mocks/places';

describe('OptionPicker: getOptionsIds helper function', () => {
  test('extract the places Ids to the array', () => {
    expect(getOptionsIds(mockedPlaces)).toMatchSnapshot();
  });
  test('empty array as parameter', () => {
    expect(getOptionsIds([])).toEqual([]);
  });
});

describe('OptionPicker: areSelectedOptionsChanged helper function', () => {
  test('should be eual', () => {
    expect(areSelectedOptionsChanged(mockedPlaces, mockedPlaces)).toBeFalsy();
  });
  test('empty array as parameter', () => {
    expect(
      areSelectedOptionsChanged(mockedPlaces, [mockedPlaces[1]]),
    ).toBeTruthy();
  });
});
