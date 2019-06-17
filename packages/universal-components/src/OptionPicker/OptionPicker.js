// @flow

import * as React from 'react';
import { View } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import type { OptionTypeInterface } from './OptionPickerTypes';
import { StyleSheet } from '../PlatformStyleSheet';
import { TagsInput } from '../TagsInput';
import OptionList from './components/OptionList';

type Props = {|
  +onChangeText: string => void,
  +onClearPress: () => void,
  +onPressAdd: OptionTypeInterface => void | Promise<void>,
  +onPressItem: OptionTypeInterface => void | Promise<void>,
  +text?: string,
  +label?: string,
  +onKeyPress?: Event => void,
  +options?: Array<OptionTypeInterface>,
  +placeholder?: string,
  +selected?: ?Array<OptionTypeInterface>,
|};

type Event = { nativeEvent: { key: string } };

export default function OptionPicker(props: Props) {
  const {
    options,
    label,
    placeholder,
    text,
    selected,
    onClearPress,
    onChangeText,
    onKeyPress,
    onPressItem,
    onPressAdd,
  } = props;

  const tags = selected ? selected.map(option => option.label) : [];

  return (
    <View>
      <View style={styles.inputWrapper}>
        <TagsInput
          autoFocus
          tags={tags}
          onClearPress={onClearPress}
          value={text}
          onChangeText={onChangeText}
          onKeyPress={onKeyPress}
          label={label}
          placeholder={placeholder}
        />
      </View>
      {options && (
        <OptionList
          onItemPress={onPressItem}
          onAddPress={onPressAdd}
          options={options}
        />
      )}
    </View>
  );
}

const commonStyles = {
  borderBottomWidth: 1,
  borderBottomColor: defaultTokens.borderColorInput,
};

const styles = StyleSheet.create({
  inputWrapper: {
    padding: 5,
    ios: {
      ...commonStyles,
    },
    android: {
      ...commonStyles,
    },
  },
});
