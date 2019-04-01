// @flow

import * as React from 'react';
import { View } from 'react-native';
import {
  StyleSheet,
  TouchableWithoutFeedback,
} from '@kiwicom/universal-components';
import { Text } from '@kiwicom/margarita-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

type Props = {|
  +text: string,
|};

const handleOnPress = () => {
  // @TODO
};

export default function HeaderBaggageBundle({ text }: Props) {
  return (
    <View style={styles.header}>
      <Text uppercase type="primary" weight="bold">
        {text}
      </Text>
      <TouchableWithoutFeedback onPress={handleOnPress}>
        <Text style={styles.textColor}>What is it?</Text>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: parseFloat(defaultTokens.spaceSmall),
    paddingTop: parseFloat(defaultTokens.spaceSmall),
  },
  textColor: {
    color: defaultTokens.colorTextButtonLinkPrimary,
  },
});
