// @flow

import * as React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import CheckboxText from './CheckboxText';
import CheckboxIcon from './CheckboxIcon';
import { StyleSheet } from '../PlatformStyleSheet';
import { withHover } from '../WithHover';

type Props = {|
  +label?: React.Node,
  +hasError?: boolean,
  +disabled?: boolean,
  +checked?: boolean,
  +info?: React.Node,
  +onPress?: () => void,
  +children?: React.Node,
  +isHovered: boolean,
  +onMouseLeave: () => void,
  +onMouseEnter: () => void,
|};

type State = {|
  focusDisplayed: boolean,
  pressed: boolean,
|};

class CheckboxShared extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      focusDisplayed: false,
      pressed: false,
    };
  }

  handleOnPressIn = () => {
    this.setState({ pressed: true });
  };

  handleOnPressOut = () => {
    this.setState({ pressed: false, focusDisplayed: false });
  };

  handleOnFocus = () => {
    this.setState({ focusDisplayed: true });
  };

  handleOnBlur = () => {
    this.setState({ focusDisplayed: false });
  };

  render() {
    const {
      label,
      hasError,
      disabled,
      checked,
      info,
      onPress,
      children,
      isHovered,
    } = this.props;
    const { focusDisplayed, pressed } = this.state;

    return (
      <TouchableWithoutFeedback
        accessibilityRole="button"
        onPress={onPress}
        onPressIn={this.handleOnPressIn}
        onPressOut={this.handleOnPressOut}
        onFocus={this.handleOnFocus}
        onBlur={this.handleOnBlur}
        disabled={disabled}
      >
        <View style={[styles.view, disabled && styles.viewDisabled]}>
          <CheckboxIcon
            checked={checked}
            hasError={hasError}
            disabled={disabled}
            focused={focusDisplayed}
            hovered={isHovered}
            pressed={pressed}
          />
          {children || (
            <CheckboxText label={label} checked={checked} info={info} />
          )}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    display: 'flex',
    flexDirection: 'row',
    web: {
      outline: '0',
    },
  },
  viewDisabled: {
    opacity: parseFloat(defaultTokens.opacityCheckboxDisabled),
  },
});

export default withHover(CheckboxShared);
