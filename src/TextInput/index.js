// @flow

import * as React from 'react';
import {
  TextInput as RNTextInput,
  View,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
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
  +label: React.Node,
  +prefix?: React.Node,
  +suffix?: React.Node,
  +type?: string,
  +onFocus?: () => void | Promise<any>,
  +onBlur?: () => void | Promise<any>,
  +onChangeText?: string => void | Promise<any>,
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

const Suffix = ({ children }) => {
  const suffix = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        size: 16,
      });
    }
    return child;
  });

  return <View style={styles.suffix}>{suffix}</View>;
};

const InlineLabel = ({ children }) => (
  <View style={styles.inlineLabel}>{children}</View>
);

class TextInput extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      focused: false,
    };
  }

  myref: ?RNTextInput;

  toggleFocus = () => {
    this.setState(state => ({
      focused: !state.focused,
    }));
  };

  handleOnFocus = () => {
    const { onFocus, disabled } = this.props;
    if (!disabled && onFocus) {
      this.toggleFocus();
      onFocus();
    }
  };

  handleOnBlur = () => {
    const { onBlur, disabled } = this.props;
    if (!disabled && onBlur) {
      this.toggleFocus();
      onBlur();
    }
  };

  handleChangeText = (value: string) => {
    const { onChangeText, disabled } = this.props;
    if (!disabled && onChangeText) {
      onChangeText(value);
    }
  };

  handleKeyboardType = (type: string) => {
    switch (type) {
      case 'number':
        return 'numeric';
      case 'email':
        return 'email-address';
      default:
        return 'default';
    }
  };

  refToTextInput = (ref: ?RNTextInput) => {
    this.myref = ref;
  };

  focusTextInput = () => {
    this.myref && this.myref.focus();
  };

  render() {
    const {
      placeholder,
      size = 'normal',
      disabled,
      label,
      required,
      prefix,
      inlineLabel,
      suffix,
      type = 'text',
      value,
    } = this.props;
    const { focused } = this.state;
    return (
      <TouchableWithoutFeedback onPress={this.focusTextInput}>
        <View style={styles.inputWrapper}>
          {label != null && !inlineLabel && (
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
            {prefix != null && <Prefix size={size}>{prefix}</Prefix>}
            {label != null && inlineLabel && (
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
              ref={this.refToTextInput}
              onFocus={this.handleOnFocus}
              onBlur={this.handleOnBlur}
              onChangeText={this.handleChangeText}
              placeholderTextColor={defaultTokens.colorPlaceholderInput}
              editable={!disabled}
              placeholder={placeholder}
              value={value}
              keyboardType={this.handleKeyboardType(type)}
              secureTextEntry={type === 'password'}
              style={[
                styles.inputField,
                disabled ? styles.inputFieldDisabled : styles.inputFieldDefault,
              ]}
            />
            {suffix != null && <Suffix>{suffix}</Suffix>}
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  inputWrapper: {
    web: {
      cursor: 'text',
    },
  },
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
    flex: 1,
    width: '100%',
    height: '100%',
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
  suffix: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingStart: 12,
  },
  textInputPrefix: {
    color: defaultTokens.colorTextInputPrefix,
  },
});

export default TextInput;
