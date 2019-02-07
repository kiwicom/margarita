/**
 *
 * KEEPING THIS FILE FOR POSTERITY FOR NOW
 * NEED TO DECIDE IF WE WOULD LIKE A STORYBOOK-like ENVIRONMENT FOR THIS INTERNAL COMPONENT LIBRARY TOO.
 *
 */

// @flow

import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs, select } from '@storybook/addon-knobs';

import SearchParamsSummary from './SearchParamsSummary';

storiesOf('SearchParamsSummary', module)
  .addDecorator(withKnobs)
  .add('Playground', () => {
    const tripType = select(
      'Trip Type',
      ['OneWay', 'MultiCity', 'Return'],
      'MultiCity',
    );

    return (
      <SearchParamsSummary
        tripType={tripType}
        departure={{ city: 'Wroclaw', localizedDate: 'Oct 10' }}
        arrival={{ city: 'Prague', localizedDate: 'Dec 12' }}
      />
    );
  });
