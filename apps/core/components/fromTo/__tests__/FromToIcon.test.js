// @flow

import * as React from 'react';
import { render } from 'react-native-testing-library';
import { Icon } from '@kiwicom/universal-components';

import { FromToIcon } from '../FromToIcon';
import type { FromToIcon_data as FromToType } from '../__generated__/FromToIcon_data.graphql';

const $refType: any = null;
const getData = (type: ?FromToType) => ({
  __typename: type,
  $refType,
});

it('show correct icons', () => {
  const MultiCity = render(
    // $FlowExpectedError: It should be ok to pass string
    <FromToIcon data={getData('BookingMulticity')} iconColor="blue" />,
  );
  const BookingReturn = render(
    // $FlowExpectedError: It should be ok to pass string
    <FromToIcon data={getData('BookingReturn')} iconColor="blue" />,
  );
  const OneWay = render(
    // $FlowExpectedError: It should be ok to pass string
    <FromToIcon data={getData('BookingOneWay')} iconColor="blue" />,
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
