// @flow

import * as React from 'react';
import { View } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import {
  Text,
  StyleSheet,
  Icon,
  Hoverable,
} from '@kiwicom/universal-components';

import TouchableWithoutFeedback from '../TouchableWithoutFeedback';
import type { SortIconTypes } from './SortTabs';

export type Props = {|
  +label: string,
  +value: string,
  +first: boolean,
  +last: boolean,
  +active: boolean,
  +icon: SortIconTypes,
  +onPress: (value: string) => void,
|};

type State = {|
  hovered: boolean,
|};

export default class SortTab extends React.Component<Props, State> {
  state = {
    hovered: false,
  };

  handleOnMouseEnter = () => {
    this.setState({ hovered: true });
  };

  handleOnMouseLeave = () => {
    this.setState({ hovered: false });
  };

  handleOnPress = () => {
    const { value, onPress } = this.props;
    onPress(value);
  };

  render() {
    const { label, first, last, active, icon } = this.props;
    const { hovered } = this.state;
    return (
      <Hoverable
        onMouseEnter={this.handleOnMouseEnter}
        onMouseLeave={this.handleOnMouseLeave}
      >
        <TouchableWithoutFeedback onPress={this.handleOnPress}>
          <View
            style={[
              styles.container,
              first && styles.containerFirst,
              last && styles.containerLast,
              active && styles.containerActive,
              hovered && styles.containerHovered,
            ]}
          >
            <View>
              <Text
                style={[styles.label, active && styles.labelActive]}
                align="left"
                numberOfLines={1}
              >
                {label}
              </Text>
              <View style={styles.priceDurationContainer}>
                <Text style={[styles.label]} align="left" numberOfLines={1}>
                  1,394 Kč
                </Text>
                <Text
                  style={[styles.durationLabel]}
                  align="left"
                  numberOfLines={1}
                >
                  9h 3m
                </Text>
              </View>
            </View>
            <Icon
              size="small"
              name={icon}
              color={
                active
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: parseInt(defaultTokens.paddingButtonSmall, 10),
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
    paddingTop: 5,
    flex: 1,
    flexDirection: 'row',
  },
  durationLabel: {
    color: defaultTokens.paletteInkLight,
    fontWeight: 'normal',
    marginStart: parseInt(defaultTokens.paddingButtonSmall, 10),
    fontSize: 12,
  },
  label: {
    flex: 1,
    color: defaultTokens.paletteInkDark,
    fontWeight: '500',
    fontSize: 12,
  },
  labelActive: {
    color: defaultTokens.paletteProductNormal,
  },
});
