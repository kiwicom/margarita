// @flow

import * as React from 'react';
import { View } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import {
  Icon,
  StyleSheet,
  type StylePropType,
} from '@kiwicom/universal-components';

import Text from '../text/Text';

type Props = {|
  +icon: React.Element<typeof Icon>,
  +information: React.Element<typeof Text>,
  +warning?: React.Element<typeof Text>,
  +containerStyle?: StylePropType,
|};

export default class TimelineInformation extends React.Component<Props> {
  render() {
    const { icon, information, warning, containerStyle } = this.props;
    const iconWithStyle = React.cloneElement(icon, {
      size: 'small',
      color: icon.props.color || defaultTokens.paletteInkDark,
    });

    const informationWithStyle = React.cloneElement(information, {
      size: 'normal',
      numberOfLines: 1,
    });

    let warningWithStyle = null;
    if (warning) {
      warningWithStyle = React.cloneElement(warning, {
        size: 'small',
        numberOfLines: 1,
        align: 'right',
      });
    }

    return (
      <View style={[styles.container, containerStyle]}>
        {iconWithStyle}
        <View style={styles.informationContainer}>{informationWithStyle}</View>
        {warning != null && (
          <View style={styles.warningContainer}>{warningWithStyle}</View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 22,
    paddingVertical: 2,
    paddingHorizontal: 5,
    backgroundColor: defaultTokens.paletteCloudLight,
    borderRadius: parseFloat(defaultTokens.borderRadiusNormal),
    borderColor: defaultTokens.paletteInkLighter,
    borderWidth: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  informationContainer: {
    marginStart: 19,
  },
  warningContainer: {
    flex: 1,
    marginEnd: 24,
  },
});
