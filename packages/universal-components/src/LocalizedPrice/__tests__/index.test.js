// @flow

import * as React from 'react';
import { render } from 'react-native-testing-library';

import { LocalizedPrice } from '..';

import { Text } from '../..';

describe('LocalizedPrice', () => {
  const localizedPrice = '$123,455.3455';
  const { getByType } = render(
    <LocalizedPrice localizedPrice={localizedPrice} />,
  );

  it('should set proper price format', () => {
    expect(getByType(LocalizedPrice).findByType(Text).props.children).toBe(
      '$123,455.3455',
    );
  });
});
