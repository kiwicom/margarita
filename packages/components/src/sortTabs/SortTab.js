// @flow

import * as React from 'react';
import { View } from 'react-native';
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
  +mobileLayout: boolean,
|};

class SortTab extends React.Component<Props> {
  handleOnPress = () => {
    const { value, onPress } = this.props;
    onPress(value);
  };

  render() {
    const {
      label,
      isActive,
      icon,
      additionalInfo,
      isHovered,
      onMouseEnter,
      onMouseLeave,
      mobileLayout,
    } = this.props;
    const price = additionalInfo?.price;
    const currency = additionalInfo?.currency;
    const duration = additionalInfo?.duration;
    return (
      <TouchableWithoutFeedback
        onPress={this.handleOnPress}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <View
          style={[
            styles.container,
            mobileLayout ? styles.heightMobile : styles.heightWeb,
            isActive &&
              (mobileLayout
                ? styles.containerActiveMobile
                : styles.containerActiveWeb),
          ]}
        >
          <View style={[styles.rowContainer, mobileLayout && styles.row]}>
            <Text
              style={[
                styles.label,
                isActive && styles.labelActive,
                isHovered && styles.containerHovered,
              ]}
              align="left"
              numberOfLines={1}
            >
              {label}
            </Text>
            <View
              style={[
                styles.priceDurationContainerWeb,
                mobileLayout && styles.priceDurationContainerMobile,
              ]}
            >
              {price || currency ? (
                <Text
                  style={[
                    styles.label,
                    isActive && styles.labelActive,
                    isHovered && styles.containerHovered,
                  ]}
                  align="left"
                  numberOfLines={1}
                >
                  {price} {currency}
                </Text>
              ) : null}
              {duration ? (
                <Text
                  style={[
                    styles.durationLabel,
                    (price || currency) && styles.marginStartLabel,
                    isActive && styles.labelActive,
                    isHovered && styles.containerHovered,
                  ]}
                  align="left"
                  numberOfLines={1}
                >
                  {duration}
                </Text>
              ) : null}
            </View>
          </View>
          <View style={styles.iconContainer}>
            <Icon
              size="small"
              name={icon}
              color={
                isActive || isHovered
                  ? defaultTokens.paletteProductNormal
                  : defaultTokens.colorIconPrimary
              }
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default withHover(SortTab);

const containerHeight = {
  web: 60,
  mobile: 40,
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row-reverse',
    justifyContent: 'flex-start',
    padding: parseInt(defaultTokens.spaceSmall, 10),
    borderTopColor: 'transparent',
    overflow: 'hidden',
    web: {
      borderTopWidth: 3,
      userSelect: 'none',
      height: containerHeight.web,
      paddingHorizontal: parseFloat(defaultTokens.spaceLarge),
    },
  },
  heightMobile: {
    height: containerHeight.mobile,
  },
  heightWeb: {
    height: containerHeight.web,
    paddingBottom: 3,
  },
  rowContainer: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  priceDurationContainerMobile: {
    paddingTop: 0,
    paddingHorizontal: parseInt(defaultTokens.spaceMedium, 10),
  },

  containerActiveWeb: {
    backgroundColor: defaultTokens.backgroundBody,
    borderTopColor: defaultTokens.paletteProductNormal,
  },
  containerActiveMobile: {
    backgroundColor: defaultTokens.paletteWhite,
    borderStartWidth: 4,
    borderStartColor: defaultTokens.paletteProductNormal,
  },
  containerHovered: {
    color: defaultTokens.paletteProductNormal,
  },
  priceDurationContainerWeb: {
    paddingTop: parseInt(defaultTokens.paddingTag, 10),
    flex: 1,
    flexDirection: 'row',
  },
  durationLabel: {
    fontWeight: 'normal',
    fontSize: parseInt(defaultTokens.fontSizeTextSmall, 10),
  },
  marginStartLabel: {
    marginStart: parseInt(defaultTokens.spaceXSmall, 10),
  },
  label: {
    fontWeight: designTokens.fontWeightMedium,
    fontSize: parseInt(defaultTokens.fontSizeTextSmall, 10),
  },
  labelActive: {
    color: defaultTokens.paletteProductNormal,
  },
  iconContainer: {
    paddingEnd: parseInt(defaultTokens.spaceSmall, 10),
  },
});
