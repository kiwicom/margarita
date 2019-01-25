// @flow

import * as React from 'react';
import { View, Platform, TextInput } from 'react-native';
import type { ViewLayoutEvent } from 'react-native/Libraries/Components/View/ViewPropTypes';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import DeleteButton from './components/DeleteButton';
import TagsContainer from './components/TagsContainer';
import InputField from './components/InputField';
import { StyleSheet } from '../PlatformStyleSheet';
import { Text } from '../Text';

import { INPUT_MIN_WIDTH, TAGS_MIN_WIDTH } from './constants';

type Props = {|
  +label: string,
  +onChangeText: (value: string) => void,
  +placeholder: string,
  +selected?: string[],
  +disabled?: boolean,
  +fontSize: number,
  +onClearPress?: () => void,
  +value?: string,
  +autoFocus: boolean,
|};

type State = {
  value: string,
  isFocus: boolean,
  containerWidth: ?number,
  inputWidth: ?number,
};

export default class TagInput extends React.Component<Props, State> {
  inputRef: ?{ current: null | React.Element<typeof TextInput> };
  static defaultProps = {
    fontSize: 16,
    autoFocus: true,
  };

  constructor(props: Props) {
    super(props);
    this.inputRef = React.createRef();

    this.state = {
      value: props.value ?? '',
      containerWidth: null,
      inputWidth: null,
      isFocus: props.autoFocus,
    };
  }

  componentDidUpdate = (prevProps: Props) => {
    const { value } = this.props;
    if (value !== prevProps.value) {
      this.setState({ value });
    }
  };

  setContainerWidth = (event: ViewLayoutEvent) => {
    this.setState({ containerWidth: event.nativeEvent.layout.width });
  };

  setInputWidth = (event: ViewLayoutEvent) => {
    this.setState({ inputWidth: event.nativeEvent.layout.width });
  };

  subtractFromContainerWidth = (width: ?number) => {
    const { containerWidth } = this.state;
    if (containerWidth && width) {
      const newWidth = containerWidth - width;
      return newWidth < 0 ? 'auto' : newWidth;
    }
    return null;
  };

  getPlaceholder = () => {
    const { selected, placeholder } = this.props;
    return selected?.length === 0 && placeholder ? placeholder : null;
  };

  handleChange = (value: string) => {
    const { value: oldValue } = this.state;
    const { onChangeText } = this.props;
    if (value !== oldValue) {
      this.setState({ value });
      onChangeText(value);
    }
  };

  handleClear = () => {
    const { onClearPress } = this.props;
    this.setState({ value: '' });

    // $FlowFixMe property focus is missing in object type
    Platform.OS === 'web' && this.inputRef.current.focus();

    onClearPress?.();
  };

  handleOnFocus = () => {
    this.setState({ isFocus: true });
  };

  handleOnBlur = () => {
    this.setState({ isFocus: false });
  };

  render() {
    const { selected, fontSize, label, disabled } = this.props;
    const { value, inputWidth, isFocus } = this.state;
    const isButtonDisabled = !value.length ?? disabled;

    const dynamicStyle = StyleSheet.create({
      deleteButton: {
        opacity: value.length > 0 ? 1 : 0,
      },
      label: {
        fontSize,
      },
      border: {
        web: {
          boxShadow: isFocus
            ? `${defaultTokens.borderColorInputFocus} 0 0 0 2px inset`
            : `${defaultTokens.borderColorInput} 0 0 0 1px inset`,
        },
      },
    });

    return (
      <View style={[styles.container, dynamicStyle.border, dynamicStyle.label]}>
        <Text weight="bold" style={styles.label}>
          {label}
        </Text>
        <View style={styles.fieldContainer} onLayout={this.setContainerWidth}>
          <TagsContainer
            minWidth={TAGS_MIN_WIDTH}
            maxWidth={this.subtractFromContainerWidth(inputWidth)}
            tags={selected}
            fontSize={fontSize}
          />
          <InputField
            onFocus={this.handleOnFocus}
            onBlur={this.handleOnBlur}
            ref={this.inputRef}
            fontSize={fontSize}
            disabled={disabled}
            minWidth={INPUT_MIN_WIDTH}
            maxWidth={this.subtractFromContainerWidth(TAGS_MIN_WIDTH)}
            onLayout={this.setInputWidth}
            value={value}
            placeholder={this.getPlaceholder()}
            onChangeText={this.handleChange}
            autoFocus={isFocus}
          />
        </View>
        <DeleteButton
          style={dynamicStyle.deleteButton}
          onPress={this.handleClear}
          disabled={isButtonDisabled}
        />
      </View>
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
  },
});
