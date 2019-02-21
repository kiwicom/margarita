// @flow

import * as React from 'react';
import { View, Platform } from 'react-native';
import { Button, StyleSheet, Text } from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import ItineraryDetailWrapper from './ItineraryDetailWrapper';

type Props = {|
  +localizedPrice: string,
  +onClose: () => void,
  +onBookPress: string => void,
|};

export default class ItineraryDetail extends React.Component<Props> {
  handleBookPress = () => {
    this.props.onBookPress('lol'); // @TODO use real ID
    this.props.onClose();
  };

  render() {
    const { localizedPrice, onClose } = this.props;

    return (
      <ItineraryDetailWrapper onClose={onClose}>
        <View style={styles.container}>
          <View style={styles.content}>
            <Text>TODO: Detail data</Text>
          </View>
          <View style={styles.footer}>
            {Platform.OS !== 'web' && (
              <Button type="secondary" label="CLOSE" onPress={onClose} />
            )}
            <View style={styles.bookButtonWrapper}>
              <Button
                label={`BOOK FOR ${localizedPrice}`}
                onPress={this.handleBookPress}
              />
            </View>
          </View>
        </View>
      </ItineraryDetailWrapper>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  content: {
    flex: 1,
    padding: parseInt(defaultTokens.spaceMedium, 10),
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: parseInt(defaultTokens.spaceMedium, 10),
  },
  bookButtonWrapper: {
    flex: 1,
    marginStart: parseInt(defaultTokens.spaceXSmall, 10),
    web: {
      flex: null,
      marginStart: 0,
    },
  },
});
