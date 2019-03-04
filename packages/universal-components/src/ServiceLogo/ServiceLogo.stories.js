// @flow

import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { boolean, select, withKnobs } from '@storybook/addon-knobs';

import { ServiceLogo } from '.';

storiesOf('ServiceLogo', module)
  .addDecorator(withKnobs)
  .add('Playground', () => {
    const name = select(
      'Name',
      [
        'AirHelp',
        'Amex',
        'AxaAssistance',
        'DinersClub',
        'JCB',
        'Maestro',
        'MasterCard',
        'MIR',
        'NewYorkTimes',
        'NortonSecured',
        'TravelPulse',
        'Visa',
        'VisaHQ',
        'Zooz',
      ],
      'Visa',
    );

    const size = select('Size', ['small', 'medium', 'large'], 'large');

    const grayScale = boolean('grayScale', false);

    return <ServiceLogo name={name} size={size} grayScale={grayScale} />;
  })
  .add('Default', () => <ServiceLogo name="Amex" size="large" />)
  .add('Gray scale', () => <ServiceLogo name="VisaHQ" grayScale />);
