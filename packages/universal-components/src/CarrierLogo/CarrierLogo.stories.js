// @flow

import * as React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs, select, object } from '@storybook/addon-knobs';

import { SIZE_OPTIONS, CARRIER_TYPE_OPTIONS } from './consts';

import { CarrierLogo } from '.';

const carriersLabel = 'Carriers';

storiesOf('CarrierLogo', module)
  .addDecorator(withKnobs)
  .add('One carrier', () => {
    const size = select('Size', Object.values(SIZE_OPTIONS), 'large');
    const carrier = [{ code: 'FR', name: 'Ryanair' }];
    const carriersObject = object(carriersLabel, carrier);

    return <CarrierLogo size={size} carriers={carriersObject} />;
  })
  .add('Two carriers', () => {
    const carrier = [
      { code: 'FR', name: 'Ryanair' },
      { code: 'TO', name: 'Transavia France' },
    ];
    const carriersObject = object(carriersLabel, carrier);

    return <CarrierLogo carriers={carriersObject} />;
  })
  .add('Four carriers', () => {
    const carrier = [
      { code: 'FR', name: 'Ryanair' },
      { code: 'TO', name: 'Transavia France' },
      { code: 'VY', name: 'Vueling' },
      { code: 'OK', name: 'Czech Airlines' },
    ];
    const carriersObject = object(carriersLabel, carrier);

    return <CarrierLogo carriers={carriersObject} />;
  })
  .add('Non-existing carriers', () => {
    const carrier = [
      { code: 'LOL', name: 'Lorem ipsum', type: 'airline' },
      { code: 'KEK', name: 'Lorem ipsum', type: 'bus' },
      { code: 'BUR', name: 'Lorem ipsum', type: 'train' },
    ];
    const carriersObject = object(carriersLabel, carrier);

    return <CarrierLogo carriers={carriersObject} />;
  })
  .add('Non-existing carrier', () => {
    const size = select('Size', Object.values(SIZE_OPTIONS), 'large');
    const carrierType = select(
      'Type',
      Object.values(CARRIER_TYPE_OPTIONS),
      'airline',
    );
    const carrier = [{ code: 'LAL', name: 'Lorem ipsum', type: carrierType }];
    const carriersObject = object(carriersLabel, carrier);

    return <CarrierLogo size={size} carriers={carriersObject} />;
  });
