// @flow

import * as React from 'react';

import TimelineInformation from './TimelineInformation';

import { Icon } from '../Icon';
import Text from '../Text';

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
