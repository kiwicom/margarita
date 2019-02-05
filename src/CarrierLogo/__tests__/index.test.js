// @flow

import * as React from 'react';
import { Image } from 'react-native';
import { render } from 'react-native-testing-library';
import snapshotDiff from 'snapshot-diff';

import { CarrierLogo } from '..';

import { getCarrierImageUri, parseCarriers } from '../CarrierLogoHelpers';
import { SIZE_OPTIONS } from '../consts';

describe('CarrierLogo', () => {
  const carriers = [
    { code: 'FR', name: 'Ryanair' },
    { code: 'TO', name: 'Transavia France' },
    { code: 'VY', name: 'Vueling' },
    { code: 'OK', name: 'Czech Airlines' },
  ];

  it('should contain correct number of images', () => {
    const { getAllByType } = render(<CarrierLogo carriers={carriers} />);
    expect(getAllByType(Image)).toHaveLength(4);
  });

  it('should contain correct number of images with correct size when duplicate carriers data are supplied', () => {
    const { getAllByType, getByType } = render(
      <CarrierLogo carriers={[carriers[0], carriers[0]]} />,
    );
    expect(getAllByType(Image)).toHaveLength(1);
    expect(getByType(Image).props.source.uri).toMatch(/64/);
  });

  it('should match snapshot diff', () => {
    const base = <CarrierLogo carriers={[carriers[0]]} />;
    const extend = <CarrierLogo carriers={carriers} />;
    expect(snapshotDiff(base, extend)).toMatchSnapshot();
  });

  test('getCarrierImageUri > should return correct path', () => {
    const imageUri = getCarrierImageUri(1, SIZE_OPTIONS.LARGE, 3, carriers[1]);
    expect(imageUri).toMatchSnapshot();
  });

  test('getCarrierImageUri > should have high resolution', () => {
    expect(getCarrierImageUri(1, SIZE_OPTIONS.LARGE, 3, carriers[0])).toMatch(
      /128/,
    );
  });

  test('getCarrierImageUri > should return small size version in case of multiple carriers', () => {
    expect(getCarrierImageUri(4, SIZE_OPTIONS.LARGE, 1, carriers[0])).toMatch(
      /16/,
    );
  });

  test('parseCarriers > should return correct number of carriers', () => {
    expect(parseCarriers(carriers)).toHaveLength(4);
  });

  test('parseCarriers > should remove duplicate carriers', () => {
    const duplicateCarriers = [
      { code: 'FR', name: 'Ryanair' },
      { code: 'FR', name: 'Ryanair' },
      { code: 'TO', name: 'Transavia France' },
      { code: 'TO', name: 'Transavia France' },
    ];
    expect(parseCarriers(duplicateCarriers)).toHaveLength(2);
  });

  test('parseCarriers > should return max 4 carriers', () => {
    const longCarriers = [
      { code: 'FR', name: 'Ryanair' },
      { code: 'TO', name: 'Transavia France' },
      { code: 'VY', name: 'Vueling' },
      { code: 'OK', name: 'Czech Airlines' },
      { code: 'DI', name: 'Something' },
    ];
    expect(parseCarriers(longCarriers)).toHaveLength(4);
  });
});
