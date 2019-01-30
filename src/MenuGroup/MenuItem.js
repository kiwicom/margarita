// @flow

import * as React from 'react';
import { View, Platform } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import Separator from './Separator';
import { Icon } from '../Icon';
import { StyleSheet, type StylePropType } from '../PlatformStyleSheet';
import { Text } from '../Text';
import { Touchable } from '../Touchable';

type Props = {|
  +title: React.Node,
  +onPress: () => void,

  +titleStyle?: StylePropType,
  +icon?: React.Element<typeof Icon>,
  +subTitle?: React.Node,
  +subTitleStyle?: StylePropType,
  +label?: React.Node,
  +labelStyle?: StylePropType,
  +hideActionIcon?: boolean,
|};

export default function MenuItem({
  title,
  onPress,
  icon,
  titleStyle,
  subTitle,
  subTitleStyle,
  label,
  labelStyle,
  hideActionIcon = false,
}: Props) {
  const menuIcon =
    icon != null
      ? React.cloneElement(icon, {
          color: icon.props.color ?? defaultTokens.paletteInkLight,
          size: icon.props.size ?? 'medium',
          style: [styles.icon, icon.props.style],
        })
      : null;
  return (
    <View style={styles.container}>
      <Touchable onPress={onPress} style={styles.wrapper}>
        <View style={styles.row}>
          {menuIcon}
          <View>
            {label != null && (
              <Text type="secondary" size="small" style={labelStyle}>
                {label}
              </Text>
            )}
            <Text type="attention" size="large" style={titleStyle}>
              {title}
            </Text>
            {subTitle != null && (
              <Text type="secondary" size="small" style={subTitleStyle}>
                {subTitle}
              </Text>
            )}
          </View>
          {Platform.OS === 'ios' && hideActionIcon === false && (
            <View style={styles.actionIcon}>
              <Icon
                name="chevron-right"
                color={defaultTokens.paletteProductNormal}
              />
            </View>
          )}
        </View>
      </Touchable>
      <Separator style={icon == null ? styles.noIcon : styles.iconSeparator} />
    </View>
  );
}

const wrapperPaddingStart = 12;
const iconWidth = 24;
const iconMargin = 12;

const styles = StyleSheet.create({
  container: {
    marginTop: StyleSheet.hairlineWidth,
    ios: {
      marginBottom: -StyleSheet.hairlineWidth,
    },
  },
  wrapper: {
    backgroundColor: defaultTokens.paletteWhite,
    ios: {
      paddingTop: 8.5,
      paddingBottom: 11.5,
    },
    android: {
      paddingTop: 6,
      paddingBottom: 8.5,
    },

    paddingStart: wrapperPaddingStart,
    paddingEnd: 16,
  },
  noIcon: {
    ios: {
      marginStart: 12,
    },
  },
  iconSeparator: {
    ios: {
      marginStart: wrapperPaddingStart + iconWidth + iconMargin,
    },
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginEnd: iconMargin,
  },
  actionIcon: {
    flex: 1,
    alignItems: 'flex-end',
  },
});
