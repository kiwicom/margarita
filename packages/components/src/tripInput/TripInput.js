// @flow strict

import * as React from 'react';
import { View, Platform } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import {
  StyleSheet,
  Icon,
  designTokens,
  type StylePropType,
  TouchableWithoutFeedback,
} from '@kiwicom/universal-components';

import Text from '../text/Text';

type Props = {|
  +style?: StylePropType,
  +onPress: () => void,
  +icon: React.Element<typeof Icon>,
  +label: string,
  +value: string,
  +placeholder?: string,
|};

const getEmptyLocationPlaceholder = (field: string): string => {
  return field === 'From' ? '' : 'Anywhere';
};

export default function TripInput({
  style,
  icon,
  label,
  value,
  placeholder,
  onPress,
}: Props) {
  const inputIcon = React.cloneElement(icon, {
    color: defaultTokens.colorIconSecondary,
  });
  const hasValue = value.length > 0;
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={[
          styles.container,
          !hasValue && label === 'From' && styles.warningContainer,
          style,
        ]}
      >
        {Platform.OS !== 'web' && <View style={styles.icon}>{inputIcon}</View>}
        <Text style={styles.label}>{label.length > 0 ? `${label}: ` : ''}</Text>
        {
          <Text numberOfLines={1} ellipsizeMode="clip" style={styles.value}>
            {hasValue ? value : getEmptyLocationPlaceholder(label)}
          </Text>
        }
        {value === '' && placeholder != null && <Text>{placeholder}</Text>}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: parseInt(defaultTokens.spaceXSmall, 10),
    padding: 11,
    alignItems: 'center',
    borderRadius: parseInt(defaultTokens.borderRadiusLarge, 10),
    backgroundColor: defaultTokens.backgroundButtonSecondary,
    web: {
      flex: 1,
      height: parseInt(defaultTokens.heightInputNormal, 10),
      borderRadius: 3,
      backgroundColor: defaultTokens.paletteWhite,
      borderWidth: 1,
      borderColor: defaultTokens.paletteInkLighter,
    },
  },
  warningContainer: {
    borderColor: defaultTokens.paletteRedNormal,
  },
  icon: {
    marginEnd: 10,
  },
  label: {
    color: defaultTokens.paletteInkNormal,
    web: {
      color: defaultTokens.colorTextSecondary,
    },
  },
  value: {
    color: defaultTokens.colorTextAttention,
    web: {
      color: defaultTokens.paletteInkNormal,
      fontWeight: designTokens.fontWeightMedium,
    },
  },
});
