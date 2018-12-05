// @flow

import * as React from 'react';
import { Image } from 'react-native';

import { render } from 'react-native-testing-library';
import snapshotDiff from 'snapshot-diff';
import { CarrierLogo } from '..';

describe('CarrierLogo', () => {
  const carriers = [
    { code: 'FR', name: 'Ryanair' },
    { code: 'TO', name: 'Transavia France' },
    { code: 'VY', name: 'Vueling' },
    { code: 'OK', name: 'Czech Airlines' },
  ];
  const { getAllByType } = render(<CarrierLogo carriers={carriers} />);

  it('should contain correct number of images', () => {
    expect(getAllByType(Image)).toHaveLength(4);
  });

  it('should match snapshot diff', () => {
    const base = <CarrierLogo carriers={[carriers[0]]} />;
    const extend = <CarrierLogo carriers={carriers} />;
    expect(snapshotDiff(base, extend)).toMatchSnapshot();
  });
});
