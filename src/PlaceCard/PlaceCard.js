// @flow

import * as React from 'react';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { View, Image } from 'react-native';

import Text from '../Text';
import Touchable from '../Button/Touchable';
import AdaptableBadge from './AdaptableBadge';
import BlackToAlpha from './assets/black-to-alpha-vertical.png';

import CityImage from './CityImage';
import StyleSheet from '../PlatformStyleSheet';

type Props = {|
  +imageUrl: string,
  +price: string,
  +place: string,
  +country: string,
  +onPress: () => void,
  +disabled?: boolean,
|};

export default function PlaceCard({
  imageUrl,
  price,
  place,
  country,
  onPress,
  disabled,
}: Props) {
  return (
    <Touchable onPress={onPress} disabled={disabled}>
      <View style={styles.container}>
        <CityImage style={styles.image} url={imageUrl} />
        <Image
          source={BlackToAlpha}
          resizeMode="stretch"
          style={{
            ...StyleSheet.absoluteFillObject,
            width: '100%',
            borderRadius: 4,
          }}
        />
        <View style={[styles.row, styles.padding]}>
          <AdaptableBadge
            style={styles.badge}
            textStyle={styles.badgeText}
            text={price}
          />
        </View>
        <View style={[styles.bottomContainer, styles.padding]}>
          <Text
            weight="bold"
            type="white"
            size="large"
            style={styles.placeText}
          >
            {place}
          </Text>
          <Text type="white" size="large">
            {country}
          </Text>
        </View>
      </View>
    </Touchable>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 152,
    width: '100%',
    justifyContent: 'space-between',
    borderRadius: 4,
    overflow: 'hidden',
  },
  padding: {
    padding: 10,
  },
  row: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  badge: {
    backgroundColor: defaultTokens.paletteProductNormal,
    borderRadius: 4,
  },
  badgeText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: defaultTokens.paletteWhite,
    padding: 2.5,
  },
  placeText: {
    marginBottom: 4,
  },
  bottomContainer: {
    justifyContent: 'flex-end',
  },
  image: {
    borderRadius: 4,
  },
});
