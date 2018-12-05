// @flow

import * as React from 'react';
import { View, Image, PixelRatio } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import StyleSheet from '../PlatformStyleSheet';
import type { Props } from './CarrierLogoTypes';
import { SIZE_OPTIONS, CARRIER_TYPE_OPTIONS, BASE_URL } from './consts';
import { logoSizes } from './styles';

export default function CarrierLogo({
  size = SIZE_OPTIONS.LARGE,
  carriers = [],
}: Props) {
  const carriersLength = carriers.length;
  const urlSize =
    (carriersLength > 1 || size === SIZE_OPTIONS.SMALL ? 16 : 32) *
    (PixelRatio.get() >= 2 ? 2 : 1);

  return (
    <View
      style={[
        styles.wrapper,
        carriersLength > 1 ? sizeStyles[SIZE_OPTIONS.LARGE] : sizeStyles[size],
      ]}
    >
      {carriers.slice(0, 4).map((carrierImage, index) => (
        <Image
          key={carrierImage.code}
          style={[
            styles.logo,
            getLogoSizeStyle(carriersLength, size),
            carriersLength === 2 && index === 1 && styles.logoFlexEnd,
          ]}
          source={{
            uri: `${BASE_URL}/airlines/${urlSize}/${
              carrierImage.code
            }.png?default=${
              carrierImage.type === undefined
                ? CARRIER_TYPE_OPTIONS.AIRLINE
                : carrierImage.type
            }.png`,
          }}
        />
      ))}
    </View>
  );
}

const getLogoSizeStyle = (carriersLength: number, size: string) => {
  if (carriersLength === 1) {
    return sizeStyles[size];
  }
  return carriersLength > 2
    ? sizeStyles['small-padded']
    : sizeStyles[SIZE_OPTIONS.SMALL];
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    alignContent: 'space-between',
    justifyContent: 'space-between',
    backgroundColor: defaultTokens.backgroundCarrierLogo,
  },
  logo: {
    backgroundColor: defaultTokens.backgroundCarrierLogo,
    borderRadius: parseFloat(defaultTokens.borderRadiusNormal),
  },
  logoFlexEnd: {
    alignSelf: 'flex-end',
  },
});

const sizeStyles = StyleSheet.create(logoSizes);
