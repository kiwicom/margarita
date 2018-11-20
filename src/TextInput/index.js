// @flow

import * as React from 'react';
import { TextInput as RNTextInput, View, Text } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import { StyleSheet } from '..';
import FormLabel from './FormLabel';

type Props = {|
  +size?: 'small' | 'normal',
  +placeholder?: string,
  +value?: string,
  +disabled?: boolean,
  +required?: boolean,
  +inlineLabel?: boolean,
  +label: string,
  +prefix?: React.Node,
  +onFocus?: () => void | Promise<any>,
  +onBlur?: () => void | Promise<any>,
  +onChange?: () => void | Promise<any>,
|};

type State = {|
  focused: boolean,
|};

const Prefix = ({ children, size }) => {
  const prefix = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        color: defaultTokens.colorIconInput,
        size: size === 'small' ? 16 : 24,
      });
    }
    return child;
  });

  return (
    <View style={styles.prefix}>
      <Text style={styles.textInputPrefix}>{prefix}</Text>
    </View>
  );
};

const InlineLabel = ({ children }) => (
  <View style={styles.inlineLabel}>{children}</View>
);

class TextInput extends React.Component<Props, State> {
  state = {
    focused: false,
  };

  toggleFocus = () => {
    this.setState(state => ({
      focused: !state.focused,
    }));
  };

  onFocus = () => {
    const { onFocus, disabled } = this.props;
    if (!disabled) {
      this.toggleFocus();
      onFocus && onFocus();
    }
  };

  onBlur = () => {
    const { onBlur, disabled } = this.props;
    if (!disabled) {
      this.toggleFocus();
      onBlur && onBlur();
    }
  };

  render() {
    const {
      placeholder,
      size = 'normal',
      value,
      disabled,
      label,
      required,
      prefix,
      onChange,
      inlineLabel,
    } = this.props;
    const { focused } = this.state;
    return (
      <View>
        {label && !inlineLabel && (
          <FormLabel filled={!!value} required={required} disabled={disabled}>
            {label}
          </FormLabel>
        )}
        <View
          style={[
            styles.inputContainer,
            size === 'normal' ? styles.normalSize : styles.smallSize,
            disabled
              ? styles.inputContainerDisabled
              : styles.inputContainerDefault,
            focused
              ? styles.inputContainerBorderFocused
              : styles.inputContainerBorderDefault,
          ]}
        >
          {prefix && <Prefix size={size}>{prefix}</Prefix>}
          {label && inlineLabel && (
            <InlineLabel>
              <FormLabel
                filled={!!value}
                inlineLabel
                required={required}
                disabled={disabled}
              >
                {label}
              </FormLabel>
            </InlineLabel>
          )}
          <RNTextInput
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            onChangeText={onChange}
            placeholderTextColor={defaultTokens.colorPlaceholderInput}
            editable={!disabled}
            placeholder={placeholder}
            value={value}
            style={[
              styles.inputField,
              disabled ? styles.inputFieldDisabled : styles.inputFieldDefault,
            ]}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    borderWidth: 1,
    borderRadius: 3,
    paddingHorizontal: 12,
  },
  inputContainerDefault: {
    backgroundColor: defaultTokens.backgroundInput,
  },
  inputContainerDisabled: {
    backgroundColor: defaultTokens.backgroundInputDisabled,
  },
  inputField: {
    width: '100%',
    fontSize: 14,
    web: {
      outline: 'none',
    },
  },
  inputFieldDefault: {
    color: defaultTokens.colorTextInput,
  },
  inputFieldDisabled: {
    color: defaultTokens.colorTextInputDisabled,
  },
  normalSize: {
    height: 44,
  },
  smallSize: {
    height: 32,
  },
  inputContainerBorderFocused: {
    borderColor: defaultTokens.borderColorInputFocus,
  },
  inputContainerBorderDefault: {
    borderColor: defaultTokens.borderColorInput,
  },
  inlineLabel: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingEnd: 12,
  },
  prefix: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingEnd: 12,
  },
  textInputPrefix: {
    color: defaultTokens.colorTextInputPrefix,
  },
});

export default TextInput;
