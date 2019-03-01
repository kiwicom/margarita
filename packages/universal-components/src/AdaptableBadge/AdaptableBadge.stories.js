// @flow

import * as React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { select, text, withKnobs } from '@storybook/addon-knobs';

import icons from '../Icon/icons.json';
import { Icon } from '../Icon';

import { AdaptableBadge } from '.';

storiesOf('AdaptableBadge', module)
  .addDecorator(getStory => (
    <View style={{ alignItems: 'stretch' }}>{getStory()}</View>
  ))
  .addDecorator(withKnobs)
  .add('Playground', () => {
    const content = text('Text', 'New');
    const iconName = select(
      'Icon',
      ['undefined', ...Object.keys(icons)],
      'calendar',
    );
    return (
      <AdaptableBadge
        style={{
          backgroundColor: defaultTokens.paletteProductNormal,
          borderRadius: parseFloat(defaultTokens.borderRadiusLarge),
        }}
        textStyle={{
          fontSize: parseFloat(defaultTokens.fontSizeHeadingTitle3),
          fontWeight: 'bold',
          color: defaultTokens.paletteWhite,
          padding: 4,
        }}
        text={content}
        icon={
          iconName != null ? (
            <Icon name={iconName} color={defaultTokens.paletteWhite} />
          ) : null
        }
      />
    );
  })
  .add('Default', () => <AdaptableBadge text="Default" />);
