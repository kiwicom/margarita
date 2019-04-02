// @flow

import * as React from 'react';
import { render } from 'react-native-testing-library';
import { Icon } from '@kiwicom/universal-components';

import { FromToIcon } from '../FromToIcon';
import type { FromToIcon_data as BookingType } from '../__generated__/FromToIcon_data.graphql';

const $refType: any = null;
const getData = (type: ?BookingType) => ({
  type,
  $refType,
});

it('show correct icons', () => {
  const MultiCity = render(
    // $FlowExpectedError: It should be ok to pass string
    <FromToIcon data={getData('BOOKING_MULTICITY')} iconColor="blue" />,
  );
  const BookingReturn = render(
    // $FlowExpectedError: It should be ok to pass string
    <FromToIcon data={getData('BOOKING_RETURN')} iconColor="blue" />,
  );
  const OneWay = render(
    // $FlowExpectedError: It should be ok to pass string
    <FromToIcon data={getData('BOOKING_ONE_WAY')} iconColor="blue" />,
  );

  expect(MultiCity.getByType(Icon).props.name).toBe('flight-multicity');
  expect(BookingReturn.getByType(Icon).props.name).toBe('flight-return');
  expect(OneWay.getByType(Icon).props.name).toBe('flight-direct');
});

it('renders with missing type', () => {
  expect(
    render(<FromToIcon data={getData(null)} iconColor="blue" />).toJSON(),
  ).toBeNull();
});
