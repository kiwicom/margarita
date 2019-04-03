// @flow

import * as React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs, select, text } from '@storybook/addon-knobs';

import icons from '../Icon/icons.json';
import NotificationExample from './NotificationExample';

storiesOf('Notification', module)
  .addDecorator(getStory => getStory())
  .addDecorator(withKnobs)
  .add('Playground', () => {
    const notificationType = select(
      'Notification type',
      ['informative', 'important'],
      'informative',
    );
    const notificationStyle = select(
      'Notification style',
      ['error', 'warning', 'success'],
      'warning',
    );
    const message = text('Message', 'Error message');
    const title = text('Title', 'Error');
    const rightIconName = select(
      'Right Icon',
      ['undefined', ...Object.keys(icons)],
      'chevron-right',
    );

    return (
      <NotificationExample
        notificationType={notificationType}
        notificationStyle={notificationStyle}
        title={title}
        message={message}
        rightIconName={rightIconName}
      />
    );
  });
