// @flow

import * as React from 'react';
import { View, Platform } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import Text from '../Text';
import { Icon } from '../Icon';
import Touchable from '../Button/Touchable';
import StyleSheet from '../PlatformStyleSheet';

type Props = {|
  +border?: 'long' | 'short' | 'shaped',
  +type: 'localization' | 'destination' | 'airplane' | 'bus' | 'train',
  +header: string | React.Node,
  +subheader: string | React.Node,
  +info?: string | React.Node,
  +onItemPress: () => void,
  +onAddPress: () => void,
|};

export default function RowOption({
  type,
  header,
  subheader,
  info,
  onItemPress,
  onAddPress,
  border,
}: Props) {
  let icon = '';
  let longSeparatorStyle;
  let shortSeparatorStyle;

  switch (type) {
    case 'localization':
      icon = Platform.OS === 'android' ? 'gps' : 'gps-ios';
      break;
    case 'destination':
      icon = 'city';
      break;
    case 'airplane':
      icon = 'airplane-up';
      break;
    case 'bus':
      icon = 'bus';
      break;
    case 'train':
      icon = 'train';
      break;
    default:
      icon = 'city';
  }

  switch (border) {
    case 'long':
    case 'shaped':
      longSeparatorStyle = styles.longSeparator;
      break;
    case 'short':
      shortSeparatorStyle = styles.shortSeparator;
      break;
    default:
      longSeparatorStyle = false;
      shortSeparatorStyle = false;
  }

  return (
    <Touchable onPress={onItemPress}>
      <View style={[longSeparatorStyle, styles.container]}>
        <View style={styles.wrapper}>
          <View style={styles.leftIconContainer}>
            <View style={styles.leftIcon}>
              <Icon
                name={icon}
                color={
                  type === 'localization'
                    ? defaultTokens.paletteProductNormal
                    : defaultTokens.colorIconSecondary
                }
              />
            </View>
            {border === 'shaped' && (
              <View style={styles.triangleShape} testID="triangle-shape" />
            )}
          </View>
          <View style={[shortSeparatorStyle, styles.contentContainer]}>
            <View style={styles.padded}>
              <Text
                numberOfLines={1}
                style={[
                  styles.header,
                  type === 'localization' && styles.localizationHeader,
                ]}
                type="primary"
              >
                {header}
              </Text>
              <View style={styles.rowDirection}>
                <Text type="secondary" style={styles.subheader}>
                  {subheader}
                </Text>
                {info && (
                  <View style={[styles.rowDirection, styles.padded]}>
                    <View style={styles.dotSeparator} testID="dot-separator" />
                    <Text
                      type="secondary"
                      style={styles.subheader}
                      numberOfLines={1}
                    >
                      {info}
                    </Text>
                  </View>
                )}
              </View>
            </View>
            <Touchable onPress={onAddPress} style={styles.plusButton}>
              <Icon
                name="plus"
                size="small"
                color={defaultTokens.paletteProductNormal}
              />
            </Touchable>
          </View>
        </View>
      </View>
    </Touchable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  wrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  triangleShape: {
    height: 8,
    width: 8,
    borderColor: defaultTokens.paletteInkLighter,
    borderStartWidth: 1,
    borderTopWidth: 1,
    transform: [{ rotate: '45deg' }],
    position: 'absolute',
    bottom: -7,
    backgroundColor: 'white',
  },
  leftIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  leftIcon: {
    padding: 10,
  },
  longSeparator: {
    borderColor: defaultTokens.paletteInkLighter,
    borderBottomWidth: parseFloat(defaultTokens.borderWidthCard),
  },
  shortSeparator: {
    borderColor: defaultTokens.paletteInkLighter,
    borderBottomWidth: parseFloat(defaultTokens.borderWidthCard),
  },
  plusButton: {
    backgroundColor: defaultTokens.backgroundAlertSuccess,
    borderRadius: parseFloat(defaultTokens.borderRadiusNormal),
    marginEnd: 10,
    padding: 2,
  },
  header: {
    fontSize: parseFloat(defaultTokens.fontSizeTextNormal),
  },
  subheader: {
    fontSize: parseFloat(defaultTokens.fontSizeTextSmall),
  },
  localizationHeader: {
    color: defaultTokens.paletteProductNormal,
  },
  rowDirection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  padded: {
    flex: 1,
    paddingEnd: 10,
  },
  dotSeparator: {
    marginHorizontal: 4,
    height: 4,
    width: 4,
    borderRadius: 2,
    backgroundColor: defaultTokens.colorTextSecondary,
  },
});
