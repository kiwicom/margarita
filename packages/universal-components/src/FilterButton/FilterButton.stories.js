// @flow

import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { Icon } from '../Icon';
import iconsMap from '../Icon/icons.json';

import { FilterButton } from '.';

const noop = action('button-press');

storiesOf('FilterButton', module)
  .addDecorator(withKnobs)
  .add('Playground', () => {
    const isActive = boolean('isActive', false);
    const iconName = select('Icon', Object.keys(iconsMap), 'filters');
    const title = text('Title', 'Filters');

    return (
      <View>
        <FilterButton
          onPress={noop}
          isActive={isActive}
          icon={<Icon name={iconName} />}
          title={title}
        />
      </View>
    );
  })
  .add('default', () => (
    <View style={{ flexDirection: 'row' }}>
      <FilterButton onPress={noop} title="Sort" isActive={false} />
      <FilterButton onPress={noop} title="Transport" isActive />
      <FilterButton
        onPress={noop}
        title="Inactive"
        isActive={false}
        icon={<Icon name="close" />}
      />
      <FilterButton
        onPress={noop}
        title="Active"
        isActive
        icon={<Icon name="check" />}
      />
    </View>
  ));
