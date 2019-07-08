// @flow

import * as React from 'react';

import { RowOption } from '../../RowOption';
import type { OptionTypeInterface } from '../OptionPickerTypes';

type Props = {|
  +option: OptionTypeInterface,
  +onItemPress: (option: OptionTypeInterface) => void | Promise<void>,
  +onAddPress?: (option: OptionTypeInterface) => void | Promise<void>,
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
        onAddPress={
          onAddPress ? createPressHandler(onAddPress, option) : undefined
        }
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
  options: Array<OptionTypeInterface>,
  onAddPress?: (option: OptionTypeInterface) => void | Promise<void>,
  onItemPress: (option: OptionTypeInterface) => void | Promise<void>,
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
        onAddPress={
          onAddPress ? createPressHandler(onAddPress, option) : undefined
        }
        border={isLast ? 'long' : 'short'}
      />
    );
  });
}
