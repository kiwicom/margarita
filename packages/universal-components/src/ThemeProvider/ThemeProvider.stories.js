// @flow

import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { select, withKnobs } from '@storybook/addon-knobs';

import { Text } from '../Text';

import { ThemeProvider } from '.';

const style = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  padding: 25,
  backgroundColor: '#f5fcff',
};
const customText = 'Lorem ipsum dolor sit amet';

storiesOf('ThemeProvider', module)
  .addDecorator(withKnobs)
  .addDecorator(getStory => <View style={style}>{getStory()}</View>)
  .add('Playground', () => {
    const fontFamily = select('Font family', ['Roboto', 'Georgia'], 'Roboto');

    return (
      <ThemeProvider tokens={{ fontFamilyNormal: fontFamily }}>
        <Text size="large" type="primary">
          {customText}
        </Text>
      </ThemeProvider>
    );
  });
