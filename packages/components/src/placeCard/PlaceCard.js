// @flow

import * as React from 'react';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { View } from 'react-native';
import {
  StyleSheet,
  Touchable,
  AdaptableBadge,
} from '@kiwicom/universal-components';

// import BlackToAlpha from './assets/black-to-alpha-vertical.png'; @TODO
import CityImage from './image/CityImage';
import Placeholder from './Placeholder';
import Text from '../text/Text';

type Props = {|
  +country: string,
  +onPress: () => void,
  +place: string,
  +price: string,
  +disabled?: boolean,
  +imageUrl?: string,
  +isLoading?: boolean,
|};

export default function PlaceCard({
  imageUrl,
  price,
  place,
  country,
  onPress,
  disabled,
  isLoading = false,
}: Props) {
  if (isLoading) {
    return <Placeholder />;
  }

  return (
    <Touchable onPress={onPress} disabled={disabled}>
      <View style={styles.container}>
        <CityImage style={styles.image} url={imageUrl} />
        {/*
          *
          * TODO ADD GRADIENT BACK *

        <Image
          source={BlackToAlpha}
          resizeMode="stretch"
          style={styles.gradient}
        />

        *
        *
        */}
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
    borderRadius: parseFloat(defaultTokens.borderRadiusLarge),
    overflow: 'hidden',
  },
  padding: {
    padding: 10,
  },
  row: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  // * TODO ADD GRADIENT BACK *
  // gradient: {
  //   ...StyleSheet.absoluteFillObject,
  //   width: '100%',
  //   borderRadius: parseFloat(defaultTokens.borderRadiusLarge),
  // },
  badge: {
    backgroundColor: defaultTokens.paletteProductNormal,
    borderRadius: parseFloat(defaultTokens.borderRadiusLarge),
  },
  badgeText: {
    fontSize: parseFloat(defaultTokens.fontSizeHeadingTitle3),
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
    borderRadius: parseFloat(defaultTokens.borderRadiusLarge),
  },
});
