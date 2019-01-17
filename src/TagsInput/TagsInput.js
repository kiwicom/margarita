// @flow

import * as React from 'react';
import {
  View,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';

import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import DeleteButton from './components/DeleteButton';
import TagsContainer from './components/TagsContainer';
import InputField from './components/InputField';
import { StyleSheet } from '../PlatformStyleSheet';
import { Text } from '../Text';

type Props = {|
  +fontSize: number,
  +onChangeText: (value: string) => void,
  +tags: string[],
  +disabled?: boolean,
  +label?: string,
  +onClearPress?: () => void,
  +onKeyPress?: (e: Event) => void,
  +placeholder?: string,
  +value?: string,
  +autofocus?: boolean,
|};

type State = {
  value: string,
  isFocus: boolean,
};

type Event = { nativeEvent: { key: string } };

const boxShadow = isFocus => {
  if (Platform.OS === 'web') {
    return {
      boxShadow: isFocus
        ? `${defaultTokens.borderColorInputFocus} 0 0 0 2px inset`
        : `${defaultTokens.borderColorInput} 0 0 0 1px inset`,
    };
  }
  return null;
};

export default class TagsInput extends React.Component<Props, State> {
  inputRef: any;
  scrollRef: any;

  static defaultProps = {
    fontSize: parseFloat(defaultTokens.fontSizeButtonLarge),
    tags: [],
  };

  constructor(props: Props) {
    super(props);
    this.inputRef = React.createRef();
    this.scrollRef = React.createRef();

    this.state = {
      value: props.value || '',
      isFocus: false,
    };
  }

  static getDerivedStateFromProps(props: Props, state: State) {
    // if the "props.value" has changed update state
    const { value } = props;
    if (typeof value === 'string' && value !== state.value) {
      return {
        value,
      };
    }
    return null;
  }

  getPlaceholder = () => {
    const { tags, placeholder } = this.props;
    // Don't render placeholder if the Tags are rendered.
    return tags.length === 0 && placeholder ? placeholder : null;
  };

  handleChange = (value: string) => {
    const { value: oldValue } = this.state;
    const { onChangeText } = this.props;
    if (value !== oldValue) {
      this.setState({ value }, this.scrollRef.current.scrollToEnd);
      onChangeText(value);
    }
  };

  handleOnFocus = () => {
    const { isFocus } = this.state;
    if (isFocus) return;
    this.setState({ isFocus: true });
    this.inputRef.current && this.inputRef.current.focus();
  };

  handleOnBlur = () => {
    this.setState({ isFocus: false });
  };

  handleClear = () => {
    const { onClearPress } = this.props;
    this.setState({ value: '' }, onClearPress);
    this.handleOnFocus();
  };

  render() {
    const {
      disabled,
      fontSize,
      label,
      onKeyPress,
      tags,
      autofocus,
    } = this.props;
    const { isFocus, value } = this.state;

    const isButtonDisabled = (!value && tags.length === 0) ?? disabled;

    const dynamicStyle = {
      deleteButton: {
        opacity: value || tags.length > 0 ? 1 : 0,
      },
      label: {
        fontSize,
      },
      border: {
        ...boxShadow(isFocus),
      },
    };

    return (
      <TouchableWithoutFeedback onPress={this.handleOnFocus}>
        <View style={[styles.container, dynamicStyle.border]}>
          {Boolean(label) && (
            <Text weight="bold" style={[styles.label, dynamicStyle.label]}>
              {label}
            </Text>
          )}
          <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            onContentSizeChange={this.scrollRef?.current?.scrollToEnd}
            scrollEventThrottle={3}
            showsHorizontalScrollIndicator={false}
            horizontal
            style={styles.fieldContainer}
            ref={this.scrollRef}
          >
            <TagsContainer tags={tags} fontSize={fontSize} />
            <InputField
              autofocus={autofocus}
              onKeyPress={onKeyPress}
              onFocus={this.handleOnFocus}
              onBlur={this.handleOnBlur}
              ref={this.inputRef}
              fontSize={fontSize}
              disabled={disabled}
              value={value}
              placeholder={this.getPlaceholder()}
              onChangeText={this.handleChange}
            />
          </ScrollView>
          <DeleteButton
            opacity={dynamicStyle.deleteButton.opacity}
            onPress={this.handleClear}
            disabled={isButtonDisabled}
          />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 9,
    paddingHorizontal: 8,
  },
  fieldContainer: {
    flexDirection: 'row',
    flex: 1,
    marginStart: 4,
    overflow: 'hidden',
  },
  label: {
    color: defaultTokens.paletteInkDark,
    lineHeight: 16,
  },
});
