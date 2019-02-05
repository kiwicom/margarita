// @flow

import * as React from 'react';
import { ScrollView } from 'react-native';

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

  render() {
    const { options, onItemPress, onAddPress } = this.props;

    return (
      <ScrollView>
        {options.map(option => (
          <Option
            option={option}
            key={option.id}
            onItemPress={onItemPress}
            onAddPress={onAddPress}
          />
        ))}
      </ScrollView>
    );
  }
}
