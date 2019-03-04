// @flow

import * as React from 'react';
import { Platform } from 'react-native';
import { render } from 'react-native-testing-library';
import snapshotDiff from 'snapshot-diff';

import { Loader, PageLoader } from '../index';

jest.mock('Platform', () => ({
  select: jest.fn(),
}));

describe('Loader', () => {
  it('should match snapshot diff between small and large loader', () => {
    const small = render(<Loader size="small" />);
    const large = render(<Loader size="large" />);

    expect(snapshotDiff(small, large, { contextLines: 1 })).toMatchSnapshot();
  });
});

describe('Page Loader', () => {
  it('should have large page loader for Android', () => {
    // $FlowFixMe
    Platform.select.mockImplementationOnce(obj => obj.android);
    const { getByType } = render(<PageLoader />);

    expect(getByType(Loader).props.size).toBe('large');
  });

  it('should have small page loader for iOS', () => {
    // $FlowFixMe
    Platform.select.mockImplementationOnce(obj => obj.ios);
    const { getByType } = render(<PageLoader />);

    expect(getByType(Loader).props.size).toBe('small');
  });
});
