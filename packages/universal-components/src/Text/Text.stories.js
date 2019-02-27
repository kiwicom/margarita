// @flow

import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { boolean, select, withKnobs } from '@storybook/addon-knobs';

import { Text } from '.';

const style = {
  alignSelf: 'stretch',
  flexGrow: 1,
  justifyContent: 'center',
  alignItems: 'center',
  padding: 25,
  backgroundColor: '#f5fcff',
  width: '100%',
};
const customText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis, nulla at luctus ultrices, dolor.';

storiesOf('Text', module)
  .addDecorator(withKnobs)
  .addDecorator(getStory => <View style={style}>{getStory()}</View>)
  .add('Cascading styles', () => (
    <Text style={{ color: 'blue', fontSize: 22 }}>
      Test
      <Text style={{ color: 'red' }}>Nested test</Text>
    </Text>
  ))
  .add('Primary text', () => <Text type="primary">{customText}</Text>)
  .add('Secondary text', () => <Text type="secondary">{customText}</Text>)
  .add('Attention text', () => <Text type="attention">{customText}</Text>)
  .add('Status text', () => (
    <React.Fragment>
      <Text type="info">{customText}</Text>
      <Text type="success">{customText}</Text>
      <Text type="warning">{customText}</Text>
      <Text type="critical">{customText}</Text>
    </React.Fragment>
  ))
  .add('Playground', () => {
    const type = select(
      'Type',
      [
        'primary',
        'secondary',
        'attention',
        'info',
        'success',
        'warning',
        'critical',
        'white',
      ],
      'primary',
    );
    const size = select('Size', ['small', 'normal', 'large'], 'small');
    const weight = select('Weight', ['normal', 'bold'], 'normal');
    const align = select(
      'Align',
      ['left', 'right', 'center', 'justify'],
      'right',
    );
    const uppercase = boolean('Uppercase', false);
    const italic = boolean('Italic', false);

    return (
      <Text
        type={type}
        size={size}
        weight={weight}
        align={align}
        uppercase={uppercase}
        italic={italic}
      >
        {customText}
      </Text>
    );
  });
