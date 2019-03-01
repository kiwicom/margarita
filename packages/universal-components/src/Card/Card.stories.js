// @flow

import * as React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { withKnobs, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { Text } from '../Text';

import { Card } from '.';

const noop = action('card-press');
storiesOf('Card', module)
  .addDecorator(getStory => getStory())
  .addDecorator(withKnobs)
  .add('Card without onPress', () => (
    <View>
      <Card>
        <Text>Lorem ipsum</Text>
      </Card>
      <Card>
        <Text>Lorem ipsum</Text>
      </Card>
    </View>
  ))
  .add('Card with onPress', () => (
    <View>
      <Card onPress={noop}>
        <Text>Lorem ipsum</Text>
      </Card>
      <Card onPress={noop}>
        <Text>Lorem ipsum</Text>
      </Card>
    </View>
  ))
  .add('Card with delayPressIn', () => (
    <View>
      <Card delayPressIn={1000} onPress={noop}>
        <Text>Lorem ipsum</Text>
      </Card>
      <Card delayPressIn={1000} onPress={noop}>
        <Text>Lorem ipsum</Text>
      </Card>
    </View>
  ))
  .add('Playground', () => {
    const delayPressIn = number('Delay', 1000);

    return (
      <Card onPress={noop} delayPressIn={delayPressIn}>
        <Text>Lorem ipsum</Text>
      </Card>
    );
  });
