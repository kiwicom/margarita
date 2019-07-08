// @flow

import * as React from 'react';
import { View } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import type { OptionTypeInterface } from './OptionPickerTypes';
import { StyleSheet } from '../PlatformStyleSheet';
import { TagsInput } from '../TagsInput';
import OptionList from './components/OptionList';
import Loader from '../Loader/Loader';

type Props = {|
  +onChangeText: string => void,
  +onClearPress: () => void,
  +onPressAdd?: OptionTypeInterface => void | Promise<void>,
  +onPressItem: OptionTypeInterface => void | Promise<void>,
  +text?: string,
  +label?: string,
  +onKeyPress?: Event => void,
  +options?: Array<OptionTypeInterface>,
  +placeholder?: string,
  +selected?: ?Array<OptionTypeInterface>,
  +isLoading?: boolean,
  +onDeletePress?: number => void,
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
    isLoading,
    onDeletePress,
  } = props;

  const tags = selected ? selected.map(option => option.label) : [];

  return (
    <View style={styles.container}>
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
          onDeletePress={onDeletePress}
        />
      </View>
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <Loader size="large" />
        </View>
      ) : options ? (
        <View style={styles.optionsContainer}>
          <OptionList
            onItemPress={onPressItem}
            onAddPress={onPressAdd}
            options={options}
          />
        </View>
      ) : null}
    </View>
  );
}

const commonStyles = {
  borderBottomWidth: 1,
  borderBottomColor: defaultTokens.borderColorInput,
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  loadingContainer: {
    margin: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionsContainer: { flex: 1 },
  inputWrapper: {
    ios: {
      ...commonStyles,
    },
    android: {
      ...commonStyles,
    },
  },
});
