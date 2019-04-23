// @flow

import * as React from 'react';
import { View } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import {
  Text,
  StyleSheet,
  Icon,
  Hoverable,
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
|};

type State = {|
  isHovered: boolean,
|};

export default class SortTab extends React.Component<Props, State> {
  state = {
    isHovered: false,
  };

  handleOnMouseEnter = () => {
    this.setState({ isHovered: true });
  };

  handleOnMouseLeave = () => {
    this.setState({ isHovered: false });
  };

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
    } = this.props;
    const { isHovered } = this.state;
    const price = additionalInfo?.price;
    const currency = additionalInfo?.currency;
    const duration = additionalInfo?.duration;
    return (
      <Hoverable
        onMouseEnter={this.handleOnMouseEnter}
        onMouseLeave={this.handleOnMouseLeave}
      >
        <TouchableWithoutFeedback onPress={this.handleOnPress}>
          <View
            style={[
              styles.container,
              isFirst && styles.containerFirst,
              isLast && styles.containerLast,
              isActive && styles.containerActive,
              isHovered && styles.containerHovered,
            ]}
          >
            <View>
              <Text
                style={[styles.label, isActive && styles.labelActive]}
                align="left"
                numberOfLines={1}
              >
                {label}
              </Text>
              <View style={styles.priceDurationContainer}>
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
      </Hoverable>
    );
  }
}

const borderRadius = parseInt(defaultTokens.borderRadiusSmall, 10);
const containerHeight = 75;
const styles = StyleSheet.create({
  container: {
    height: containerHeight,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: parseInt(defaultTokens.spaceSmall, 10),
    backgroundColor: defaultTokens.paletteWhite,
    overflow: 'hidden',
    web: {
      userSelect: 'none',
    },
  },
  containerFirst: {
    borderTopStartRadius: borderRadius,
    borderBottomStartRadius: borderRadius,
  },
  containerLast: {
    borderTopEndRadius: borderRadius,
    borderBottomEndRadius: borderRadius,
    marginEnd: 0,
  },
  containerActive: {
    backgroundColor: defaultTokens.paletteWhite,
    borderBottomWidth: 2,
    borderBottomColor: defaultTokens.paletteProductNormal,
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
