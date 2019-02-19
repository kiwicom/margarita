// @flow

import * as React from 'react';
import { shallow } from 'react-native-testing-library';

import { Bag } from '../Bag';

const CABIN_BAG = 'CABIN_BAG';
const PERSONAL_ITEM = 'PERSONAL_ITEM';
const CHECKED_BAGGAGE = 'CHECKED_BAGGAGE';
const props = {
  CABIN_BAG: {
    type: CABIN_BAG,
    quantity: 3,
  },
  PERSONAL_ITEM: {
    type: PERSONAL_ITEM,
    quantity: 3,
  },
  CHECKED_BAGGAGE: {
    type: CHECKED_BAGGAGE,
    quantity: 3,
  },
  EMPTY: {
    type: CABIN_BAG,
    quantity: 0,
  },
};

describe('Bag component', () => {
  it(`renders ${CABIN_BAG} type`, () => {
    // $FlowExpectedError: We don't need to pass relay specific props for the test to work
    expect(shallow(<Bag data={props.CABIN_BAG} />)).toMatchSnapshot();
  });

  it(`renders ${PERSONAL_ITEM} type`, () => {
    expect(
      // $FlowExpectedError: We don't need to pass relay specific props for the test to work
      shallow(<Bag data={props.PERSONAL_ITEM} />),
    ).toMatchSnapshot();
  });

  it(`renders ${CHECKED_BAGGAGE} type`, () => {
    expect(
      // $FlowExpectedError: We don't need to pass relay specific props for the test to work
      shallow(<Bag data={props.CHECKED_BAGGAGE} />),
    ).toMatchSnapshot();
  });

  it('doesnt render if quantity is 0', () => {
    // $FlowExpectedError: different prop type in the test
    expect(shallow(<Bag data={props.EMPTY} />)).toMatchSnapshot();
  });
});
