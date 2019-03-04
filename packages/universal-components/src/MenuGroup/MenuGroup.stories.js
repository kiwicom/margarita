// @flow

import * as React from 'react';
import { storiesOf, onPress } from '@storybook/react-native';
import { View } from 'react-native';

import { Icon } from '../Icon';
import { Text } from '../Text';

import { MenuGroup, MenuItem } from '.';

storiesOf('Menu Group', module)
  .addDecorator(getStory => getStory())
  .add('Menu Group with title', () => (
    <MenuGroup title="My menu">
      <MenuItem title="Menu item 1" onPress={onPress} />
      <MenuItem title="Menu item 2" onPress={onPress} />
    </MenuGroup>
  ))
  .add('Menu Group', () => (
    <MenuGroup>
      <MenuItem title="Menu item 1" onPress={onPress} />
      <MenuItem title="Menu item 2" onPress={onPress} />
    </MenuGroup>
  ))
  .add('Menu Group with title and icons', () => (
    <MenuGroup title="My menu">
      <MenuItem
        icon={<Icon name="clock" color="pink" />}
        title="Menu item 1"
        onPress={onPress}
      />
      <MenuItem
        icon={<Icon name="clock" />}
        title="Menu item 2"
        onPress={onPress}
      />
      <MenuItem
        icon={<Icon name="clock" />}
        title="Menu item 3"
        onPress={onPress}
      />
    </MenuGroup>
  ))
  .add('Menu Group with icon and subtitle', () => (
    <MenuGroup>
      <MenuItem
        icon={<Icon name="clock" />}
        title="Menu item 1"
        subTitle="first item"
        onPress={onPress}
      />
      <MenuItem
        icon={<Icon name="clock" />}
        title="Menu item 2"
        subTitle="second item"
        onPress={onPress}
      />
    </MenuGroup>
  ))
  .add('Menu Group with label', () => (
    <MenuGroup>
      <MenuItem label="Email" title="lol@lol.com" onPress={onPress} />
      <MenuItem label="Phone" title="555-5432" onPress={onPress} />
    </MenuGroup>
  ))
  .add('Menu Group with footer', () => {
    const footer = (
      <View style={{ padding: 10 }}>
        <Text>this is a footer</Text>
      </View>
    );
    return (
      <MenuGroup footer={footer}>
        <MenuItem label="Email" title="lol@lol.com" onPress={onPress} />
        <MenuItem label="Phone" title="555-5432" onPress={onPress} />
      </MenuGroup>
    );
  });
