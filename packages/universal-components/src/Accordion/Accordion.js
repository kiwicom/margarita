// @flow

import * as React from 'react';
import { View } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import { Touchable } from '../Touchable';
import { StyleSheet } from '../PlatformStyleSheet';
import type { StylePropType } from '../PlatformStyleSheet/StyleTypes';

type Props = {|
  /**
   * Only shown if Accordion is in expanded state
   */
  +children: React.Node,
  /**
   * (expanded: boolean) => React.Node
   */
  +header: (expanded: boolean) => React.Node,
  /**
   * Forces the Accordion to be expanded when mounted
   */
  +expandedDefault?: boolean,
  /**
   * Custom style for the container
   */
  +containerStyle?: StylePropType,
|};

type State = {|
  expanded: boolean,
|};

export default class Accordion extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      expanded: props.expandedDefault ?? false,
    };
  }

  toggle = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { expanded } = this.state;
    const { children, header, containerStyle } = this.props;
    return (
      <Touchable onPress={this.toggle}>
        <View style={[styles.accordion, containerStyle]}>
          {header(expanded)}
          {expanded ? children : null}
        </View>
      </Touchable>
    );
  }
}

const styles = StyleSheet.create({
  accordion: {
    justifyContent: 'center',
    marginVertical: 4,
    paddingHorizontal: 4,
    borderColor: defaultTokens.paletteInkLight,
    borderWidth: 0.5,
    borderRadius: parseFloat(defaultTokens.borderRadiusNormal),
    backgroundColor: defaultTokens.paletteWhite,
    android: {
      elevation: 1,
    },
    ios: {
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      shadowColor: defaultTokens.paletteInkDark,
    },
    web: {
      boxShadow: '0px 2px 4px rgba(23,27,30,0.1)',
      width: '100%',
    },
  },
});
