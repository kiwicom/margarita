// @flow

import * as React from 'react';
import { Icon, type StylePropType } from '@kiwicom/universal-components';

import TimelineInformation from './TimelineInformation';
import Text from '../text/Text';

type Props = {|
  +differentAirportWarning: string,
  +containerStyle?: StylePropType,
|};

export default function TimelineDifferentAirport({
  differentAirportWarning,
  containerStyle,
}: Props) {
  return (
    <TimelineInformation
      icon={<Icon name="city" />}
      information={<Text type="critical">{differentAirportWarning}</Text>}
      containerStyle={containerStyle}
    />
  );
}
