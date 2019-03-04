// @flow

import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';

import { Text } from '../Text';

import { Accordion } from '.';

const Header = (expanded: boolean) => (
  <View
    style={{
      backgroundColor: expanded ? 'green' : 'orange',
    }}
  >
    <Text
      style={{
        color: !expanded ? 'green' : 'orange',
      }}
    >
      Accordion Header {expanded ? 'expanded' : 'closed'}
    </Text>
  </View>
);

storiesOf('Accordion', module)
  .addDecorator(withKnobs({ escapeHTML: false }))
  .add('Default', () => (
    <Accordion header={Header}>
      <Text>Hidden content</Text>
    </Accordion>
  ));
