// @flow

import * as React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import { StyleSheet } from '../PlatformStyleSheet';
import withHover from './withHover';

type Props = {|
  +isHovered: boolean,
  +onMouseEnter: () => void,
  +onMouseLeave: () => void,
|};

class Square extends React.Component<Props> {
  render() {
    const { isHovered, ...rest } = this.props;
    return (
      <View
        style={[styles.square, isHovered && styles.squareHovered]}
        {...rest}
      />
    );
  }
}

const HoverableSquare = withHover(Square);

storiesOf('withHover', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    return <HoverableSquare />;
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
