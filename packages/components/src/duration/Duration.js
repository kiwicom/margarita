// @flow

import * as React from 'react';
import { View } from 'react-native';
import {
  Text,
  StyleSheet,
  Icon,
  type StylePropType,
} from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

type Props = {|
  +showIcon: boolean,
  +duration: ?number,
  +style?: StylePropType,
  +iconStyle?: StylePropType,
|};

export const separateHours = (durationInMinutes: number) => {
  let minutes = durationInMinutes;

  if (minutes < 0) {
    minutes = 0;
  }

  const hours = Math.floor(minutes / 60);
  minutes %= 60;

  return { hours, minutes };
};

export default function Duration(props: Props) {
  const { hours, minutes } = separateHours(props.duration || 0);
  const duration = `${hours}h ${minutes}m`;
  return (
    <View style={styleSheet.row}>
      {props.showIcon && (
        <Icon
          name="clock"
          size="small"
          color={defaultTokens.colorTextSecondary}
          style={props.iconStyle}
        />
      )}
      <Text style={[styleSheet.durationText, props.style]}>{duration}</Text>
    </View>
  );
}

Duration.defaultProps = {
  showIcon: true,
};

const styleSheet = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  durationText: {
    fontSize: 12,
    color: defaultTokens.colorTextSecondary,
  },
});
