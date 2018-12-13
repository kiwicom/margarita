// @flow

export type OnLayout = {
  +nativeEvent: {
    +layout: {
      +x: number,
      +y: number,
      +width: number,
      +height: number,
    },
  },
};

export type NotificationStyleType = 'error' | 'warning' | 'success';

export type NotificationType = 'informative' | 'important';
