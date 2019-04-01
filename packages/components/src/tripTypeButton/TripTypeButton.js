// @flow

import * as React from 'react';
import { View } from 'react-native';
import {
  StyleSheet,
  Icon,
  type IconNameType,
  TouchableWithoutFeedback,
} from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import Text from '../text/Text';

type Props = {|
  +icon: IconNameType,
  +label: string,
  +onPress: () => void,
|};

export default class TripTypeButton extends React.Component<Props> {
  render() {
    const { onPress, icon, label } = this.props;
    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.container}>
          <Icon color={defaultTokens.colorIconSecondary} name={icon} />
          <Text style={styles.label}>{label}</Text>
          <Icon color={defaultTokens.colorIconSecondary} name="show-more" />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: parseInt(defaultTokens.heightButtonNormal, 10),
    backgroundColor: defaultTokens.backgroundButtonSecondary,
    borderRadius: parseInt(defaultTokens.borderRadiusLarge, 10),
    paddingHorizontal: 11,
  },
  label: {
    flex: 1,
    color: defaultTokens.paletteInkDark,
    fontSize: parseInt(defaultTokens.fontSizeButtonNormal, 10),
    marginStart: 10,
  },
});
