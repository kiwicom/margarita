// @flow

import * as React from 'react';
import { shallow } from 'react-native-testing-library';

import { SegmentMap } from '../SegmentMap';

type BookingType = 'BOOKING_MULTICITY' | 'BOOKING_ONE_WAY' | 'BOOKING_RETURN';

const $fragmentRefs: any = null;
const $refType: any = null;

const getArrival = (index: number) => ({
  stop: {
    locationId: `arrival-${index}`,
    city: {
      name: `arrivalCity-${index}`,
    },
    coordinates: {
      latitude: 1 + index,
      longitude: 2 + index,
    },
  },
});
const getDeparture = (index: number) => ({
  stop: {
    locationId: `departure-${index}`,
    city: {
      name: `departure-${index}`,
    },
    coordinates: {
      latitude: 10 + index,
      longitude: 20 + index,
    },
  },
});
const getData = (type: BookingType) => ({
  $fragmentRefs,
  $refType,
  type,
  sector: {
    segments: [
      {
        arrival: getArrival(1),
        departure: getDeparture(1),
      },
    ],
  },
  inbound: {
    segments: [{ arrival: getArrival(2), departure: getDeparture(2) }],
  },
  outbound: {
    segments: [{ arrival: getArrival(3), departure: getDeparture(3) }],
  },
  sectors: [
    {
      segments: [
        {
          arrival: getArrival(4),
          departure: getDeparture(4),
        },
      ],
    },
    {
      segments: [
        {
          arrival: getArrival(5),
          departure: getDeparture(5),
        },
      ],
    },
  ],
});

it('renders correctly with OneWayBooking', () => {
  const data = getData('BOOKING_ONE_WAY');
  const { output } = shallow(<SegmentMap data={data} />);
  expect(output).toMatchSnapshot();
});

it('renders correctly with ReturnBooking', () => {
  const data = getData('BOOKING_RETURN');
  const { output } = shallow(<SegmentMap data={data} />);
  expect(output).toMatchSnapshot();
});

it('renders correctly with MulticityBooking', () => {
  const data = getData('BOOKING_MULTICITY');
  const { output } = shallow(<SegmentMap data={data} />);
  expect(output).toMatchSnapshot();
});
