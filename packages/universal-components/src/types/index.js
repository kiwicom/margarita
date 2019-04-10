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

export type OnDragEvent = {
  +nativeEvent: {
    +translationX: number,
    +translationY: number,
  },
};

export type OnDropEvent = {
  +nativeEvent: {
    +oldState: number,
    +state: number,
    +translationX: number,
    +translationY: number,
  },
};

export type NotificationStyleType = 'error' | 'warning' | 'success';

export type NotificationType = 'informative' | 'important';
