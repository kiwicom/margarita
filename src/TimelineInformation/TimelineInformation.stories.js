// @flow

import * as React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs, text, select } from '@storybook/addon-knobs';

import {
  TimelineInformation,
  TimelineDate,
  TimelineDifferentAirport,
  TimelineCabinBaggage,
  TimelinePriorityBoarding,
} from '.';
import { Icon } from '../Icon';
import icons from '../Icon/icons.json';

import Text from '../Text';

storiesOf('TimelineInformation', module)
  .addDecorator(withKnobs)
  .add('Playground', () => {
    const iconName = select(
      'Icon',
      ['undefined', ...Object.keys(icons)],
      'calendar'
    );
    const information = text('Information', '24th August');
    const warning = text('Warning', '');
    return (
      <TimelineInformation
        icon={<Icon name={iconName} />}
        information={<Text>{information}</Text>}
        warning={<Text>{warning}</Text>}
      />
    );
  })
  .add('TimelineDate', () => {
    const formattedDate = text('Formatted Date', '24th August');
    return <TimelineDate formattedDate={formattedDate} />;
  })
  .add('TimelineDate -- with warning', () => {
    const formattedDate = text('Formatted Date', '24th August');
    const warning = text('Warning', 'Next day');
    return <TimelineDate formattedDate={formattedDate} warning={warning} />;
  })
  .add('TimelineDifferentAirport', () => {
    const differentAirportWarning = text(
      'Different Airport Warning',
      'Arriving at different airport'
    );
    return (
      <TimelineDifferentAirport
        differentAirportWarning={differentAirportWarning}
      />
    );
  })
  .add('TimelineCabinBaggage', () => {
    const cabinBaggageWarning = text(
      'Cabin Baggage Warning',
      'Cabin baggage only'
    );
    return <TimelineCabinBaggage cabinBaggageWarning={cabinBaggageWarning} />;
  })
  .add('TimelinePriorityBoarding', () => {
    const information = text('Information', 'Priority boarding included');
    return <TimelinePriorityBoarding information={information} />;
  });
