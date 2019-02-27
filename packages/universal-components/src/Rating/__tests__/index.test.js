// @flow

import * as React from 'react';
import { render } from 'react-native-testing-library';
import snapshotDiff from 'snapshot-diff';

import { Rating } from '..';

describe('Rating', () => {
  const rating = 3;
  const style = { color: '#ffb100' };

  const { getByText, getAllByProps } = render(
    <Rating style={style} rating={rating} />,
  );

  it('should contain stars', () => {
    expect(getByText('★'.repeat(rating))).toBeDefined();
  });

  it('should have passed props', () => {
    expect(
      getAllByProps({
        rating,
        style,
      }),
    ).toBeDefined();
  });

  it('should match snapshot diff', () => {
    const base = <Rating />;
    const extend = <Rating style={style} rating={rating} />;
    expect(snapshotDiff(base, extend)).toMatchSnapshot();
  });
});
