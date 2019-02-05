// @flow

import { SIZE_OPTIONS, CARRIER_TYPE_OPTIONS, BASE_URL } from './consts';
import type { CarrierData } from './CarrierLogoTypes';

export const getCarrierImageUri = (
  carriersLength: number,
  size: string,
  pixelRatio: number,
  carrierData: CarrierData,
): string => {
  let urlSize = carriersLength > 1 || size === SIZE_OPTIONS.SMALL ? 16 : 32;
  if (pixelRatio > 2.25) {
    urlSize *= 4;
  } else if (pixelRatio > 1.25) {
    urlSize *= 2;
  }

  return `${BASE_URL}/airlines/${urlSize}/${carrierData.code}.png?default=${
    carrierData.type === undefined
      ? CARRIER_TYPE_OPTIONS.AIRLINE
      : carrierData.type
  }.png`;
};

export const parseCarriers = (carriers: CarrierData[]): CarrierData[] => {
  const codeMap = carriers.map(carrierData => carrierData.code);
  return carriers
    .filter((carrierData, index) => codeMap.indexOf(carrierData.code) === index)
    .slice(0, 4);
};
