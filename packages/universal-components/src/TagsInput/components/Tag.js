// @flow

import * as React from 'react';
import { View } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import { Text } from '../../Text';
import { StyleSheet, type StylePropType } from '../../PlatformStyleSheet';
import { designTokens } from '../../DesignTokens';
import { Icon } from '../../Icon';
import { ExtendedTouchable } from '../../ExtendedTouchable';

type Props = {|
  +children: React.Node,
  +style?: StylePropType,
  +testID?: string,
  +index: number,
  +onDeletePress?: number => void,
  +fontSize: number,
|};

type TouchableTagIconProps = {|
  +onPress?: number => void,
  +children: React.Node,
  +index: number,
|};

class TouchableTagIcon extends React.Component<TouchableTagIconProps> {
  onPress = () => {
    if (this.props.onPress) this.props.onPress(this.props.index);
  };

  render() {
    return this.props.onPress ? (
      <ExtendedTouchable onPress={this.onPress}>
        {this.props.children}
      </ExtendedTouchable>
    ) : (
      this.props.children
    );
  }
}
export default function Tag({
  children,
  style,
  testID,
  index,
  onDeletePress,
  fontSize,
}: Props) {
  const dynamicStyle = StyleSheet.create({ fontSize: { fontSize: fontSize } });

  return (
    <View style={[styles.wrapper, style]} testID={testID}>
      <TouchableTagIcon onPress={onDeletePress} index={index}>
        <Icon
          name="close-circle"
          style={styles.icon}
          size="small"
          color={defaultTokens.backgroundButtonWhite}
        />
      </TouchableTagIcon>
      <Text style={[styles.text, dynamicStyle.fontSize]}>{children}</Text>
    </View>
  );
}

Tag.defaultProps = {
  fontSize: parseFloat(defaultTokens.fontSizeTextLarge),
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 6,
    paddingVertical: 5,
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    borderRadius: parseFloat(defaultTokens.borderRadiusNormal),
    backgroundColor: defaultTokens.backgroundButtonPrimary,
    web: {
      width: 'fit-content',
    },
  },
  text: {
    lineHeight: parseFloat(designTokens.heightBadge),
    letterSpacing: 0.3,
    color: defaultTokens.colorTextBadgeDark,
    marginStart: 5,
  },
  icon: {
    opacity: 0.6,
  },
});
