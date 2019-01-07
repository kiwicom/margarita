// @flow

import * as React from 'react';
import { Icon, Text } from '@kiwicom/universal-components';

import TimelineInformation from './TimelineInformation';

type Props = {|
  +differentAirportWarning: string,
|};

export default function TimelineDifferentAirport({
  differentAirportWarning,
}: Props) {
  return (
    <TimelineInformation
      icon={<Icon name="city" />}
      information={<Text type="critical">{differentAirportWarning}</Text>}
    />
  );
}
