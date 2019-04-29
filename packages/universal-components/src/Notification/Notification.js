// @flow

import * as React from 'react';
import { Animated } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import type { IconNameType } from '../types/_generated-types';
import { getStatusBarHeight } from '../utils/StatusBarHeight';
import { StyleSheet } from '../PlatformStyleSheet';
import InformativeNotification from './InformativeNotification';
import ImportantNotification from './ImportantNotification';
import type {
  OnLayout,
  NotificationStyleType,
  NotificationType,
} from '../types';
import type { StylePropType } from '../PlatformStyleSheet/StyleTypes';

type Props = {|
  +style?: StylePropType,
  +notificationType: NotificationType,
  +onDismiss?: () => void,
|};

type State = {|
  layout: {
    height: number,
    measured: boolean,
  },
  opacity: Animated.Value,
  translateY: Animated.Value,
  isOpen: boolean,
  notificationStyle: NotificationStyleType,
  notificationTitle: React.Node | string,
  notificationMessage: React.Node | string,
  rightIconName?: IconNameType,
|};

const ANIMATION_DURATION = 250;
const DISPLAY_DURATION = 1500;
const LIVE_OVER_DURATION = 200;

export default class Notification extends React.Component<Props, State> {
  state = {
    layout: {
      height: -100,
      measured: false,
    },
    opacity: new Animated.Value(0),
    translateY: new Animated.Value(0),
    isOpen: false,
    notificationStyle: 'error',
    notificationTitle: '',
    notificationMessage: '',
    rightIconName: undefined,
  };

  componentWillUnmount() {
    clearTimeout(this.hideTimeout);
  }

  defferedHideAlert = undefined;
  hideTimeout: TimeoutID;
  lastCallTimestamp = null;

  internalToggleNotification(
    notificationStyle: NotificationStyleType,
    title: React.Node | string,
    message: React.Node | string,
    rightIconName?: IconNameType,
  ) {
    const { isOpen } = this.state;
    const { notificationType } = this.props;
    const isInformative = notificationType === 'informative';

    if (!isOpen) {
      this.setState(
        {
          isOpen: true,
          notificationStyle,
          notificationTitle: title,
          notificationMessage: message,
          rightIconName: rightIconName,
        },
        () => this.showNotification(),
      );
    } else if (isInformative) {
      this.hideNotification();
    }
  }

  handleLayout = (e: OnLayout) => {
    const { layout } = this.state;
    const { height } = e.nativeEvent.layout;
    const { measured } = layout;
    const { isOpen, translateY, opacity } = this.state;

    this.setState({ layout: { height, measured: true } }, () => {
      if (measured) {
        if (!isOpen) {
          translateY.setValue(height);
        }
      } else {
        translateY.setValue(-height - getStatusBarHeight());
        opacity.setValue(0);

        if (isOpen) {
          this.showNotification();
        }
      }
    });
  };

  toggleNotification = (
    notificationStyle: NotificationStyleType,
    title: React.Node | string,
    message: React.Node | string,
    rightIconName?: IconNameType,
  ) => {
    const { notificationType } = this.props;
    const { isOpen } = this.state;
    const now = Date.now();

    const isImportant = notificationType === 'important';
    const isInformative = notificationType === 'informative';
    const timeToLiveOver = Math.abs(now - (this.lastCallTimestamp || 0));

    if (isImportant) {
      this.internalToggleNotification(
        notificationStyle,
        title,
        message,
        rightIconName,
      );
    }

    if (
      !isOpen &&
      isInformative &&
      (!this.lastCallTimestamp || timeToLiveOver >= LIVE_OVER_DURATION)
    ) {
      this.internalToggleNotification(notificationStyle, title, message);
      this.defferedHideAlert = setTimeout(
        () => this.hideNotification(),
        DISPLAY_DURATION,
      );
    }

    if (
      this.lastCallTimestamp &&
      isInformative &&
      timeToLiveOver < LIVE_OVER_DURATION
    ) {
      clearTimeout(this.defferedHideAlert);
      this.defferedHideAlert = setTimeout(
        () => this.hideNotification(),
        DISPLAY_DURATION,
      );
    }

    this.lastCallTimestamp = now;
  };

  showNotification = () => {
    const { opacity, translateY } = this.state;

    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: ANIMATION_DURATION,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: 0,
        duration: ANIMATION_DURATION,
        useNativeDriver: true,
      }),
    ]).start();
  };

  hideNotification = () => {
    const { opacity, translateY, layout } = this.state;

    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 0,
        duration: ANIMATION_DURATION,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: -layout.height - getStatusBarHeight(),
        duration: ANIMATION_DURATION,
        useNativeDriver: true,
      }),
    ]).start(() => {
      this.setState({ isOpen: false });
    });
  };

  dismissNotification = () => {
    const { onDismiss } = this.props;
    this.hideNotification();
    if (onDismiss) {
      onDismiss();
    }
  };

  render() {
    const { style, notificationType } = this.props;
    const {
      translateY,
      layout,
      opacity,
      notificationStyle,
      notificationMessage,
      notificationTitle,
      rightIconName,
      isOpen,
    } = this.state;

    if (!isOpen) {
      return null;
    }

    const isInformative = notificationType === 'informative';

    let backgroundColor;
    switch (notificationStyle) {
      case 'error': {
        backgroundColor = isInformative
          ? defaultTokens.paletteRedNormal
          : defaultTokens.backgroundAlertCritical;
        break;
      }
      case 'warning': {
        backgroundColor = isInformative
          ? defaultTokens.paletteOrangeNormal
          : defaultTokens.backgroundAlertWarning;
        break;
      }
      case 'success': {
        backgroundColor = isInformative
          ? defaultTokens.paletteGreenNormal
          : defaultTokens.backgroundAlertSuccess;
        break;
      }
      default: {
        backgroundColor = isInformative
          ? defaultTokens.paletteOrangeNormal
          : defaultTokens.backgroundAlertWarning;
      }
    }

    const opacityStyle = opacity.interpolate({
      inputRange: [0, 0.8, 1],
      outputRange: [0, 0.2, 1],
    });

    return (
      <Animated.View
        onLayout={this.handleLayout}
        style={[
          styles.wrapper,
          {
            backgroundColor,
            opacity: layout.measured ? 1 : 0,
            transform: [
              {
                translateY,
              },
            ],
          },
          style,
        ]}
      >
        {notificationType === 'informative' ? (
          <InformativeNotification
            style={{ opacity: opacityStyle }}
            notificationMessage={notificationMessage}
          />
        ) : (
          <ImportantNotification
            style={{ opacity: opacityStyle }}
            notificationStyle={notificationStyle}
            notificationTitle={notificationTitle}
            notificationMessage={notificationMessage}
            rightIconName={rightIconName}
            onPress={this.dismissNotification}
          />
        )}
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    top: 0,
    width: '100%',
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
    zIndex: parseFloat(defaultTokens.zIndexSticky),
  },
});
