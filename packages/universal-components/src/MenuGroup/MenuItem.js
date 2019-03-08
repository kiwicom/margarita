// @flow

import * as React from 'react';
import { View, Platform } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import { Icon } from '../Icon';
import { StyleSheet, type StylePropType } from '../PlatformStyleSheet';
import { Text } from '../Text';
import { Touchable } from '../Touchable';
import MenuItemWrapper from './MenuItemWrapper';

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
  const menuIcon = icon
    ? React.cloneElement(icon, {
        color: icon.props.color ?? defaultTokens.paletteInkLight,
        size: icon.props.size ?? 'medium',
        style: [styles.icon, icon.props.style],
      })
    : null;
  return (
    <View style={styles.container}>
      <Touchable onPress={onPress}>
        <MenuItemWrapper iconRendered={icon != null}>
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
        </MenuItemWrapper>
      </Touchable>
    </View>
  );
}

const iconMargin = parseFloat(defaultTokens.spaceSmall);

const styles = StyleSheet.create({
  container: {
    marginTop: StyleSheet.hairlineWidth,
    ios: {
      marginBottom: -StyleSheet.hairlineWidth,
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
