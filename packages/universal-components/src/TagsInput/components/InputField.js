// @flow

import * as React from 'react';
import { View, TextInput, Text } from 'react-native';
import type { ViewLayoutEvent } from 'react-native/Libraries/Components/View/ViewPropTypes';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import type { OnLayout } from '../../types';
import { StyleSheet } from '../../PlatformStyleSheet';
import { INPUT_MIN_WIDTH } from '../constants';

type Props = {|
  +fontSize: number,
  +onChangeText: (value: string) => void,
  +forwardRef?: (el: any) => void,
  +minWidth?: number,
  +value?: string,
  +onFocus?: () => void,
  +onBlur?: () => void,
  +disabled?: boolean,
  +maxWidth?: number,
  +placeholder?: string,
  +onKeyPress?: (e: ViewLayoutEvent) => void,
  +autoFocus?: boolean,
  +autoCorrect?: boolean,
|};

type State = {|
  componentWidth: number,
|};

class InputField extends React.Component<Props, State> {
  static defaultProps = {
    fontSize: parseFloat(defaultTokens.fontSizeTextLarge),
    disabled: false,
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      componentWidth: props.minWidth ?? INPUT_MIN_WIDTH,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { fontSize, maxWidth, minWidth, placeholder, value } = this.props;

    if (
      fontSize !== nextProps.fontSize ||
      maxWidth !== nextProps.maxWidth ||
      placeholder !== nextProps.placeholder ||
      minWidth !== nextProps.minWidth ||
      value !== nextProps.value
    ) {
      return true;
    }

    if (nextState.componentWidth !== this.setState.componentWidth) {
      return true;
    }
    return false;
  }

  updateRootWidth = (width: number) => {
    this.setState({ componentWidth: width });
  };

  updateWidth = (width: ?number) => {
    const { fontSize, maxWidth, minWidth } = this.props;

    /*
     There is a difference in character width in an input element and others. Especially with tiny characters.
     Because the input width is computed on the hidden helper container, the bufferWidth have to be added,
     otherwise, it leads to blink when the user has been writing.
     The buffer is computed on font-size and multiplying by value 1.63 which is based on the experiment.
     */
    const buffer = fontSize * 1.65;
    let newWidth = width + buffer;

    if (maxWidth && newWidth > maxWidth) {
      newWidth = maxWidth;
    } else if (minWidth && newWidth < minWidth) {
      newWidth = minWidth;
    }
    this.updateRootWidth(newWidth);
  };

  handleOnLayout = (event: OnLayout) => {
    const { width: inputWidth } = event.nativeEvent.layout;
    this.updateWidth(inputWidth);
  };

  render() {
    const {
      onChangeText,
      placeholder,
      value,
      disabled,
      fontSize,
      forwardRef,
      onFocus,
      onBlur,
      onKeyPress,
      autoFocus,
      autoCorrect,
    } = this.props;
    const { componentWidth } = this.state;

    const dynamicStyle = {
      common: { fontSize },
      input: {
        width: componentWidth,
      },
    };

    const sizerValue = value || (placeholder || '');

    return (
      <View style={styles.container}>
        <TextInput
          autoCorrect={autoCorrect}
          autoFocus={autoFocus}
          onKeyPress={onKeyPress}
          onBlur={onBlur}
          onFocus={onFocus}
          ref={forwardRef}
          editable={!disabled}
          onChangeText={onChangeText}
          value={value}
          placeholder={placeholder}
          style={[styles.input, dynamicStyle.input, dynamicStyle.common]}
        />
        <Text
          accessibilityRole="none"
          style={[styles.hiddenSizer, dynamicStyle.common]}
          onLayout={this.handleOnLayout}
        >
          {sizerValue}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    minHeight: 24,
    flexDirection: 'row',
    flex: 1,
  },
  input: {
    flex: 1,
    web: {
      outline: 'none',
    },
  },
  hiddenSizer: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    opacity: 0,
    zIndex: -100,
    web: {
      visibility: 'hidden',
    },
  },
});

// $FlowFixMe Missing React.forwardRef definition
export default React.forwardRef((props, ref) => (
  <InputField {...props} forwardRef={ref} />
));
