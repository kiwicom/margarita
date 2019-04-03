// @flow

import * as React from 'react';
import { Animated, View } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import { Icon } from '../Icon';
import { Touchable } from '../Touchable';
import { StyleSheet } from '../PlatformStyleSheet';
import { Text } from '../Text';
import type { StylePropType } from '../PlatformStyleSheet/StyleTypes';
import type { NotificationStyleType } from '../types';
import type { IconNameType } from '../types/_generated-types';

type Props = {|
  +style?: StylePropType,
  +notificationStyle: NotificationStyleType,
  +notificationTitle: React.Node | string,
  +notificationMessage: React.Node | string,
  +rightIconName?: IconNameType,
  +onPress: () => void,
|};

const AnimatedTouchable = Animated.createAnimatedComponent(Touchable);

export default function ImportantNotification({
  style,
  onPress,
  notificationTitle,
  notificationMessage,
  notificationStyle,
  rightIconName,
}: Props) {
  let color;
  let iconColor;
  let iconLeft;
  let iconRight;
  let iconSize;

  switch (notificationStyle) {
    case 'error': {
      color = defaultTokens.colorTextAlertCritical;
      iconColor = defaultTokens.colorIconCritical;
      iconLeft = 'alert';
      iconRight = 'chevron-right';
      iconSize = 'medium';
      break;
    }
    case 'warning': {
      color = defaultTokens.colorTextAlertWarning;
      iconColor = defaultTokens.colorIconWarning;
      iconLeft = 'alert';
      iconRight = 'chevron-right';
      iconSize = 'medium';
      break;
    }
    case 'success': {
      color = defaultTokens.colorTextAlertSuccess;
      iconColor = defaultTokens.colorIconSuccess;
      iconLeft = 'information-circle';
      iconRight = 'close';
      iconSize = 'medium';
      break;
    }
    default: {
      color = defaultTokens.colorTextAlertWarning;
      iconColor = defaultTokens.colorAlertIconWarning;
      iconLeft = 'alert';
      iconRight = 'chevron-right';
      iconSize = 'medium';
    }
  }

  if (rightIconName != null) {
    iconRight = rightIconName;
  }

  return (
    <AnimatedTouchable onPress={onPress} style={style}>
      <View style={styles.wrapper}>
        <View style={styles.leftIcon}>
          <Icon name={iconLeft} color={iconColor} />
        </View>
        <View style={styles.content}>
          <Text style={[styles.header, { color }]}>
            {typeof notificationTitle === 'string' &&
              notificationTitle.toUpperCase()}
          </Text>
          <Text style={[{ color }]}>{notificationMessage}</Text>
        </View>
        <View style={styles.rightIcon}>
          <Icon name={iconRight} color={iconColor} size={iconSize} />
        </View>
      </View>
    </AnimatedTouchable>
  );
}

const styles = StyleSheet.create({
  header: {
    fontWeight: 'bold',
    paddingBottom: 5,
  },
  content: {
    flex: 1,
    flexDirection: 'column',
  },
  leftIcon: {
    paddingHorizontal: 10,
  },
  rightIcon: {
    paddingEnd: 8,
    alignSelf: 'center',
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: 14,
    color: defaultTokens.paletteWhite,
    flex: 1,
    paddingVertical: 5,
  },
});
