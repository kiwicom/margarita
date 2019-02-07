// @flow

import * as React from 'react';
import { render } from 'react-native-testing-library';
import { Icon } from '@kiwicom/universal-components';

import { FromToIcon } from '../FromToIcon';
import type { BookingType } from '../__generated__/FromToIcon.graphql';

const $refType: any = null;
const getData = (type: BookingType) => ({
  type,
  $refType,
});

it('show correct icons', () => {
  const multicity = render(
    <FromToIcon data={getData('BOOKING_MULTICITY')} iconColor="blue" />,
  );
  const bookingReturn = render(
    <FromToIcon data={getData('BOOKING_RETURN')} iconColor="blue" />,
  );
  const oneWay = render(
    <FromToIcon data={getData('BOOKING_ONE_WAY')} iconColor="blue" />,
  );

  expect(multicity.getByType(Icon).props.name).toBe('flight-multicity');
  expect(bookingReturn.getByType(Icon).props.name).toBe('flight-return');
  expect(oneWay.getByType(Icon).props.name).toBe('flight-direct');
});

it('renders with missing type', () => {
  expect(
    // $FlowExpectedError: Intenionally testing with erroneous data
    render(<FromToIcon data={getData(null)} iconColor="blue" />).toJSON(),
  ).toBeNull();
});
