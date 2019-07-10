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
  +onDeletePress?: number => void,
  +tags: string[],
  +disabled?: boolean,
  +label?: string,
  +onClearPress?: () => void,
  +onKeyPress?: (e: Event) => void,
  +placeholder?: string,
  +value?: string,
  +autoFocus: boolean,
  +autoCorrect: boolean,
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
        ? `${defaultTokens.borderColorInputFocus} 0 0 0 1px inset`
        : `${defaultTokens.borderColorInput} 0 0 0 1px inset`,
    };
  }
  return null;
};

export default class TagsInput extends React.Component<Props, State> {
  static defaultProps = {
    fontSize: parseFloat(defaultTokens.fontSizeButtonNormal),
    tags: [],
    autoFocus: false,
    autoCorrect: false,
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      value: props.value || '',
      isFocus: props.autoFocus,
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

  inputRef: any;
  scrollRef: any;

  handleChange = (value: string) => {
    const { value: oldValue } = this.state;
    const { onChangeText } = this.props;
    if (value !== oldValue) {
      this.setState({ value }, () => {
        if (this.scrollRef) {
          this.scrollRef.scrollToEnd();
        }
      });
      onChangeText(value);
    }
  };

  handleOnFocus = () => {
    const { isFocus } = this.state;
    if (isFocus) return;
    this.setState({ isFocus: true });
    if (this.inputRef?.current) {
      this.inputRef.current.focus();
    }
  };

  handleOnBlur = () => {
    this.setState({ isFocus: false });
  };

  handleClear = () => {
    const { onClearPress } = this.props;
    this.setState({ value: '' }, onClearPress);
    this.handleOnFocus();
  };

  setScrollRef = (ref: ?Element) => {
    this.scrollRef = ref;
  };

  setInputRef = (ref: ?Element) => {
    this.inputRef = ref;
  };

  render() {
    const {
      disabled,
      fontSize,
      label,
      onKeyPress,
      tags,
      autoFocus,
      autoCorrect,
      onDeletePress,
      placeholder,
    } = this.props;
    const { isFocus, value } = this.state;

    const dynamicStyle = {
      label: {
        fontSize,
      },
      border: {
        ...boxShadow(isFocus),
      },
    };

    const deleteButtonOpacity =
      value || tags.length > 0 ? styles.opacityOne : styles.opacityZero;

    const isButtonDisabled = (!value && tags.length === 0) ?? disabled;

    const areTagsRendered = tags.length > 0;
    return (
      <>
        <View style={styles.labelContainer}>
          {label != null && label !== '' && (
            <Text weight="bold" style={[styles.label, dynamicStyle.label]}>
              {label}
            </Text>
          )}
          <DeleteButton
            style={deleteButtonOpacity}
            onPress={this.handleClear}
            disabled={isButtonDisabled}
          />
        </View>
        <View style={[styles.container, dynamicStyle.border]}>
          <View style={styles.fieldContainer}>
            <View style={styles.row}>
              {areTagsRendered && (
                <ScrollView
                  style={styles.scrollView}
                  contentContainerStyle={styles.scrollContainer}
                  ref={this.setScrollRef}
                >
                  <TagsContainer
                    tags={tags}
                    fontSize={fontSize}
                    onDeletePress={onDeletePress}
                  />
                  <TouchableWithoutFeedback onPress={this.handleOnFocus}>
                    <View style={styles.inputFieldFocus} />
                  </TouchableWithoutFeedback>
                </ScrollView>
              )}
              <View
                style={[
                  styles.inputFieldContainer,
                  areTagsRendered && styles.inputFieldBorder,
                ]}
              >
                <InputField
                  autoCorrect={autoCorrect}
                  autoFocus={autoFocus}
                  onKeyPress={onKeyPress}
                  onFocus={this.handleOnFocus}
                  onBlur={this.handleOnBlur}
                  ref={this.setInputRef}
                  fontSize={fontSize}
                  disabled={disabled}
                  value={value}
                  placeholder={placeholder ?? 'Add new location...'}
                  onChangeText={this.handleChange}
                />
              </View>
            </View>
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    maxHeight: 150,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingVertical: parseFloat(defaultTokens.spaceXSmall),
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: parseFloat(defaultTokens.spaceXSmall),
  },
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: parseFloat(defaultTokens.spaceXSmall),
    borderRadius: 3,
  },
  fieldContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  label: {
    color: defaultTokens.paletteInkDark,
    lineHeight: 16,
  },
  opacityZero: {
    opacity: 0,
  },
  opacityOne: {
    opacity: 1,
  },
  row: {
    flex: 1,
    flexDirection: 'column',
  },
  inputFieldContainer: {
    paddingVertical: parseFloat(defaultTokens.spaceXSmall),
    height: 50,
  },
  inputFieldBorder: {
    borderTopWidth: 1,
    borderTopColor: defaultTokens.borderColorTable,
  },
  inputFieldFocus: { flex: 1 },
});
