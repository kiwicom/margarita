// @flow

import * as React from 'react';
import {
  TextInput as RNTextInput,
  View,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import StyleSheet from '../PlatformStyleSheet';
import FormLabel from './FormLabel';
import { createStylesGenerator } from '../utils';
import { fontSize, height } from './styles';

import type { Props, State } from './TextInputTypes';

const fontSizeGen = createStylesGenerator('fontSize', fontSize);
const heightGen = createStylesGenerator('height', height);

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
    if (!disabled) {
      this.toggleFocus();
      onFocus && onFocus();
    }
  };

  handleOnBlur = () => {
    const { onBlur, disabled } = this.props;
    if (!disabled) {
      this.toggleFocus();
      onBlur && onBlur();
    }
  };

  handleChangeText = (value: string) => {
    const { onChangeText, disabled } = this.props;
    if (!disabled) {
      onChangeText && onChangeText(value);
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
      maxLength,
      minLength,
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
              styles[size],
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
            {/* $FlowFixMe
             * Prop `minLength` is not supported in rn-web
             * and doesn't exist in TextInput props,
             * but it's catched by web and works with input field.
             */}
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
              maxLength={maxLength}
              minLength={minLength}
              style={[
                styles.inputField,
                disabled ? styles.inputFieldDisabled : styles.inputFieldDefault,
                styles[size],
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
    borderWidth: parseFloat(defaultTokens.borderWidthInput),
    borderRadius: parseFloat(defaultTokens.borderRadiusNormal),
    paddingHorizontal: parseFloat(defaultTokens.spaceSmall),
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
    paddingEnd: parseFloat(defaultTokens.spaceSmall),
  },
  prefix: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingEnd: parseFloat(defaultTokens.spaceSmall),
  },
  suffix: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingStart: parseFloat(defaultTokens.spaceSmall),
  },
  textInputPrefix: {
    color: defaultTokens.colorTextInputPrefix,
  },
  ...fontSizeGen(),
  ...heightGen(),
});

export default TextInput;
