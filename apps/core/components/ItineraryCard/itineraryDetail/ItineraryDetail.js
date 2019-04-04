// @flow

import * as React from 'react';
import { View, ScrollView, Platform } from 'react-native';
import { Button, StyleSheet } from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { graphql, createFragmentContainer } from '@kiwicom/margarita-relay';
import { ItineraryTypeRenderer } from '@kiwicom/margarita-components';

import type { ItineraryDetail_data as ItineraryType } from './__generated__/ItineraryDetail_data.graphql';
import ItineraryDetailWrapper from './ItineraryDetailWrapper';
import ItineraryOneWay from './ItineraryOneWay';
import ItineraryReturn from './ItineraryReturn';

type Props = {|
  +data: ?ItineraryType,
  +localizedPrice: string,
  +onClose: () => void,
  +onBookPress: (?string) => void,
|};

class ItineraryDetail extends React.Component<Props> {
  handleBookPress = () => {
    this.props.onBookPress(this.props.data?.bookingToken);
    this.props.onClose();
  };

  render() {
    const { data, localizedPrice, onClose } = this.props;
    const typename = data?.__typename;
    return (
      <ItineraryDetailWrapper onClose={onClose}>
        <View style={styles.container}>
          <ScrollView style={styles.content}>
            <ItineraryTypeRenderer
              typename={typename}
              oneWayComponent={<ItineraryOneWay itinerary={data} />}
              returnComponent={<ItineraryReturn itinerary={data} />}
            />
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

export default createFragmentContainer(ItineraryDetail, {
  data: graphql`
    fragment ItineraryDetail_data on ItineraryInterface {
      __typename
      bookingToken
      ... on ItineraryOneWay {
        ...ItineraryOneWay_itinerary
      }
      ... on ItineraryReturn {
        ...ItineraryReturn_itinerary
      }
    }
  `,
});

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
      flex: -1,
      marginStart: 0,
    },
  },
});
