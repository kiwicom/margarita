// @flow

import * as React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import CheckboxText from './CheckboxText';
import CheckboxIcon from './CheckboxIcon';
import { StyleSheet } from '../PlatformStyleSheet';
import { Hoverable } from '../Hoverable';

type Props = {|
  +label?: React.Node,
  +hasError?: boolean,
  +disabled?: boolean,
  +checked?: boolean,
  +info?: React.Node,
  +onPress?: () => void,
  +children?: React.Node,
|};

type State = {|
  focusDisplayed: boolean,
  hovered: boolean,
  pressed: boolean,
|};

class CheckboxShared extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      focusDisplayed: false,
      hovered: false,
      pressed: false,
    };
  }

  handleOnMouseEnter = () => {
    this.setState({ hovered: true });
  };

  handleOnMouseLeave = () => {
    this.setState({ hovered: false });
  };

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
    } = this.props;
    const { focusDisplayed, hovered, pressed } = this.state;

    return (
      <Hoverable
        onMouseEnter={this.handleOnMouseEnter}
        onMouseLeave={this.handleOnMouseLeave}
      >
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
              hovered={hovered}
              pressed={pressed}
            />
            {children || (
              <CheckboxText label={label} checked={checked} info={info} />
            )}
          </View>
        </TouchableWithoutFeedback>
      </Hoverable>
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

export default CheckboxShared;
