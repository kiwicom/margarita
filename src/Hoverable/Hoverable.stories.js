// @flow

import * as React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { StyleSheet } from '../PlatformStyleSheet';
import { Hoverable } from '.';

type Props = {|
  +disabled?: boolean,
|};

type State = {
  hovered: boolean,
};

class HoverableSquare extends React.Component<Props, State> {
  state = {
    hovered: false,
  };

  handleOnMouseEnter = () => {
    this.setState({ hovered: true });
  };

  handleOnMouseLeave = () => {
    this.setState({ hovered: false });
  };

  render() {
    const { hovered } = this.state;
    const { disabled } = this.props;

    return (
      <Hoverable
        disabled={disabled}
        onMouseEnter={this.handleOnMouseEnter}
        onMouseLeave={this.handleOnMouseLeave}
      >
        <View style={[styles.square, hovered && styles.squareHovered]} />
      </Hoverable>
    );
  }
}

storiesOf('Hoverable', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const disabled = boolean('disabled', false);

    return <HoverableSquare disabled={disabled} />;
  });

const styles = StyleSheet.create({
  square: {
    width: 50,
    height: 50,
    backgroundColor: defaultTokens.backgroundButtonSecondary,
  },
  squareHovered: {
    backgroundColor: defaultTokens.backgroundButtonSecondaryHover,
  },
});
