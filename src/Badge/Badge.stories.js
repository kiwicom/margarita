// @flow

import * as React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { select, text, withKnobs } from '@storybook/addon-knobs';

import { Badge } from '.';

const badgeTypes = [
  'primary',
  'neutral',
  'critical',
  'success',
  'warning',
  'info',
  'dark',
  'white',
];

storiesOf('Badge', module)
  .addDecorator(getStory => getStory())
  .addDecorator(withKnobs)
  .add('Regular Badge', () => (
    <View style={{ alignItems: 'stretch' }}>
      {badgeTypes.map(badgeType => (
        <Badge key={badgeType} type={badgeType}>
          {badgeType}
        </Badge>
      ))}
    </View>
  ))
  .add('Playground', () => {
    const type = select('Type', badgeTypes, 'primary');

    const children = text('Content', 'New');

    return (
      <React.Fragment>
        <Badge type={type}>{children}</Badge>
      </React.Fragment>
    );
  });
