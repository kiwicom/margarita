// @flow

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet } from '@kiwicom/universal-components';
import { Text, Duration } from '@kiwicom/margarita-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import * as DateFNS from 'date-fns';

type Props = {|
  +startTime: ?number,
  +endTime: ?number,
|};

export default function LayoverInfo(props: Props) {
  if (props.startTime && props.endTime) {
    const duration = DateFNS.differenceInMinutes(
      new Date(props.endTime),
      new Date(props.startTime),
    );
    return (
      <View style={styles.container}>
        <Duration
          iconName="timelapse"
          iconStyle={styles.icon}
          style={styles.text}
          duration={duration}
        />
        <Text style={styles.text}> layover</Text>
      </View>
    );
  }
  return null;
}

const styles = StyleSheet.create({
  container: {
    marginStart: 20,
    paddingStart: parseInt(defaultTokens.spaceLarge, 10),
    paddingVertical: parseInt(defaultTokens.spaceMedium, 10),
    flexDirection: 'row',
    borderColor: defaultTokens.paletteInkLighter,
    borderStartWidth: 2,
    alignItems: 'center',
    web: {
      borderStyle: 'dotted',
    },
  },
  icon: {
    marginEnd: parseInt(defaultTokens.spaceXSmall, 10),
  },
  text: {
    fontSize: parseInt(defaultTokens.fontSizeTextSmall, 10),
    color: defaultTokens.colorTextSecondary,
  },
});
