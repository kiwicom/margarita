// @flow

import * as React from 'react';
import { RowOption } from '../../RowOption';
import type { OptionType } from '../OptionPickerTypes';

type Props = {|
  +option: OptionType,
  +onItemPress: (option: OptionType) => void,
  +onAddPress: (option: OptionType) => void,
|};

// todo add to helpers
function createPressHandler(func, option) {
  return () => func(option);
}

export default function Option({ option, onItemPress, onAddPress }: Props) {
  const { subOptions } = option;

  const borderType = subOptions && subOptions.length > 0 ? 'shaped' : 'long';
  return (
    <>
      <RowOption
        key={option.id}
        type={option.type}
        header={option.label}
        subheader={option.text}
        onItemPress={createPressHandler(onItemPress, option)}
        onAddPress={createPressHandler(onAddPress, option)}
        border={borderType}
      />
      {subOptions && (
        <RenderSubOptions
          onItemPress={onItemPress}
          onAddPress={onAddPress}
          options={subOptions}
        />
      )}
    </>
  );
}

function RenderSubOptions({
  options,
  onAddPress,
  onItemPress,
}: {
  options: Array<OptionType>,
  onAddPress: (option: OptionType) => void,
  onItemPress: (option: OptionType) => void,
}) {
  return options.map((option, index) => {
    const isLast = options.length - 1 === index;

    return (
      <RowOption
        key={option.id}
        type={option.type}
        header={option.label}
        subheader={option.text}
        onItemPress={createPressHandler(onItemPress, option)}
        onAddPress={createPressHandler(onAddPress, option)}
        border={isLast ? 'long' : 'short'}
      />
    );
  });
}
