// @flow

export const BAG_TYPE = {
  PERSONAL_ITEM: 'Personal item',
  CABIN_BAG: 'Cabin bag',
  CHECKED_BAG: 'Checked bag',
};

export type BagType = $Values<typeof BAG_TYPE>;
