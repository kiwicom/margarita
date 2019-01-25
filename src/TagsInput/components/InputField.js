// @flow

import * as React from 'react';
import { View, TextInput, Text } from 'react-native';
import type { ViewLayoutEvent } from 'react-native/Libraries/Components/View/ViewPropTypes';
import { StyleSheet } from '../../PlatformStyleSheet';

type Props = {|
  +onChangeText: (value: string) => void,
  +value: string,
  +onLayout: (e: ViewLayoutEvent) => void,
  +maxWidth: ?number | 'auto',
  +minWidth: number,
  +fontSize: number,
  +disabled: ?boolean,
  +placeholder: ?string,
  +forwardRef: (el: any) => void,
  +onFocus: () => void,
  +onBlur: () => void,
  +autoFocus?: boolean,
|};

type State = {|
  componentWidth: number | 'auto',
|};

class InputField extends React.PureComponent<Props, State> {
  static defaultProps = {
    maxWidth: 'auto',
    minWidth: 'auto',
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      componentWidth: props.minWidth ?? 'auto',
    };
  }

  handleOnLayout = (event: ViewLayoutEvent) => {
    const { onLayout, maxWidth, minWidth, fontSize } = this.props;
    const { width: inputWidth } = event.nativeEvent.layout;

    /*
    There is a difference in character width in an input element and others. Especially with tiny characters.
    Because the input width is computed on the hidden helper container, the bufferWidth have to be added,
    otherwise, it leads to blink when the user has been writing.
    The bufferWidth is computed on font-size and multiplying by value 1.63 which is based on the experiment.
    */
    const getWidth = (width: number) => {
      const withBuffer = width + fontSize * 1.63;
      if (typeof maxWidth === 'number' && withBuffer > maxWidth) {
        return maxWidth;
      }
      if (typeof maxWidth === 'number' && withBuffer < minWidth) {
        return minWidth;
      }
      return withBuffer;
    };

    this.setState({
      componentWidth: getWidth(inputWidth),
    });

    onLayout(event);
  };

  render() {
    const {
      maxWidth,
      minWidth,
      onChangeText,
      placeholder,
      value,
      disabled,
      fontSize,
      forwardRef,
      onFocus,
      onBlur,
      autoFocus,
    } = this.props;
    const { componentWidth } = this.state;
    const dynamicStyle = StyleSheet.create({
      common: {
        minWidth,
        maxWidth,
        fontSize,
      },
      input: {
        width: componentWidth,
      },
    });

    return (
      <View style={styles.container}>
        <Text
          onLayout={this.handleOnLayout}
          style={[styles.hiddenSizer, dynamicStyle.common]}
        >
          {!value && placeholder ? placeholder : value}
        </Text>
        <TextInput
          onBlur={onBlur}
          onFocus={onFocus}
          ref={forwardRef}
          editable={!disabled}
          autoFocus={autoFocus}
          onChangeText={onChangeText}
          value={value}
          placeholder={placeholder}
          style={[styles.input, dynamicStyle.common, dynamicStyle.input]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  input: {
    web: {
      outline: 'none',
    },
  },
  hiddenSizer: {
    position: 'absolute',
    flexDirection: 'row',
    opacity: 0,
    bottom: 0,
    end: 0,
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
