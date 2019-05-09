// @flow

import * as React from 'react';
import { View } from 'react-native';
import { format, isSameDay } from 'date-fns';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import { StyleSheet, type StylePropType } from '../../PlatformStyleSheet';
import ControlContainerItem from './ControlContainerItem';

type Props = {|
  +dateLabel: string,
  +nightsInDestinationLabel?: string,
  +nightsInDestination?: $ReadOnlyArray<number>,
  +dates: $ReadOnlyArray<Date>,
  +dateFormat: string,
  +style?: StylePropType,
  +onActiveTabChange: number => void,
  +isNightsInDestinationVisible?: boolean,
  +isNightsInDestinationSelected?: boolean,
|};

export default class ControlContainer extends React.Component<Props> {
  render() {
    const {
      dateLabel,
      nightsInDestinationLabel,
      nightsInDestination,
      dates,
      dateFormat,
      style,
      onActiveTabChange,
      isNightsInDestinationVisible,
      isNightsInDestinationSelected,
    } = this.props;
    const formattedDate = isSameDay(dates[0], dates[1])
      ? format(dates[0], dateFormat)
      : `${format(dates[0], dateFormat)}–${format(dates[1], dateFormat)}`;
    return (
      <View style={[styles.row, style]}>
        <ControlContainerItem
          value={formattedDate}
          label={dateLabel}
          active={!isNightsInDestinationSelected}
          onPress={onActiveTabChange}
          tabId={0}
        />
        {isNightsInDestinationVisible &&
          nightsInDestinationLabel &&
          nightsInDestination && (
            <ControlContainerItem
              value={`${nightsInDestination[0]}-${
                nightsInDestination[1]
              } nights`}
              label={nightsInDestinationLabel}
              active={isNightsInDestinationSelected}
              onPress={onActiveTabChange}
              tabId={1}
              style={styles.info}
            />
          )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  info: {
    marginStart: parseFloat(defaultTokens.spaceXSmall),
  },
});
