// @flow

import * as React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import {
  boolean,
  select,
  text,
  number,
  withKnobs,
} from '@storybook/addon-knobs';

import { Text } from '../Text';

import { Tooltip, TooltipBubble } from '.';

const arrowVerticalPositionOptions = {
  'flex-start': 'flex-start',
  'flex-end': 'flex-end',
};
const arrowHorizontalPositionOptions = {
  ...arrowVerticalPositionOptions,
  center: 'center',
};

storiesOf('Tooltip', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const isActive = boolean('Active', true);
    const arrowHorizontalPosition = select(
      'arrowHorizontalPosition',
      arrowHorizontalPositionOptions,
      'center',
    );

    return (
      <View>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id
          egestas enim. Ut vel ex interdum, ultrices nunc sed, fringilla nisl.
          Aenean accumsan blandit enim, sit amet porta justo bibendum quis.
          Donec convallis a turpis et lobortis. Vivamus gravida interdum purus a
          varius. Vestibulum ante ipsum primis in faucibus orci luctus et
          ultrices posuere cubilia Curae; Vestibulum posuere arcu auctor euismod
          vehicula.
        </Text>

        <Tooltip
          verticalShift={number('verticalShift', 0)}
          isActive={isActive}
          arrowHorizontalPosition={arrowHorizontalPosition}
          text={text('text', 'Hello Storybook')}
        >
          <Text weight="bold">
            Hello! This tooltip is very clever. It should automatically
            determine if arrow should be on top or bottom of tooltip bubble.
          </Text>
        </Tooltip>
      </View>
    );
  })
  .add('Playground', () => {
    const isActive = boolean('isActive', true);
    return (
      <View>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id
          egestas enim. Ut vel ex interdum, ultrices nunc sed, fringilla nisl.
          Aenean accumsan blandit enim, sit amet porta justo bibendum quis.
          Donec convallis a turpis et lobortis. Vivamus gravida interdum purus a
          varius. Vestibulum ante ipsum primis in faucibus orci luctus et
          ultrices posuere cubilia Curae; Vestibulum posuere arcu auctor euismod
          vehicula.
        </Text>

        <Tooltip
          isActive={isActive}
          text="Donec lectus magna, faucibus ac turpis sed, mollis tempor nisl. Nullam a quam eros. Mauris condimentum dignissim fringilla. Pellentesque vehicuvarius elit eget ornare. Vestibulum mollis ullamcorper lacinia. Sed consectetur commodo quam."
        >
          <Text weight="bold">
            Hello! This tooltip is very clever. It should automatically
            determine if arrow should be on top or bottom of the bubble.
          </Text>
        </Tooltip>
        <Text>
          Maecenas lobortis nisi eget neque volutpat, vitae sagittis est
          consectetur. Morbi molestie condimentum lacinia. Proin suscipit urna
          lorem, in vulputate nibh rutrum quis. Fusce urna tellus, laoreet ac
          augue eget, auctor feugiat sem. Suspendisse vitae vehicula dolor.
          Vivamus placerat sodales leo non vehicula. Aliquam quis felis in leo
          mollis egestas. Proin cursus ultricies eros, eget mollis mauris
          tristique ut. In sodales dui ornare sem vulputate, at scelerisque
          tortor eleifend. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus. Proin mauris eros, pharetra
          quis ipsum id, gravida fringilla diam. Donec nec libero quis nibh
          aliquam gravida. Sed vitae massa scelerisque, varius nisi nec, feugiat
          nisl. Nullam accumsan pellentesque facilisis. Sed efficitur tellus id
          vulputate blandit. Sed cursus leo nec ligula scelerisque convallis.
          Aliquam vitae vehicula nunc. Ut molestie vitae elit non eleifend. In
          ut sollicitudin dui, non pretium turpis. Mauris elementum magna
          finibus cursus ullamcorper.
        </Text>

        <Tooltip
          isActive={isActive}
          arrowHorizontalPosition="flex-start"
          text="Hello Kiwi.com!"
        >
          <Text weight="bold">Say hello once again</Text>
        </Tooltip>
      </View>
    );
  })
  .add('TooltipBubble', () => {
    const arrowHorizontalPosition = select(
      'arrowHorizontalPosition',
      arrowHorizontalPositionOptions,
      'center',
    );
    const arrowVerticalPosition = select(
      'arrowVerticalPosition',
      arrowVerticalPositionOptions,
      'flex-start',
    );
    return (
      <TooltipBubble
        text={text('text', 'Hello Storybook')}
        arrowVerticalPosition={arrowVerticalPosition}
        arrowHorizontalPosition={arrowHorizontalPosition}
      />
    );
  });
