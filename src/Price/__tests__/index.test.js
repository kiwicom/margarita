// @flow

import * as React from 'react';
import { render } from 'react-native-testing-library';
import { Price } from '..';
import { Text } from '../..';

// Mock DateFormatter to prevent error
jest.mock('../../utils/DateUtils/DateFormatter', () => ({}));

describe('Price', () => {
  const price = {
    value: 123455.3455,
    currency: 'EUR',
    locale: 'en-GB',
  };
  const { getByType } = render(
    <Price
      value={price.value}
      currency={price.currency}
      locale={price.locale}
    />
  );

  it('should set proper price format', () => {
    expect(getByType(Price).findByType(Text).props.children).toBe(
      '€123,455.35'
    );
  });
});
