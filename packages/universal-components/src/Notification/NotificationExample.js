// @flow

import * as React from 'react';
import { View } from 'react-native';

import Notification from './Notification';
import { Button } from '../Button';
import { StyleSheet } from '../PlatformStyleSheet';
import type { IconNameType } from '../types/_generated-types';
import type { NotificationType } from '../types';

type Props = {|
  +notificationStyle: 'error' | 'warning' | 'success',
  +notificationType: NotificationType,
  +title: React.Node | string,
  +message: React.Node | string,
  +rightIconName?: IconNameType,
  +onDismiss?: () => void,
|};
export default class NotificationExample extends React.Component<Props> {
  componentDidMount() {
    this.renderNotification();
  }

  renderNotification = () => {
    const { notificationStyle, title, message, rightIconName } = this.props;
    if (this.notification) {
      this.notification.toggleNotification(
        notificationStyle,
        title,
        message,
        rightIconName,
      );
    }
  };

  refToNotification = (ref: ?Notification) => {
    this.notification = ref;
  };

  notification: ?Notification;

  render() {
    const { notificationType, onDismiss } = this.props;
    return (
      <View style={styles.container}>
        <Button onPress={this.renderNotification} label="Press" />
        <Notification
          ref={this.refToNotification}
          notificationType={notificationType}
          onDismiss={onDismiss}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
