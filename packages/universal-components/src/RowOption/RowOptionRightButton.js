// @flow

import * as React from 'react';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import { Icon } from '../Icon';
import { Touchable } from '../Touchable';
import { StyleSheet } from '../PlatformStyleSheet';

type Props = {|
  +onAddPress: () => void | Promise<void>,
|};

export default function RowOptionContainer({ onAddPress }: Props) {
  return (
    <Touchable
      onPress={onAddPress}
      style={styles.plusButton}
      testID="add-button"
    >
      <Icon
        name="plus"
        size="small"
        color={defaultTokens.paletteProductNormal}
      />
    </Touchable>
  );
}

const styles = StyleSheet.create({
  plusButton: {
    backgroundColor: defaultTokens.backgroundAlertSuccess,
    borderRadius: parseFloat(defaultTokens.borderRadiusNormal),
    marginEnd: 10,
    padding: 2,
  },
});
