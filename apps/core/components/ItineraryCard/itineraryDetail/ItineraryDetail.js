// @flow

import * as React from 'react';
import { View, ScrollView, Platform } from 'react-native';
import { Button, StyleSheet } from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { graphql, createFragmentContainer } from '@kiwicom/margarita-relay';

import type { ItineraryDetail as ItineraryType } from './__generated__/ItineraryDetail.graphql';
import ItineraryDetailWrapper from './ItineraryDetailWrapper';
import SectorsList from './SectorsList';

type Props = {|
  +data: ?ItineraryType,
  +localizedPrice: string,
  +onClose: () => void,
  +onBookPress: string => void,
|};

class ItineraryDetail extends React.Component<Props> {
  handleBookPress = () => {
    this.props.onBookPress('lol'); // @TODO use real ID
    this.props.onClose();
  };

  render() {
    const { data, localizedPrice, onClose } = this.props;

    return (
      <ItineraryDetailWrapper onClose={onClose}>
        <View style={styles.container}>
          <ScrollView style={styles.content}>
            <SectorsList data={data} />
          </ScrollView>
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

export default createFragmentContainer(
  ItineraryDetail,
  graphql`
    fragment ItineraryDetail on Itinerary {
      ...SectorsList
    }
  `,
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  content: {
    flex: 1,
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
