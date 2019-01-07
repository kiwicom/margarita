// @flow strict

import * as React from 'react';
import { StyleSheet, Text, Icon } from '@kiwicom/universal-components';
import { View } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import { TouchableWithoutFeedback } from '../TouchableWithoutFeedback';

type Props = {|
  +onPress: () => void,
  +icon: React.Element<typeof Icon>,
  +label: string,
  +value: string,
  +placeholder?: string,
|};

export default function TripInput(props: Props) {
  const icon = React.cloneElement(props.icon, {
    color: defaultTokens.colorIconSecondary,
  });
  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <View style={styles.container}>
        <View style={styles.icon}>{icon}</View>
        <Text>{`${props.label}: `}</Text>
        {props.value !== '' && <Text type="attention">{props.value}</Text>}
        {props.value === '' && props.placeholder != null && (
          <Text>{props.placeholder}</Text>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: defaultTokens.backgroundButtonSecondary,
    padding: 11,
    borderRadius: parseInt(defaultTokens.borderRadiusLarge, 10),
    marginBottom: 8,
    alignItems: 'center',
  },
  icon: {
    marginEnd: 10,
  },
});
