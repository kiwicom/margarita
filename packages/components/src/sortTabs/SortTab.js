// @flow

import * as React from 'react';
import { View, Platform } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import {
  Text,
  StyleSheet,
  Icon,
  withHover,
  designTokens,
  TouchableWithoutFeedback,
} from '@kiwicom/universal-components';

import type { SortIconTypes, SortTypes, PriceDurationInfo } from './SortTabs';

export type Props = {|
  +label: string,
  +value: SortTypes,
  +isFirst: boolean,
  +isLast: boolean,
  +isActive: boolean,
  +additionalInfo: ?PriceDurationInfo,
  +icon: SortIconTypes,
  +onPress: SortTypes => void,
  +isHovered: boolean,
  +onMouseLeave: () => void,
  +onMouseEnter: () => void,
|};

class SortTab extends React.Component<Props> {
  handleOnPress = () => {
    const { value, onPress } = this.props;
    onPress(value);
  };

  render() {
    const {
      label,
      isFirst,
      isLast,
      isActive,
      icon,
      additionalInfo,
      isHovered,
      onMouseEnter,
      onMouseLeave,
    } = this.props;
    const price = additionalInfo?.price;
    const currency = additionalInfo?.currency;
    const duration = additionalInfo?.duration;
    const isMobile = Platform.OS !== 'web';
    return (
      <TouchableWithoutFeedback
        onPress={this.handleOnPress}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <View
          style={[
            styles.container,
            isFirst && styles.containerFirst,
            isLast && styles.containerLast,
            isActive && styles.containerActive,
            isHovered && styles.containerHovered,
          ]}
        >
          <View style={isMobile && styles.rowContainer}>
            <Text
              style={[styles.label, isActive && styles.labelActive]}
              align="left"
              numberOfLines={1}
            >
              {label}
            </Text>
            <View
              style={[
                styles.priceDurationContainer,
                isMobile && styles.priceTagMobile,
              ]}
            >
              {price || currency ? (
                <Text style={styles.label} align="left" numberOfLines={1}>
                  {price} {currency}
                </Text>
              ) : null}
              {duration ? (
                <Text
                  style={[
                    styles.durationLabel,
                    (price || currency) && styles.marginStartLabel,
                  ]}
                  align="left"
                  numberOfLines={1}
                >
                  {duration}
                </Text>
              ) : null}
            </View>
          </View>
          <Icon
            size="small"
            name={icon}
            color={
              isActive
                ? defaultTokens.paletteProductNormal
                : defaultTokens.colorIconPrimary
            }
          />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default withHover(SortTab);

const borderRadius = parseInt(defaultTokens.borderRadiusSmall, 10);
const containerHeight = {
  web: 75,
  mobile: 40,
};
const styles = StyleSheet.create({
  container: {
    height: containerHeight.mobile,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: parseInt(defaultTokens.spaceSmall, 10),
    backgroundColor: defaultTokens.paletteWhite,
    overflow: 'hidden',
    web: {
      userSelect: 'none',
      flex: 1,
      height: containerHeight.web,
    },
  },
  rowContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  priceTagMobile: {
    paddingTop: 0,
    paddingHorizontal: parseInt(defaultTokens.spaceMedium, 10),
  },
  containerFirst: {
    web: {
      borderTopStartRadius: borderRadius,
      borderBottomStartRadius: borderRadius,
    },
  },
  containerLast: {
    web: {
      borderTopEndRadius: borderRadius,
      borderBottomEndRadius: borderRadius,
    },
    marginEnd: 0,
  },
  containerActive: {
    backgroundColor: defaultTokens.paletteWhite,
    web: {
      borderBottomWidth: 2,
      borderBottomColor: defaultTokens.paletteProductNormal,
    },
    ios: {
      borderStartWidth: 4,
      borderStartColor: defaultTokens.paletteProductNormal,
    },
    android: {
      borderStartWidth: 4,
      borderStartColor: defaultTokens.paletteProductNormal,
    },
  },
  containerHovered: {
    backgroundColor: defaultTokens.paletteWhiteHover,
  },
  priceDurationContainer: {
    paddingTop: parseInt(defaultTokens.paddingTag, 10),
    flex: 1,
    flexDirection: 'row',
  },
  durationLabel: {
    color: defaultTokens.paletteInkLight,
    fontWeight: 'normal',
    fontSize: parseInt(defaultTokens.fontSizeTextSmall, 10),
  },
  marginStartLabel: {
    marginStart: parseInt(defaultTokens.spaceSmall, 10),
  },
  label: {
    color: defaultTokens.paletteInkDark,
    fontWeight: designTokens.fontWeightMedium,
    fontSize: parseInt(defaultTokens.fontSizeTextSmall, 10),
  },
  labelActive: {
    color: defaultTokens.paletteProductNormal,
  },
});
