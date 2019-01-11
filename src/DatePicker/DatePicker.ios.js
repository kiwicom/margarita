/* @flow */

import * as React from 'react';
import {
  View,
  DatePickerIOS,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import { Text } from '../Text';
import { Touchable } from '../Touchable';
import { StyleSheet } from '../PlatformStyleSheet';

import type { Props } from './DatePickerTypes';

type State = {
  date: Date,
};

const parsePropsToState = ({ date }: Props) => {
  const tempDate = date ?? new Date();
  return {
    date: tempDate,
  };
};

export default class iOSDatePicker extends React.Component<Props, State> {
  static defaultProps = {
    mode: 'date',
  };

  constructor(props: Props) {
    super(props);

    this.state = {
      date: props.date ?? new Date(),
    };
  }

  componentDidUpdate = (prevProps: Props) => {
    const { date } = this.props;
    if (date != null && date !== prevProps.date) {
      this.setState(parsePropsToState(this.props));
    }
  };

  handleDismiss = () => {
    const { onDismiss } = this.props;
    onDismiss();
    this.setState(parsePropsToState(this.props));
  };

  handleConfirm = () => {
    const { onConfirm } = this.props;
    const { date } = this.state;
    onConfirm(date);
  };

  handleChangeDate = (date: Date) => {
    this.setState({
      date,
    });
  };

  render() {
    const { isVisible, mode, maxDate, minDate } = this.props;

    const { date } = this.state;

    return (
      <Modal
        transparent
        visible={isVisible}
        onRequestClose={this.handleDismiss}
        animationType="slide"
      >
        <TouchableWithoutFeedback onPress={this.handleDismiss}>
          <View style={styles.backdrop}>
            <View style={styles.content}>
              <DatePickerIOS
                date={date}
                onDateChange={this.handleChangeDate}
                mode={mode}
                maximumDate={maxDate}
                minimumDate={minDate}
              />
              <View style={styles.buttonsContainer}>
                <Touchable
                  onPress={this.handleDismiss}
                  style={styles.confirmButton}
                >
                  <Text style={styles.buttonText}>Cancel</Text>
                </Touchable>
                <Touchable
                  style={styles.confirmButton}
                  onPress={this.handleConfirm}
                >
                  <Text style={styles.buttonText}>OK</Text>
                </Touchable>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flexDirection: 'column',
    backgroundColor: 'white',
    borderRadius: parseFloat(defaultTokens.borderRadiusBadge),
    width: '90%',
  },
  confirmButton: {
    borderColor: defaultTokens.paletteWhite,
    borderTopWidth: StyleSheet.hairlineWidth,
    height: 50,
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
    color: defaultTokens.paletteProductNormal,
    fontSize: parseFloat(defaultTokens.fontSizeButtonLarge),
    fontWeight: 'normal',
    backgroundColor: 'transparent',
  },
});
