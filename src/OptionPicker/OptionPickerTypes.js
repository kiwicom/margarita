// @flow

export type OptionType = {
  +id: string,
  +label: string,
  +text: ?string,
  +type: 'localization' | 'destination' | 'airplane' | 'bus' | 'train', // @TODO use IconNameType as enum types
  +subOptions?: Array<OptionType>,
};
