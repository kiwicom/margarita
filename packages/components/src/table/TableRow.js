// @flow

import * as React from 'react';
import { View } from 'react-native';
import {
  StyleSheet,
  type StylePropType,
  ExtendedTouchable,
} from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { omit } from 'ramda';

import Text from '../text/Text';

type RenderRowProps = {|
  +highlightedLabel?: boolean,
  +highlightedValue?: boolean,
  +label: string,
  +renderLabel?: React.Node,
  +renderValue?: React.Node,
  +style?: StylePropType,
  +value?: string,
|};
type Props = {|
  ...RenderRowProps,
  +onPress?: () => void,
|};

const RenderRow = ({
  style,
  value,
  label,
  renderLabel,
  renderValue,
  highlightedLabel,
  highlightedValue,
}: RenderRowProps) => (
  <View style={[styles.container, style]}>
    {renderLabel ? (
      renderLabel
    ) : (
      <Text style={styles.text} weight={highlightedLabel ? 'bold' : undefined}>
        {label}
      </Text>
    )}
    {renderValue
      ? renderValue
      : !!value && (
          <Text
            style={[styles.text, styles.value]}
            weight={highlightedValue ? 'bold' : undefined}
          >
            {value}
          </Text>
        )}
  </View>
);

const TableRow = (props: Props) => {
  const renderRowProps = { ...omit(['onPress'], props) };
  return props.onPress ? (
    <ExtendedTouchable onPress={props.onPress}>
      <RenderRow {...renderRowProps} />
    </ExtendedTouchable>
  ) : (
    <RenderRow {...renderRowProps} />
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: parseFloat(defaultTokens.spaceXXSmall),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: defaultTokens.colorTextSecondary,
    fontSize: parseFloat(defaultTokens.fontSizeTextNormal),
  },
  value: {
    color: defaultTokens.colorTextAttention,
  },
});
export default TableRow;
