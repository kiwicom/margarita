// @flow

import * as React from 'react';
import { View } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import { Touchable } from '../../Touchable';
import { type StylePropType, StyleSheet } from '../../PlatformStyleSheet';
import { Text } from '../../Text';
import { Icon } from '../../Icon';

type Props = {|
  +onPress: () => void,
  +disabled?: boolean,
  +style: ?StylePropType,
|};

export default class DeleteButton extends React.PureComponent<Props> {
  render() {
    const { onPress, disabled, style } = this.props;
    return (
      <Touchable
        testID="delete-button"
        onPress={onPress}
        disabled={disabled}
        style={style}
      >
        <View style={styles.buttonContainer}>
          <Text style={styles.text}>Clear all</Text>
          <Icon
            name="close"
            color={defaultTokens.colorIconSecondary}
            size="small"
          />
        </View>
      </Touchable>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
  },
  text: {
    color: defaultTokens.colorTextSecondary,
    marginEnd: parseFloat(defaultTokens.spaceXXXSmall),
  },
});
