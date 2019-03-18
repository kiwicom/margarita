// @flow

import * as React from 'react';
import { storiesOf } from '@storybook/react-native';
import { text, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import DateInput from './DateInput';

const noop = action('onDateChange');

storiesOf('DateInput', module)
  .addDecorator(withKnobs)
  .add('Playground', () => {
    const label = text('Label', null);
    const placeholder = text('Placeholder', 'Select');

    return (
      <DateInput
        label={label}
        onDateChange={noop}
        date={null}
        defaultDate={new Date()}
        dateFormat={'MM/dd/yyyy'}
        confirmLabel={'OK'}
        cancelLabel={'CANCEL'}
        placeholder={placeholder}
      />
    );
  });
