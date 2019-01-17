// @flow

import * as React from 'react';
import { View } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import type { OptionType } from './OptionPickerTypes';
import { StyleSheet } from '../PlatformStyleSheet';
import { TagsInput } from '../TagsInput';
import OptionList from './components/OptionList';
import { getOptionsIds, areSelectedOptionsChanged } from './helpers';

type Props = {|
  +label?: string,
  +placeholder?: string,
  +onChangeText: (value: string) => void,
  +options: OptionType[],
  +onPressAdd?: () => void,
  +onPressItem?: () => void,
  +onSelectedChange?: (option: Array<OptionType>) => void,
|};

type State = {|
  selected: Array<OptionType>,
  value: string,
|};

type Event = { nativeEvent: { key: string } };

const filterSubOptionsByIds = (option, ids) => {
  const { subOptions } = option;
  // check if the subOptions exists
  if (!subOptions) return option;

  // filter out selected options
  const filteredOptions = subOptions.filter(({ id }) => !ids.includes(id));
  return Object.assign({}, option, { subOptions: filteredOptions });
};

export const filterOptions = (
  options: OptionType[],
  selected: OptionType[]
) => {
  // get selectedIds
  const selectedIDs = getOptionsIds(selected);

  return options.reduce((acc = [], option) => {
    // check if the option is selected, if yes filter it out
    if (selectedIDs.includes(option.id)) {
      return acc;
    }
    return [...acc, filterSubOptionsByIds(option, selectedIDs)];
  }, []);
};

export default class OptionPicker extends React.Component<Props, State> {
  state = {
    selected: [],
    value: '',
  };

  componentDidUpdate(prevProps: Props, prevState: State) {
    const { onSelectedChange } = this.props;
    const { selected } = this.state;

    if (areSelectedOptionsChanged(selected, prevState.selected)) {
      onSelectedChange?.(selected);
    }
  }

  handlePressAdd = (option: OptionType) => {
    const { onPressAdd } = this.props;
    this.setState(
      ({ selected }) => ({ selected: [...selected, option] }),
      onPressAdd
    );
  };

  handlePressItem = (option: OptionType) => {
    const { onPressItem } = this.props;
    this.setState({ selected: [option] }, onPressItem);
  };

  handleClear = () => {
    this.setState({ value: '', selected: [] });
  };

  handleChangeText = (value: string) => {
    const { onChangeText } = this.props;
    onChangeText(value);
    this.setState({
      value,
    });
  };

  handleBackspacePress = (e: Event) => {
    const { key } = e.nativeEvent;
    const { value } = this.state;

    if (!value && key === 'Backspace') {
      this.removeLastSelectedOption();
    }
  };

  removeLastSelectedOption = () => {
    const { state } = this;

    // you can remove selected place only if at least one exists
    if (state.selected.length > 0) {
      this.setState(({ selected }) => ({
        selected: selected.slice(0, -1),
      }));
    }
  };

  render() {
    const { selected, value } = this.state;
    const { options, label, placeholder } = this.props;
    const tags = selected.map(option => option.label);

    return (
      <View>
        <View style={styles.inputWrapper}>
          <TagsInput
            autofocus
            tags={tags}
            onClearPress={this.handleClear}
            value={value}
            onChangeText={this.handleChangeText}
            onKeyPress={this.handleBackspacePress}
            label={label}
            placeholder={placeholder}
          />
        </View>
        {options && (
          <OptionList
            onItemPress={this.handlePressItem}
            onAddPress={this.handlePressAdd}
            options={filterOptions(options, selected)}
          />
        )}
      </View>
    );
  }
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
