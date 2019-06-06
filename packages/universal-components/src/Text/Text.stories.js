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
  .add('Accessibility features', () => (
    <React.Fragment>
      <Text
        accessible={true}
        accessibilityLabel="Header Level 1"
        accessibilityRole="header"
        ariaLevel="1"
      >
        Header Level 1
      </Text>
      <Text
        accessible={true}
        accessibilityLabel="Header Level 2"
        accessibilityRole="header"
        ariaLevel="2"
      >
        Header Level 2
      </Text>
      <Text
        accessible={true}
        accessibilityLabel="Header Level 3"
        accessibilityRole="header"
        ariaLevel="3"
      >
        Header Level 3
      </Text>
      <Text
        accessible={true}
        accessibilityLabel="Header Level 4"
        accessibilityRole="header"
        ariaLevel="4"
      >
        Header Level 4
      </Text>
      <Text
        accessible={true}
        accessibilityLabel="Header Level 5"
        accessibilityRole="header"
        ariaLevel="5"
      >
        Header Level 5
      </Text>
      <Text
        accessible={true}
        accessibilityLabel="Header Level 6"
        accessibilityRole="header"
        ariaLevel="6"
      >
        Header Level 6
      </Text>
      <Text accessible={true} accessibilityLabel="Normal text">
        Normal text
      </Text>
      <Text
        accessible={true}
        accessibilityLabel="Header"
        accessibilityRole="header"
      >
        Header
      </Text>
      <Text
        accessible={true}
        accessibilityLabel="Link"
        accessibilityRole="link"
      >
        Link
      </Text>
      <Text
        accessible={true}
        accessibilityLabel="Button"
        accessibilityRole="button"
      >
        Button
      </Text>
      <Text
        accessible={true}
        accessibilityLabel="None"
        accessibilityRole="none"
      >
        None
      </Text>
      <Text
        accessible={true}
        accessibilityLabel="Selected"
        accessibilityStates={['selected']}
      >
        State Selected
      </Text>
      <Text
        accessible={true}
        accessibilityLabel="Disabled"
        accessibilityStates={['disabled']}
      >
        State Disabled
      </Text>
      <Text
        accessible={true}
        accessibilityLabel="Checked"
        accessibilityStates={['checked']}
      >
        State Checked
      </Text>
      <Text
        accessible={true}
        accessibilityLabel="Busy"
        accessibilityStates={['busy']}
      >
        State Busy
      </Text>
      <Text
        accessible={true}
        accessibilityLabel="Expanded"
        accessibilityStates={['expanded']}
      >
        State Expanded
      </Text>
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
    const accessible = boolean('Accessible', false);
    const accessibilityRole = select(
      'Accessibility Role',
      [null, 'button', 'header', 'label', 'link', 'listitem', 'none'],
      null,
    );
    const ariaLevel = select(
      'Accessibility level',
      [null, '1', '2', '3', '4', '5', '6'],
      null,
    );

    return (
      <Text
        type={type}
        size={size}
        weight={weight}
        align={align}
        uppercase={uppercase}
        italic={italic}
        accessible={accessible}
        accessibilityRole={accessibilityRole}
        ariaLevel={ariaLevel}
      >
        {customText}
      </Text>
    );
  });
