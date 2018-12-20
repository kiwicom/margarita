// @flow

import * as React from 'react';
import { View } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import Text from '../Text';
import { Icon } from '../Icon';
import Touchable from '../Button/Touchable';
import StyleSheet from '../PlatformStyleSheet';

type Props = {|
  +border: 'long' | 'short' | 'shaped',
  +type: 'destination' | 'airplane' | 'bus' | 'train',
  +header: string | React.Node,
  +subheader: string | React.Node,
  +onItemPress: () => void,
  +onAddPress: () => void,
|};

export default function RowOption({
  type,
  header,
  subheader,
  onItemPress,
  onAddPress,
  border,
}: Props) {
  let icon = '';

  switch (type) {
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

  return (
    <Touchable onPress={onItemPress}>
      <View
        style={[
          (border === 'shaped' || border === 'long') && styles.longSeparator,
          styles.container,
        ]}
      >
        <View style={styles.wrapper}>
          <View style={styles.leftIconContainer}>
            <View style={styles.leftIcon}>
              <Icon name={icon} color={defaultTokens.colorIconSecondary} />
            </View>
            {border === 'shaped' && <View style={styles.triangleShape} />}
          </View>

          <View
            style={[
              border === 'short' && styles.shortSeparator,
              styles.contentContainer,
            ]}
          >
            <View>
              <Text style={styles.header} type="primary">
                {header}
              </Text>
              <Text type="secondary" style={styles.subheader}>
                {subheader}
              </Text>
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
    width: '100%',
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
});
