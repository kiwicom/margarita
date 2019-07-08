// @flow

import * as React from 'react';
import { View } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import RowOptionContent from './RowOptionContent';
import RowOptionLeftIcon from './RowOptionLeftIcon';
import RowOptionRightButton from './RowOptionRightButton';
import { Touchable } from '../Touchable';
import { StyleSheet } from '../PlatformStyleSheet';

type Props = {|
  +border?: 'long' | 'short' | 'shaped',
  +type: 'localization' | 'destination' | 'airplane' | 'bus' | 'train',
  +header: string | React.Node,
  +subheader: ?(string | React.Node),
  +info?: string | React.Node,
  +onItemPress: () => void | Promise<void>,
  +onAddPress?: () => void | Promise<void>,
|};

export default function RowOption({
  type,
  header,
  subheader,
  info,
  onItemPress,
  onAddPress,
  border,
}: Props) {
  let longSeparatorStyle;
  let shortSeparatorStyle;

  switch (border) {
    case 'long':
    case 'shaped':
      longSeparatorStyle = styles.longSeparator;
      break;
    case 'short':
      shortSeparatorStyle = styles.shortSeparator;
      break;
    default:
      longSeparatorStyle = false;
      shortSeparatorStyle = false;
  }

  return (
    <Touchable onPress={onItemPress} testID="item-button">
      <View style={[longSeparatorStyle, styles.container]}>
        <View style={styles.wrapper}>
          <RowOptionLeftIcon type={type} border={border} />
          <View style={[shortSeparatorStyle, styles.contentContainer]}>
            <RowOptionContent
              type={type}
              header={header}
              subheader={subheader}
              info={info}
            />
            {onAddPress !== undefined && (
              <RowOptionRightButton onAddPress={onAddPress} />
            )}
          </View>
        </View>
      </View>
    </Touchable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  wrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  longSeparator: {
    borderColor: defaultTokens.paletteInkLighter,
    borderBottomWidth: parseFloat(defaultTokens.borderWidthCard),
  },
  shortSeparator: {
    borderColor: defaultTokens.paletteInkLighter,
    borderBottomWidth: parseFloat(defaultTokens.borderWidthCard),
  },
});
