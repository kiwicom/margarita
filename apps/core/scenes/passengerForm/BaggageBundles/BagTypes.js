// @flow

export const bags = {
  PERSONAL_ITEM: 'Personal item',
  CABIN_BAG: 'Cabin bag',
  CHECKED_BAG: 'Checked bag',
};

export type BagTitleType = $Values<typeof bags>;
