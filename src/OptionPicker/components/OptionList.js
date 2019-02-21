// @flow

import * as React from 'react';
import { FlatList, Keyboard } from 'react-native';

import Option from './Option';
import { areSelectedOptionsChanged } from '../helpers';
import type { OptionType } from '../OptionPickerTypes';

type Props = {|
  +options: OptionType[],
  +onItemPress: (option: OptionType) => void,
  +onAddPress: (option: OptionType) => void,
|};

export default class OptionList extends React.Component<Props> {
  shouldComponentUpdate(nextProps: Props) {
    const { options } = this.props;

    return areSelectedOptionsChanged(options, nextProps.options);
  }

  renderOption = ({ item }: { item: OptionType }) => {
    const { onItemPress, onAddPress } = this.props;
    return (
      <Option
        option={item}
        key={item.id}
        onItemPress={onItemPress}
        onAddPress={onAddPress}
      />
    );
  };

  keyExtractor = (item: OptionType) => item.id;

  render() {
    const { options } = this.props;

    return (
      <FlatList
        keyboardShouldPersistTaps="always"
        onScroll={Keyboard.dismiss}
        data={options}
        renderItem={this.renderOption}
        keyExtractor={this.keyExtractor}
      />
    );
  }
}
