// @flow

export interface OptionTypeInterface {
  +id: string | number;
  +label: string;
  +text?: string;
  +type: 'localization' | 'destination' | 'airplane' | 'bus' | 'train'; // @TODO use IconNameType as enum types
  +subOptions?: Array<OptionTypeInterface>;
}
