// @flow

import * as React from 'react';
import { View } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import { Slider } from '../Slider';
import { StyleSheet } from '../PlatformStyleSheet';

type Props = {|
  +onNightsInDestinationChange?: ?(Array<number>) => void,
  +nightsInDestination?: ?$ReadOnlyArray<number>,
  +nightsInDestinationLabel?: string,
|};

export default class NightsInDestination extends React.Component<Props> {
  render() {
    return (
      this.props.nightsInDestination != null &&
      this.props.onNightsInDestinationChange != null && (
        <View style={styles.container}>
          <View style={styles.container} />
          <View style={styles.slider}>
            <Slider
              minValue={1}
              maxValue={30}
              startValue={this.props.nightsInDestination[0]}
              endValue={this.props.nightsInDestination[1]}
              step={1}
              label={this.props.nightsInDestinationLabel ?? null}
              type="multi"
              snapped
              onValuesChange={this.props.onNightsInDestinationChange}
            />
          </View>
        </View>
      )
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slider: {
    marginBottom: parseInt(defaultTokens.spaceMedium, 10),
  },
});
